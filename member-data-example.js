var fs = require('fs')
var PouchDB = require('pouchdb')
var models = require('./member')

var db = new PouchDB('members', {auto_compaction: true});

function run_queries(argument) {
    console.log('Running Queries')
    db.query('index/member_zipcode_count', {
        key: "19962",
    }).then(console.log)

    db.query('index/member_zipcode', {
        key: "19962",
        include_docs: true,
    }).then(function(results){
        results.rows.forEach(function(row) {
            var member = member.Member.fromObj(row.doc)
            console.log(member.toJson());
        });

    });
}

run_queries()
