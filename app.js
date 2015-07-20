#!/usr/bin/env node
var argv = require('yargs').argv;
var prompt = require('prompt')

var help = require('./app/help');
var hello = require('./app/hello');
var zip = require('./app/zipFile');
var csvToJson = require('./app/csvToJson');

if(argv.help) {
  help();
}

if(argv.file) {
  zip(argv.file);
}

if(argv.csv) {
  csvToJson(argv.csv);
}

prompt.override = argv;
prompt.message = prompt.delimiter = '';
prompt.start();

prompt.get(['name'],function(err,res){
  hello(res.name);
});
