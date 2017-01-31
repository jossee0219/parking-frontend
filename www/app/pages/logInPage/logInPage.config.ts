/**
* config()
* @description - Log In Page config file
*/

(function() {
    'use strict';

    angular
        .module('psApp.pages.logInPage', [])
        .config(config);


        function config($stateProvider: angular.ui.IStateProvider) {
            // LOG
            console.log('logInPage config launched');

            // ROUTE
            $stateProvider
            .state('logInPage', {
                url: '/logIn',
                views: {
                    'container': {
                        templateUrl: 'app/pages/logInPage/logInPage.html',
                        controller: app.pages.logInPage.LogInPageController.controllerId,
                        controllerAs: 'vm'
                    }
                }
            });

        }

})();
