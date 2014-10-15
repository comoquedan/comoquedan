'use strict';

describe('Service: BakeCookie', function () {

  // load the service's module
  beforeEach(module('cuantoQuedaApp'));

  // instantiate service
  var BakeCookie;
  beforeEach(inject(function (_BakeCookie_) {
    BakeCookie = _BakeCookie_;
  }));

  it('should do something', function () {
    expect(!!BakeCookie).toBe(true);
  });

});
