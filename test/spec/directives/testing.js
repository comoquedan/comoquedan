'use strict';

describe('Directive: testing', function () {

  // load the directive's module
  beforeEach(module('cuantoQuedaApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<testing></testing>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the testing directive');
  }));
});
