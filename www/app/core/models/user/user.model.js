'use strict';
var app;
(function (app) {
    var core;
    (function (core) {
        var models;
        (function (models) {
            var user;
            (function (user) {
                var User = (function () {
                    function User(data) {
                        console.log('init user model with these data: ', data);
                        this._id = data.id;
                        this._first_name = data.first_name;
                        this._last_name = data.last_name;
                        this._password = data.password;
                        this._email = data.email;
                        this._birthdate = data.birthdate;
                        this._created_at = data.created_at;
                        this._updated_at = data.updated_at;
                        this._is_admin = data.is_admin;
                        this._authentication_token = data.authentication_token;
                    }
                    Object.defineProperty(User.prototype, "Id", {
                        get: function () {
                            return this._id;
                        },
                        enumerable: true,
                        configurable: true
                    });
                    Object.defineProperty(User.prototype, "First_name", {
                        get: function () {
                            return this._first_name;
                        },
                        set: function (value) {
                            if (value === undefined) {
                                throw 'Please supply user first name value';
                            }
                            this._first_name = value;
                        },
                        enumerable: true,
                        configurable: true
                    });
                    Object.defineProperty(User.prototype, "Last_name", {
                        get: function () {
                            return this._last_name;
                        },
                        set: function (value) {
                            if (value === undefined) {
                                throw 'Please supply user last name value';
                            }
                            this._last_name = value;
                        },
                        enumerable: true,
                        configurable: true
                    });
                    Object.defineProperty(User.prototype, "Email", {
                        get: function () {
                            return this._email;
                        },
                        set: function (value) {
                            var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
                            if (value === undefined) {
                                throw 'Please supply user email value';
                            }
                            else if (reg.test(value) == false) {
                                throw 'Please supply a valid user email value';
                            }
                            this._email = value;
                        },
                        enumerable: true,
                        configurable: true
                    });
                    Object.defineProperty(User.prototype, "Birthdate", {
                        get: function () {
                            return this._birthdate;
                        },
                        set: function (value) {
                            if (value === undefined) {
                                throw 'Please supply user birthdate value';
                            }
                            this._birthdate = value;
                        },
                        enumerable: true,
                        configurable: true
                    });
                    return User;
                }());
                user.User = User;
            })(user = models.user || (models.user = {}));
        })(models = core.models || (core.models = {}));
    })(core = app.core || (app.core = {}));
})(app || (app = {}));
//# sourceMappingURL=user.model.js.map