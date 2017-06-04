var fs = require('fs')
var PouchDB = require('pouchdb')
var models = require('./campaign')

var db = new PouchDB('campaigns', {auto_compaction: true});

function run_queries(argument) {
    console.log('Running Queries')
    db.query('index/campaign_zipcode_count', {
        key: "19962",
    }).then(console.log)

    db.query('index/campaign_zipcode', {
        key: "19962",
        include_docs: true,
    }).then(function(results){
        results.rows.forEach(function(row) {
            var campaign = campaign.Campaign.fromObj(row.doc)
            console.log(campaign.toJson());
        });

    });
}

run_queries()
