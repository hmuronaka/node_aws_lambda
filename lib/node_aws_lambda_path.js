"use strict"
var path = require('path');

exports.make_lambda_path = function(lambda_name) {
  return make_path(process.cwd(), 'lambdas', lambda_name, 'js');
}

exports.make_event_path = function(event_name) {
  return make_path(process.cwd(), 'events', event_name, 'json');
}

function make_path(from_path, target_path, name, extension) {
  var result_path = path.join(from_path, target_path, name);
  if( result_path && path.extname(result_path) == '' ) {
    result_path = result_path + "." + extension;
  }
  return result_path;
}


