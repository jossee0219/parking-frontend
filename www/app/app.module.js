(function () {
    'use strict';
    angular.module('psApp', [
        'psApp.core',
        'psApp.localStorage',
        'psApp.core.restApi',
        'psApp.pages.editParkingPage',
        'psApp.pages.logInPage'
    ]).config(config);
    function config($urlRouterProvider) {
        $urlRouterProvider.otherwise('/page');
    }
})();
//# sourceMappingURL=app.module.js.map