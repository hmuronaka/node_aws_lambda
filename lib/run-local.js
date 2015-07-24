var Program = require('commander');
var Fs = require('fs');
var Path = require('path');

Program
  .version('0.0.1')
  .usage('lamda-js, event-json')
  .parse(process.argv);


function main() {
  if(Program.args.length != 2) {
    Program.help();
  } else {
    var awsLambdaDriver = require('./aws_lambda_driver.js');

    var lambda_func_path = make_lambda_path(Program.args[0]);
    var event_path = maek_event_path(Program.args[1]);
    awsLambdaDriver.execute(lambda_func_path, event_path);
  }
}

function make_lambda_path(lambda_name) {
  return make_path(__dirname, path, 'lambdas', 'js');
}

function make_event_path(event_name) {
  return make_path(__dirname, path, 'events', 'json');
}

function make_path(from_path, path, name, extension) {
  var path = Path.join(from_path, path, name);
  if( !Path.extname(path) ) {
    path = path + "." + extension;
  }
  return path;
}

main();
