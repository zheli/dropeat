'use strict';

describe('Service: apiData', function () {

  // load the service's module
  beforeEach(module('dropeatApp'));

  // instantiate service
  var apiData;
  beforeEach(inject(function (_apiData_) {
    apiData = _apiData_;
  }));

  it('should do something', function () {
    expect(!!apiData).toBe(true);
  });

});
