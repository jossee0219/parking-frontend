var app;
(function (app) {
    var core;
    (function (core) {
        var restApi;
        (function (restApi) {
            'use strict';
            var RestApiService = (function () {
                function RestApiService($resource, localStorage, dataConfig) {
                    this.$resource = $resource;
                    this.localStorage = localStorage;
                }
                RestApiService.Api = function ($resource, dataConfig) {
                    var resource = $resource(dataConfig.baseUrl + ':url/:id', { url: '@url' }, {
                        show: { method: 'GET', params: { id: '@id' }, headers: { Accept: 'application/json; charset=utf-8', 'X-API-TOKEN': localStorage.getItem('auth_token'), 'X-API-EMAIL': localStorage.getItem('email') } },
                        query: { method: 'GET', isArray: true, headers: { Accept: 'application/json; charset=utf-8', 'X-API-TOKEN': localStorage.getItem('auth_token'), 'X-API-EMAIL': localStorage.getItem('email') } },
                        queryObject: { method: 'GET', isArray: false, headers: { Accept: 'application/json; charset=utf-8', 'X-API-TOKEN': localStorage.getItem('auth_token'), 'X-API-EMAIL': localStorage.getItem('email') } },
                        create: { method: 'POST', headers: { Accept: 'application/json; charset=utf-8', 'X-API-TOKEN': localStorage.getItem('auth_token'), 'X-API-EMAIL': localStorage.getItem('email') } },
                        update: { method: 'PUT', params: { id: '@id' }, headers: { Accept: 'application/json; charset=utf-8', 'X-API-TOKEN': localStorage.getItem('auth_token'), 'X-API-EMAIL': localStorage.getItem('email') } },
                        remove: { method: 'DELETE', params: { id: '@id' }, headers: { Accept: 'application/json; charset=utf-8', 'X-API-TOKEN': localStorage.getItem('auth_token'), 'X-API-EMAIL': localStorage.getItem('email') } }
                    });
                    return resource;
                };
                return RestApiService;
            }());
            RestApiService.serviceId = 'psApp.core.restApi.restApiService';
            RestApiService.$inject = [
                '$resource',
                'psApp.localStorageService',
                'dataConfig'
            ];
            restApi.RestApiService = RestApiService;
            angular
                .module('psApp.core.restApi')
                .factory(RestApiService.serviceId, RestApiService.Api)
                .factory('customHttpInterceptor', customHttpInterceptor)
                .config(configApi);
            configApi.$inject = ['$httpProvider'];
            customHttpInterceptor.$inject = ['$q'];
            function configApi($httpProvider) {
                $httpProvider.interceptors.push('customHttpInterceptor');
            }
            function customHttpInterceptor($q) {
                return {
                    request: function (req) {
                        req.url = decodeURIComponent(req.url);
                        return req;
                    },
                    requestError: function (rejection) {
                        return rejection;
                    },
                    response: function (res) {
                        return res;
                    },
                    responseError: function (rejection) {
                        return rejection;
                    }
                };
            }
        })(restApi = core.restApi || (core.restApi = {}));
    })(core = app.core || (app.core = {}));
})(app || (app = {}));
//# sourceMappingURL=restApi.service.js.map