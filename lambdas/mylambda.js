"use strict"

exports.handler = function(event, context) {
  console.log("event=", event);
  context.succeed({status_code: 200});
}
