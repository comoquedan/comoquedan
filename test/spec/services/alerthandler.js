'use strict';

describe('Service: AlertHandler', function () {

  // load the service's module
  beforeEach(module('cuantoQuedaApp'));

  // instantiate service
  var AlertHandler;
  beforeEach(inject(function (_AlertHandler_) {
    AlertHandler = _AlertHandler_;
  }));

  it('should do something', function () {
    expect(!!AlertHandler).toBe(true);
  });

});
