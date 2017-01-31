/**
 * EditParkingPageController
 * @description - Edit Parking Page Controller
 */

module app.pages.editParkingPage {

    'use strict';

    /**********************************/
    /*           INTERFACES           */
    /**********************************/
    export interface IEditParkingPageController {
        addEditVehicle: () => void;
        getVehicleByUserId: () => void;
        editVehicle: (vehicle) => void;
        deleteVehicle: (vehicle) => void;
    }

    export interface IVehicleData {
        id: string;
        model: string;
        year: string;
        vin: string;
    }

    /**********************************/
    /*         CLASS DEFINITION       */
    /**********************************/
    export class EditParkingPageController implements IEditParkingPageController {

        /**********************************/
        /*           PROPERTIES           */
        /**********************************/
        static controllerId = 'psApp.pages.editParkingPage.editParkingPageController';
        vehicleList: Array<any>;
        owner: string;
        vehicleData: IVehicleData;
        message: string;
        buttonType: string;
        formTitle: string;

        /*-- INJECT DEPENDENCIES--*/
        static $inject = [
            'psApp.pages.editParkingPage.editParkingPageService',
            '$scope'
        ];


        /**********************************/
        /*           CONSTRUCTOR          */
        /**********************************/
        constructor(private EditParkingPageService: app.pages.editParkingPage.IEditParkingPageService,
                    private $scope: any) {
            this._init();
        }

        /* -- INITIALIZE METHOD -- */
        private _init() {
            //Init Variables
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
        }

        /* -- ACTIVATE METHOD -- */
        private _activate(): void {
            //LOG
            console.log('editParkingPage controller actived');
            this.getVehicleByUserId();
        }


        /**********************************/
        /*             METHODS            */
        /**********************************/

        cleanForm(): void {
            this.vehicleData.id = '';
            this.vehicleData.model = '';
            this.vehicleData.year = '';
            this.vehicleData.vin = '';
            this.buttonType = 'Add';
            this.formTitle = "Add Vehicle's";
            this.message = '';
        }

        addEditVehicle(): void {
            var self = this;

            if(this.vehicleData.id) {
                /* Edit Vehicle */
                this.EditParkingPageService.editVehicle(
                        this.vehicleData.id,
                        this.vehicleData.model,
                        this.vehicleData.year,
                        this.vehicleData.vin)
                .then(
                    function(response) {
                        if(response.vehicle == false) {
                            self.message = "It can not edit";
                        } else  {
                            self.message = "successfull";
                            self.editElement(self.vehicleList, response.vehicle);
                        }
                    }
                );

            } else {
                /* Add Vehicle */
                this.EditParkingPageService.addVehicle(
                        this.vehicleData.model,
                        this.vehicleData.year,
                        this.vehicleData.vin)
                .then(
                    function(response) {
                        if(response.vehicle == false) {
                            self.message = "It can not create";
                        } else  {
                            self.message = "successfull created";
                            self.vehicleList.push(response.vehicle);
                        }
                    }
                );
            }

        }

        editVehicle(vehicle): void{
            console.log(vehicle);
            this.vehicleData.id = vehicle.id;
            this.vehicleData.model = vehicle.model;
            this.vehicleData.year = vehicle.year;
            this.vehicleData.vin = vehicle.vin;
            this.buttonType = 'Edit';
            this.formTitle = "Edit Vehicle's";
            this.message = '';

        }

        getVehicleByUserId(): void {
            let self = this;
            this.EditParkingPageService.getVehicleByUserId().then(
                function(response){

                    for (let i = 0; i < response.vehicles.length; i++) {
                      self.vehicleList.push(response.vehicles[i]);
                    }
                    self.owner = response.vehicles[0].user.first_name + ' '
                                 + response.vehicles[0].user.last_name;
                }
            );
        }

        deleteVehicle(vehicle): void {
            let self = this;

            /* Edit Vehicle */
            this.EditParkingPageService.deleteVehicle
            (vehicle.id)
            .then(
                function(response) {
                    self.deleteElement(self.vehicleList, vehicle);

                }
            );
        }


        editElement(array, item): any {
            for (let i = 0; i < array.length; i++) {

                if(array[i].id === item.id) {
                    array[i].model = item.model;
                    array[i].year = item.year;
                    array[i].vin = item.vin;
                }

            }
        }

        deleteElement(array, item): any {

            for (let i = 0; i < array.length; i++) {

                if(array[i].id === item.id) {
                    array.splice(i, 1);
                }

            }
        }


        submitForm(): void {
            // check to make sure the form is completely valid
            if (this.$scope.vehicleForm.$valid) {
                this.addEditVehicle();
            }
        }

    }


    angular.module('psApp.pages.editParkingPage')
            .controller(EditParkingPageController.controllerId, EditParkingPageController);

}
