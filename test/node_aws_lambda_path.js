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
  it('should return cwd()/lambdas/mylambda.js when lambda name is mylambda', function() {
    assert.equal(path.join(process.cwd(), 'lambdas/mylambda.js'),
        my_path.make_lambda_path('mylambda'));
  });

  it('should return cwd()/lambdas/mylambda.js when lambda name is mylambda.js', function() {
    assert.equal(path.join(process.cwd(), 'lambdas/mylambda.js'),
        my_path.make_lambda_path('mylambda.js'));
  });

  it('should return cwd()/events/myevent.json when event name is myevent', function() {
    assert.equal(path.join(process.cwd(), 'events/myevent.json'),
        my_path.make_event_path('myevent'));
  });

  it('should return cwd()/events/myevent.json when event name is myevent.json', function() {
    assert.equal(path.join(process.cwd(), 'events/myevent.json'),
        my_path.make_event_path('myevent.json'));
  });
});

describe('operate path', function() {
  it('should remove .js from mylambda.js', function() {
    assert.equal('mylambda',
        my_path.remove_extension('mylambda.js'));
  });

  it('should "mylambda" when extension from mylambda', function() {
    assert.equal('mylambda',
        my_path.remove_extension('mylambda'));
  });

  it('should mylambda.json from mylambda.js', function() {
    assert.equal('mylambda.json',
        my_path.change_extension('mylambda.js', '.json'));
  });

  it('should mylambda.json from mylambda', function() {
    assert.equal('mylambda',
        my_path.change_extension('mylambda', '.json'));
  });



});
