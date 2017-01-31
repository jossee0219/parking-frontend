(function () {
    'use strict';
    angular
        .module('psApp.pages.logInPage', [])
        .config(config);
    function config($stateProvider) {
        console.log('logInPage config launched');
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
//# sourceMappingURL=logInPage.config.js.map