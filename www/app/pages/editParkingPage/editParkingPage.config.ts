/**
* config()
* @description - Edit Parking Page config file
*/

(function() {
    'use strict';

    angular
        .module('psApp.pages.editParkingPage', [])
        .config(config);


        function config($stateProvider: angular.ui.IStateProvider) {
            // LOG
            console.log('editParkingPage config launched');

            // ROUTE
            $stateProvider
            .state('editParkingPage', {
                url: '/edit',
                views: {
                    'container': {
                        templateUrl: 'app/pages/editParkingPage/editParkingPage.html',
                        controller: app.pages.editParkingPage.EditParkingPageController.controllerId,
                        controllerAs: 'vm'
                    }
                }
            });

        }

})();
