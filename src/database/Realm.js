import Realm from 'realm';
import User from '../models/User';
import Event from '../models/Event';
import Day from '../models/Day';

export default class realm{



    static init(){

        this.db = Realm.open({schema: [User.schema, Day.schema]});
    }

    static getdb(callback){

        if(this.db !== undefined){

            this.db.then(realm =>{

                callback(realm);

            })

        }else{

            console.log("init the Realm First!!!")
        }

    }
}