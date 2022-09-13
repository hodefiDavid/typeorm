
require('dotenv').config()

import { createConnection } from "typeorm";
import express from "express";
import { User } from "./entities/User";
import { Order } from "./entities/Order";
import { Station } from "./entities/Station";
import { Review } from "./entities/Review";
import { TimeSlot } from "./entities/TimeSlot";
import { Reservation } from "./entities/Reservation";

import { createUserRouter } from "./routes/create_user";
import { createStationRouter } from "./routes/create_station";
import { createReviewRouter } from "./routes/create_review";
import { createTimeSlotRouter } from "./routes/create_time_slot";


const app = express();
const main =async () => {
  
    const _port = process.env.PORT;
    const _username = process.env.USERN;
    const _password = process.env.PASSWORD;
    const _database = process.env.DATABASE;

    try{

        await createConnection({
        type: "postgres",
        host:"localhost",
        port: 5432,
        username: _username,
        password: _password,
        database :_database,
        entities : [User,Order,Station,Review,TimeSlot,Reservation],
        synchronize: true
    })
    console.log("connected to Postgres")
    

    app.listen(8080,()=>{
        console.log("now runnig on port 8080");
        app.use(express.json())
        app.use(createUserRouter)
        app.use(createStationRouter)
        app.use(createTimeSlotRouter)
        app.use(createReviewRouter)

    })
} catch (error){
    console.error(error)
    throw new Error("Unable to connect to Postgres");
    
};

}
require('events').EventEmitter.defaultMaxListeners = 15;
main()