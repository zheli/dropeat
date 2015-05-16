'use strict';

describe('Controller: CustomerprogressCtrl', function () {

  // load the controller's module
  beforeEach(module('dropeatApp'));

  var CustomerprogressCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CustomerprogressCtrl = $controller('CustomerprogressCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
