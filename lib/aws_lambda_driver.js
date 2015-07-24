"use strict"

exports.execute = function(js_path, event_json) {
  var lambda = require(js_path);
  var event = require(event_json);
  var context = {
    invokeid: "",
    logGroupName: js_path,
    logStreamName: "",
    functionName: js_path,
    memoryLimitInMB: '0',
    functionVersion: '',
    isDefaultFunctionVersion: false,
    getRemainingTimeInMillis: function() {return 0;},
    succeed: function(result) { console.log("succeed: ", result); },
    fail: function(result)  { console.log("fail: ", result); },
    done: function(err, result) {console.log("done: ", err, result); }
  }; 

  lambda.handler(event, context);
}; 
