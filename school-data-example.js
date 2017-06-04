var fs = require('fs')
var PouchDB = require('pouchdb')
var models = require('./models')

var db = new PouchDB('schools', {auto_compaction: true});

function run_queries(argument) {
    console.log('Running Queries')
    db.query('index/school_zipcode_count', {
        key: "19962",
    }).then(console.log)

    db.query('index/school_zipcode', {
        key: "19962",
        include_docs: true,
    }).then(function(results){
        results.rows.forEach(function(row) {
            var school = models.School.fromObj(row.doc)
            console.log(school.toJson());
        });

    });
}

run_queries()
