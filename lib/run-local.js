"use strict"

var Program = require('commander');
var Fs = require('fs');
var MyPath = require('./node_aws_lambda_path');

Program
  .version('0.0.1')
  .usage('lamda-js, event-json')
  .parse(process.argv);


function main() {
  if(Program.args.length < 1) {
    Program.help();
  } else {
    var awsLambdaDriver = require('./aws_lambda_driver.js');

    var lambda_func_path = MyPath.make_lambda_path(Program.args[0]);
    var event_path = null;
    if (Program.args.length >= 2 ) {
      event_path = MyPath.make_event_path(Program.args[1]);
    }
    awsLambdaDriver.execute(lambda_func_path, event_path);
  }
}

main();
