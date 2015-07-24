"use strict"

var Program = require('commander');
var Fs = require('fs');
var Path = require('path');

Program
  .version('0.0.1')
  .usage('lamda-js, event-json')
  .parse(process.argv);


function main() {
  if(Program.args.length < 1) {
    Program.help();
  } else {
    var awsLambdaDriver = require('./aws_lambda_driver.js');

    var lambda_func_path = make_lambda_path(Program.args[0]);
    var event_path = null;
    if (Program.args.length >= 2 ) {
      event_path = make_event_path(Program.args[1]);
    }
    awsLambdaDriver.execute(lambda_func_path, event_path);
  }
}

function make_lambda_path(lambda_name) {
  return make_path(process.cwd(), 'lambdas', lambda_name, 'js');
}

function make_event_path(event_name) {
  return make_path(process.cwd(), 'events', event_name, 'json');
}

function make_path(from_path, path, name, extension) {
  var path = Path.join(from_path, path, name);
  if( !Path.extname(path) ) {
    path = path + "." + extension;
  }
  return path;
}

main();
