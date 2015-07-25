var assert = require('assert');

describe('lambda_config', function() {
  it('object for each', function() {
    var obj = {
      "b": 123,
      "a": "abc",
      "c": [1,2,3],
      "d": {
        "e": "E"
      }
    };

    var expect = [obj.b, obj.a, obj.c, obj.d];
    Object.keys(obj).forEach(function(element, index) {
      assert.equal(obj[element],
          expect[index]);
    });
  });

  it('number for each', function() {
    var obj = 123

    Object.keys(obj).forEach(function(element, index) {
//      assert.equal(false, true);
    });
  });

  it('str for each', function() {
    var obj = "123"

    Object.keys(obj).forEach(function(element, index) {
//      assert.equal(false, true);
    });
  });

  it('hash for each', function() {
    var obj = {"a": 1};

    Object.keys(obj).forEach(function(element, index) {
//      assert.equal(false, true);
    });
  });

  it('hash typeof "Object"', function() {
    var obj = {"a": 1};
    assert.equal('object', typeof(obj));
  });

});
