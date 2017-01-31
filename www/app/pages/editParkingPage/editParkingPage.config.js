(function () {
    'use strict';
    angular
        .module('psApp.pages.editParkingPage', [])
        .config(config);
    function config($stateProvider) {
        console.log('editParkingPage config launched');
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
//# sourceMappingURL=editParkingPage.config.js.map