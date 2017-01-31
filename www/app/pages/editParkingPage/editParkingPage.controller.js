var app;
(function (app) {
    var pages;
    (function (pages) {
        var editParkingPage;
        (function (editParkingPage) {
            'use strict';
            var EditParkingPageController = (function () {
                function EditParkingPageController(EditParkingPageService, $scope) {
                    this.EditParkingPageService = EditParkingPageService;
                    this.$scope = $scope;
                    this._init();
                }
                EditParkingPageController.prototype._init = function () {
                    this.vehicleList = [];
                    this.owner = '';
                    this.formTitle = "Add Vehicle's";
                    this.vehicleData = {
                        id: '',
                        model: '',
                        year: '',
                        vin: ''
                    };
                    this.message = '';
                    this.buttonType = 'Add';
                    this._activate();
                };
                EditParkingPageController.prototype._activate = function () {
                    console.log('editParkingPage controller actived');
                    this.getVehicleByUserId();
                };
                EditParkingPageController.prototype.cleanForm = function () {
                    this.vehicleData.id = '';
                    this.vehicleData.model = '';
                    this.vehicleData.year = '';
                    this.vehicleData.vin = '';
                    this.buttonType = 'Add';
                    this.formTitle = "Add Vehicle's";
                    this.message = '';
                };
                EditParkingPageController.prototype.addEditVehicle = function () {
                    var self = this;
                    if (this.vehicleData.id) {
                        this.EditParkingPageService.editVehicle(this.vehicleData.id, this.vehicleData.model, this.vehicleData.year, this.vehicleData.vin)
                            .then(function (response) {
                            if (response.vehicle == false) {
                                self.message = "It can not edit";
                            }
                            else {
                                self.message = "successfull";
                                self.editElement(self.vehicleList, response.vehicle);
                            }
                        });
                    }
                    else {
                        this.EditParkingPageService.addVehicle(this.vehicleData.model, this.vehicleData.year, this.vehicleData.vin)
                            .then(function (response) {
                            if (response.vehicle == false) {
                                self.message = "It can not create";
                            }
                            else {
                                self.message = "successfull created";
                                self.vehicleList.push(response.vehicle);
                            }
                        });
                    }
                };
                EditParkingPageController.prototype.editVehicle = function (vehicle) {
                    console.log(vehicle);
                    this.vehicleData.id = vehicle.id;
                    this.vehicleData.model = vehicle.model;
                    this.vehicleData.year = vehicle.year;
                    this.vehicleData.vin = vehicle.vin;
                    this.buttonType = 'Edit';
                    this.formTitle = "Edit Vehicle's";
                    this.message = '';
                };
                EditParkingPageController.prototype.getVehicleByUserId = function () {
                    var self = this;
                    this.EditParkingPageService.getVehicleByUserId().then(function (response) {
                        for (var i = 0; i < response.vehicles.length; i++) {
                            self.vehicleList.push(response.vehicles[i]);
                        }
                        self.owner = response.vehicles[0].user.first_name + ' '
                            + response.vehicles[0].user.last_name;
                    });
                };
                EditParkingPageController.prototype.deleteVehicle = function (vehicle) {
                    var self = this;
                    this.EditParkingPageService.deleteVehicle(vehicle.id)
                        .then(function (response) {
                        self.deleteElement(self.vehicleList, vehicle);
                    });
                };
                EditParkingPageController.prototype.editElement = function (array, item) {
                    for (var i = 0; i < array.length; i++) {
                        if (array[i].id === item.id) {
                            array[i].model = item.model;
                            array[i].year = item.year;
                            array[i].vin = item.vin;
                        }
                    }
                };
                EditParkingPageController.prototype.deleteElement = function (array, item) {
                    for (var i = 0; i < array.length; i++) {
                        if (array[i].id === item.id) {
                            array.splice(i, 1);
                        }
                    }
                };
                EditParkingPageController.prototype.submitForm = function () {
                    if (this.$scope.vehicleForm.$valid) {
                        this.addEditVehicle();
                    }
                };
                return EditParkingPageController;
            }());
            EditParkingPageController.controllerId = 'psApp.pages.editParkingPage.editParkingPageController';
            EditParkingPageController.$inject = [
                'psApp.pages.editParkingPage.editParkingPageService',
                '$scope'
            ];
            editParkingPage.EditParkingPageController = EditParkingPageController;
            angular.module('psApp.pages.editParkingPage')
                .controller(EditParkingPageController.controllerId, EditParkingPageController);
        })(editParkingPage = pages.editParkingPage || (pages.editParkingPage = {}));
    })(pages = app.pages || (app.pages = {}));
})(app || (app = {}));
//# sourceMappingURL=editParkingPage.controller.js.map