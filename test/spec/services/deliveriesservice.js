'use strict';

describe('Service: deliveriesService', function () {

  // load the service's module
  beforeEach(module('dropeatApp'));

  // instantiate service
  var deliveriesService;
  beforeEach(inject(function (_deliveriesService_) {
    deliveriesService = _deliveriesService_;
  }));

  it('should do something', function () {
    expect(!!deliveriesService).toBe(true);
  });

});
