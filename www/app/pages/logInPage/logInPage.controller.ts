/**
 * LogInPageController
 * @description - Log In Page Controller
 */

module app.pages.logInPage {

    'use strict';

    /**********************************/
    /*           INTERFACES           */
    /**********************************/
    export interface ILogInPageController {
        logIn: () => void;
    }

    export interface IUserData {
        email: string;
        password: string;
    }

    /**********************************/
    /*         CLASS DEFINITION       */
    /**********************************/
    export class LogInPageController implements ILogInPageController {

        /**********************************/
        /*           PROPERTIES           */
        /**********************************/
        static controllerId = 'psApp.pages.logInPage.logInPageController';
        userData: IUserData;
        message: string;

        /*-- INJECT DEPENDENCIES--*/
        static $inject = [
            'psApp.pages.logInPage.logInPageService',
            'psApp.localStorageService',
            '$state'
        ];


        /**********************************/
        /*           CONSTRUCTOR          */
        /**********************************/
        constructor(private logInService: ILogInPageService,
                    private localStorage: any,
                    private $state: angular.ui.IStateService) {
            this._init();
        }

        /* -- INITIALIZE METHOD -- */
        private _init() {
            //Init Variables
            this.userData = {
                email: '',
                password: ''
            };

            this.message = '';

            this._activate();
        }

        /* -- ACTIVATE METHOD -- */
        private _activate(): void {
            //LOG
            console.log('logInPage controller actived');
        }


        /**********************************/
        /*             METHODS            */
        /**********************************/

        logIn(): void {
            var self = this;

            this.logInService.logIn(this.userData.email, this.userData.password)
            .then(
                function(response) {
                    if(response.success == false) {
                        self.message = response.message;
                    } else  {
                        self.localStorage.setItem('auth_token', response.user.auth_token);
                        self.localStorage.setItem('email', response.user.email);
                        self.$state.go('editParkingPage');
                    }
                }
            );
        }

    }


    angular.module('psApp.pages.logInPage')
            .controller(LogInPageController.controllerId, LogInPageController);

}
