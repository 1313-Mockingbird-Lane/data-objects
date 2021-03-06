var fs = require('fs')
var PouchDB = require('pouchdb')
var models = require('./models')

var school_data = [];

var lineReader = require('readline').createInterface({
  input: require('fs').createReadStream('./data/schools.lsjson')
});
lineReader.on('line', function (line) {
    school_data.push(models.School.fromJson(line))
});

var db = new PouchDB('schools', {auto_compaction: true});

function init() {
    db.info().then(function (info) {
        if(info.doc_count == 0) {
            console.log("Empty DB found. Populating with data.")
            create_index()
        }
    })
}

function create_index() {
    console.log('Creating Indexes')
    var ddoc = {
      _id: '_design/index',
      views: {
        school_name: {
          map: function (doc) {
            if(doc.type === '_school') {
              emit(doc.name);
            }
          }.toString(),
        },
        school_zipcode: {
          map: function (doc) {
            if(doc.type === '_school') {
              emit(doc.zipcode);
            }
          }.toString(),
        },
        school_zipcode_count: {
          map: function (doc) {
            if(doc.type === '_school') {
              emit(doc.zipcode);
            }
          }.toString(),
          reduce: '_count'
        },

      }
    };

    db.put(ddoc).then(function () {
        load_schools()
    }).catch(function (err) {
        console.error(err)
    });

}

function load_schools() {
    console.log('Loading Schools');

    db.bulkDocs(
        school_data
    ).then(function (response) {
    }).catch(function (err) {
        console.error(err)
    });
}

init()

