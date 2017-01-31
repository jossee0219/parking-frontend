/**
* module()
* @description - Here inject dependencies of App modules and components,
* such as controllers, services, directives, etc.
*/

(function(): void {
    'use strict';

    angular.module('psApp', [
            'psApp.core',
            'psApp.localStorage',
            'psApp.core.restApi',
            'psApp.pages.editParkingPage',
            'psApp.pages.logInPage'
        ]).config(config);

    function config ($urlRouterProvider: angular.ui.IUrlRouterProvider) {
        $urlRouterProvider.otherwise('/page');
    }


})();
