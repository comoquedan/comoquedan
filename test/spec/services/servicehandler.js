'use strict';

describe('Service: ServiceHandler', function () {

  // load the service's module
  beforeEach(module('cuantoQuedaApp'));

  // instantiate service
  var ServiceHandler;
  beforeEach(inject(function (_ServiceHandler_) {
    ServiceHandler = _ServiceHandler_;
  }));

  it('should do something', function () {
    expect(!!ServiceHandler).toBe(true);
  });

});
