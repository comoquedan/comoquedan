'use strict';

describe('Directive: staticInclude', function () {

  // load the directive's module
  beforeEach(module('cuantoQuedaApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<static-include></static-include>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the staticInclude directive');
  }));
});
