var app;
(function (app) {
    var pages;
    (function (pages) {
        var logInPage;
        (function (logInPage) {
            'use strict';
            var LogInPageService = (function () {
                function LogInPageService(restApi) {
                    this.restApi = restApi;
                }
                LogInPageService.prototype.logIn = function (userEmail, userPassword) {
                    var promise;
                    promise = this.restApi.create({ url: 'users/sign_in' }, { email: userEmail, password: userPassword })
                        .$promise.then(function (response) {
                        return response;
                    })
                        .catch(function () {
                        return 'Error';
                    });
                    return promise;
                };
                LogInPageService.serviceId = 'psApp.pages.logInPage.logInPageService';
                LogInPageService.$inject = [
                    'psApp.core.restApi.restApiService'
                ];
                return LogInPageService;
            }());
            logInPage.LogInPageService = LogInPageService;
            angular
                .module('psApp.pages.logInPage')
                .service(LogInPageService.serviceId, LogInPageService);
        })(logInPage = pages.logInPage || (pages.logInPage = {}));
    })(pages = app.pages || (app.pages = {}));
})(app || (app = {}));
//# sourceMappingURL=logInPage.service.js.map