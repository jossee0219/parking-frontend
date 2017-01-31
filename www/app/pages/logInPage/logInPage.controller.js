var app;
(function (app) {
    var pages;
    (function (pages) {
        var logInPage;
        (function (logInPage) {
            'use strict';
            var LogInPageController = (function () {
                function LogInPageController(logInService, localStorage, $state) {
                    this.logInService = logInService;
                    this.localStorage = localStorage;
                    this.$state = $state;
                    this._init();
                }
                LogInPageController.prototype._init = function () {
                    this.userData = {
                        email: '',
                        password: ''
                    };
                    this.message = '';
                    this._activate();
                };
                LogInPageController.prototype._activate = function () {
                    console.log('logInPage controller actived');
                };
                LogInPageController.prototype.logIn = function () {
                    var self = this;
                    this.logInService.logIn(this.userData.email, this.userData.password)
                        .then(function (response) {
                        if (response.success == false) {
                            self.message = response.message;
                        }
                        else {
                            self.localStorage.setItem('auth_token', response.user.auth_token);
                            self.localStorage.setItem('email', response.user.email);
                            self.$state.go('editParkingPage');
                        }
                    });
                };
                LogInPageController.controllerId = 'psApp.pages.logInPage.logInPageController';
                LogInPageController.$inject = [
                    'psApp.pages.logInPage.logInPageService',
                    'psApp.localStorageService',
                    '$state'
                ];
                return LogInPageController;
            }());
            logInPage.LogInPageController = LogInPageController;
            angular.module('psApp.pages.logInPage')
                .controller(LogInPageController.controllerId, LogInPageController);
        })(logInPage = pages.logInPage || (pages.logInPage = {}));
    })(pages = app.pages || (app.pages = {}));
})(app || (app = {}));
//# sourceMappingURL=logInPage.controller.js.map