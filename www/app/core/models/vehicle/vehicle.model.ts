/*
*   Specifies the Classes and Interfaces related to Vehicle in our Model
*/

'use strict';

module app.core.models.vehicle {

    /* CLASS DEFINITION */
    export class Vehicle {

        /* PROPERTIES */
        private _id: number;
        private _vin: string;
        private _model: string;
        private _year: string;
        private _user: app.core.models.user.IUser;

        /* CONSTRUCTOR */
        constructor() {

        }

        /* ID GETTER */
        get Id() {
            return this._id;
        }

        /* VIN GETTER */
        get Vin() {
            return this._vin;
        }

        /* VIN SETTER */
        set Vin(value: string) {
            if(value === undefined) {
                throw 'Please supply vin vehicle value';
            }
            this._vin = value;
        }

        /* MODEL GETTER */
        get Model() {
            return this._model;
        }

        /* MODEL SETTER */
        set Model(value: string) {
            if(value === undefined) {
                throw 'Please supply model vehicle value';
            }
            this._model = value;
        }


        /* YEAR GETTER */
        get Year() {
            return this._year;
        }

        /* YEAR SETTER */
        set Year(value: string) {
            if(value === undefined) {
                throw 'Please supply year vehicle value';
            }
            this._year = value;
        }

        /* USER GETTER */
        get User() {
            return this._user;
        }
    }

}
