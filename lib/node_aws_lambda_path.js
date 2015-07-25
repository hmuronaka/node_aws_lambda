"use strict"
var path = require('path');

exports.make_lambda_path = function(lambda_name) {
  return make_path(process.cwd(), 'lambdas', lambda_name, 'js');
}

exports.make_event_path = function(event_name) {
  return make_path(process.cwd(), 'events', event_name, 'json');
}

exports.remove_extension = function(file_path) {
  var result = file_path;

  var extension = path.extname(file_path);
  if( extension && extension !== '' ) {
    var regexp = new RegExp(extension + "$");
    result = result.replace(regexp, "");
  }

  return result;
}

exports.change_extension = function(file_path, to_ext) {
  var result = file_path;
  var file_ext = path.extname(file_path);
  if( file_ext !== '') {
    var regexp = new RegExp(file_ext + "$");
    result = file_path.replace(regexp, to_ext);
  }
  return result;
}


function make_path(from_path, target_path, name, extension) {
  var result_path = path.join(from_path, target_path, name);
  if( result_path && path.extname(result_path) === '' ) {
    result_path = result_path + "." + extension;
  }
  return result_path;
}


