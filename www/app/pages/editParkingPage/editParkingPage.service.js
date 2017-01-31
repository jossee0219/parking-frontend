var app;
(function (app) {
    var pages;
    (function (pages) {
        var editParkingPage;
        (function (editParkingPage) {
            'use strict';
            var EditParkingPageService = (function () {
                function EditParkingPageService(restApi) {
                    this.restApi = restApi;
                }
                EditParkingPageService.prototype.getVehicleByUserId = function () {
                    var promise;
                    promise = this.restApi.queryObject({ url: 'users/3/vehicles' })
                        .$promise.then(function (response) {
                        return response;
                    })
                        .catch(function () {
                        return 'Error';
                    });
                    return promise;
                };
                EditParkingPageService.prototype.addVehicle = function (vehicleModel, vehicleYear, vehicleVin) {
                    var promise;
                    promise = this.restApi.create({ url: 'users/3/vehicles' }, { model: vehicleModel,
                        year: vehicleYear, vin: vehicleVin })
                        .$promise.then(function (response) {
                        return response;
                    })
                        .catch(function () {
                        return 'Error';
                    });
                    return promise;
                };
                EditParkingPageService.prototype.editVehicle = function (vehicleId, vehicleModel, vehicleYear, vehicleVin) {
                    var promise;
                    promise = this.restApi.update({ url: 'users/3/vehicles' }, { id: vehicleId, model: vehicleModel, year: vehicleYear, vin: vehicleVin })
                        .$promise.then(function (response) {
                        return response;
                    })
                        .catch(function () {
                        return 'Error';
                    });
                    return promise;
                };
                EditParkingPageService.prototype.deleteVehicle = function (vehicleId) {
                    var promise;
                    promise = this.restApi.remove({ url: 'users/3/vehicles' }, { id: vehicleId })
                        .$promise.then(function (response) {
                        return response;
                    })
                        .catch(function () {
                        return 'Error';
                    });
                    return promise;
                };
                return EditParkingPageService;
            }());
            EditParkingPageService.serviceId = 'psApp.pages.editParkingPage.editParkingPageService';
            EditParkingPageService.$inject = [
                'psApp.core.restApi.restApiService'
            ];
            editParkingPage.EditParkingPageService = EditParkingPageService;
            angular
                .module('psApp.pages.editParkingPage')
                .service(EditParkingPageService.serviceId, EditParkingPageService);
        })(editParkingPage = pages.editParkingPage || (pages.editParkingPage = {}));
    })(pages = app.pages || (app.pages = {}));
})(app || (app = {}));
//# sourceMappingURL=editParkingPage.service.js.map