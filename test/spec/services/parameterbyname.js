'use strict';

describe('Service: ParameterByName', function () {

  // load the service's module
  beforeEach(module('cuantoQuedaApp'));

  // instantiate service
  var ParameterByName;
  beforeEach(inject(function (_ParameterByName_) {
    ParameterByName = _ParameterByName_;
  }));

  it('should do something', function () {
    expect(!!ParameterByName).toBe(true);
  });

});
