"use_strict"
var path = require('path');

// Goal
// lambda_config.get('lambda_name');
// -> get a default config from config/default_lambda_config.json fast
// -> get lambda_name's config from lambda_configs/lambda_name.json
//

function override_defaults_config(default_config, lambda_config) {
  Object.keys(default_config).forEach(function(element, index) {
    if( lambda_config[element] === 'undefined' ) {
        lambda_config[element] = default_config[element];
    } else {
      if (typeof(default_config[element]) === 'object' &&
          typeof(lambda_config[element]) === 'object') {
          ) {
        override_defaults_config(default_config[element], lambda_config[element]);
      }
    }
  });
}

exports.get_lambda_confing = function(lambda_path) {

  lambda_name = my_path.remove_extension(lambda_path);
  lambda_config_name = lambda_name + ".json";

  default_config = require('../lambda_configs/default.json');
  lambda_config = require('../lambda_configs/' + lambda_config_name);

  override_defaults_config(default_config, lambda_config);

  return lambda_config;
};


