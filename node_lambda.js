console.log(process.argv);

var Program = require('commander');

Program
  .version('0.0.1')
  .usage('lamda-js, event-json')
  .parse(process.argv);

if(Program.args.length != 2) {
  Program.help();
} else {
  var awsLambdaDriver = require('./aws_lambda_driver.js');
  awsLambdaDriver.execute(Program.args[0], Program.args[1]);
}

