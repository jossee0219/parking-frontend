/*
*   Specifies the Classes and Interfaces related to User in our Model
*/

'use strict';

module app.core.models.user {

    /* INTERFACE */
    export interface IUser {
        id: number;
        first_name: string;
        last_name: string;
        password: string;
        email: string;
        birthdate: string;
        created_at: string;
        updated_at: string;
        is_admin: boolean;
        authentication_token: string;
    }

    /* CLASS DEFINITION */
    export class User {

        /* PROPERTIES */
        private _id: number;
        private _first_name: string;
        private _last_name: string;
        private _password: string;
        private _email: string;
        private _birthdate: string;
        private _created_at: string;
        private _updated_at: string;
        private _is_admin: boolean;
        private _authentication_token: string;

        /* CONSTRUCTOR */
        constructor(data: IUser) {
            //LOG
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

        /* ID GETTER */
        get Id() {
            return this._id;
        }

        /* FIRST NAME GETTER */
        get First_name() {
            return this._first_name;
        }

        /* FIRST NAME SETTER */
        set First_name(value: string) {
            if(value === undefined) {
                throw 'Please supply user first name value';
            }
            this._first_name = value;
        }

        /* LAST NAME GETTER */
        get Last_name() {
            return this._last_name;
        }

        /* LAST NAME SETTER */
        set Last_name(value: string) {
            if(value === undefined) {
                throw 'Please supply user last name value';
            }
            this._last_name = value;
        }

        /* EMAIL GETTER */
        get Email() {
            return this._email;
        }

        /* EMAIL SETTER */
        set Email(value: string) {
            /* variables */
            var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

            if(value === undefined) {
                throw 'Please supply user email value';
            } else if (reg.test(value) == false) {
                throw 'Please supply a valid user email value';
            }

            this._email = value;
        }

        /* BIRTHDATE GETTER */
        get Birthdate() {
            return this._birthdate;
        }

        /* BIRTHDATE SETTER */
        set Birthdate(value: string) {
            if(value === undefined) {
                throw 'Please supply user birthdate value';
            }
            this._birthdate = value;
        }
    }
}
