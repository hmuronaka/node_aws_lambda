var assert = require('assert');
var path = require('path');
var my_path = require('../lib/node_aws_lambda_path');

describe('path', function() {
  describe('path.extname', function() {
    it('should return "" when path is "mylambda"', function() {
      assert.equal('',
          path.extname('mylambda'));
    });

    it('should return ".js" when path is "mylambda.js"', function() {
      assert.equal('.js',
          path.extname('mylambda.js'));
    });

    it('should return null when path is null', function() {
      assert.equal(null,
          null);
    });

    it('should return null when path is null', function() {
      assert.equal(null,
          null);
    });
  });
});

describe('make_path', function() {
  it('should return cwd()/lambdas/mylambda.js', function() {
    assert.equal(path.join(process.cwd(), 'lambdas/mylambda.js'),
        my_path.make_lambda_path('mylambda.js'));

    assert.equal(path.join(process.cwd(), 'lambdas/mylambda.js'),
        my_path.make_lambda_path('mylambda'));
  });
});
