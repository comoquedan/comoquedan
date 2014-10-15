'use strict';

describe('Controller: UsuarioCtrl', function () {

  // load the controller's module
  beforeEach(module('cuantoQuedaApp'));

  var UsuarioCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    UsuarioCtrl = $controller('UsuarioCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
