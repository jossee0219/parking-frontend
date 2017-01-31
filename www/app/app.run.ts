/**
 * @description run() run low-level functionality
 * such as authorization, get user info, roles, etc.
 *
 * @param {scope} $rootScope
 * @return {void}
 */

 (function(): void {

     'use strict';

     angular.module('psApp').run(run);


     function run() {
        /*main logic when App has started (e.g. get user id, set security token, etc)*/
     }

 })();



/* LOCAL STORAGE SERVICE */
(function(angular) {

    function localStorageServiceFactory($window) {
        if($window.localStorage){
            return $window.localStorage;
        }
        throw new Error('Local storage support is needed');
    }


    // Inject dependencies
    localStorageServiceFactory.$inject = ['$window'];

    angular
        .module('psApp.localStorage',  [])
        .factory('psApp.localStorageService', localStorageServiceFactory);

})(angular);
