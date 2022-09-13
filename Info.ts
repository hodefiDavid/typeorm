// export  const
export class Info {
     _type;
     _host;
     _port;
     _username;
     _password;
     _database;

    
    constructor(){
        this._type = "postgres";
        this._host= "localhost";
        this._port= 5432;
        this._username= "postgres";
        this._password= "ppuu!fd54";
        this._database="typeorm";
    }

}

// export const Info = /** @class */ (function () {
//     function A() {
//         const _type = "postgres";
//         const _host= "localhost";
//         const _port= 5432;
//         const _username= "postgres";
//         const _password= "ppuu!fd54";
//         const _database="typeorm";
//     }
//     return A;
// }());