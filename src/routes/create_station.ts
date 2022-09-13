import express from "express";
import { Station } from "../entities/Station";
const router = express.Router();

// post man localhost:8080/api/station
router.post("/api/station", async(req,res)=>{
    
    const {
        ownerId,
        address,
        image,
        cords,
        PricePerHour,
        plug_type
    } = req.body;
    const station = Station.create(
        {
            owner_id:ownerId,
            address,
            image,
            plug_type:plug_type,
            cords,
            Price_per_hour:PricePerHour
        });

        await station.save();
        return res.json(station);
});
export { router as createStationRouter };

//  {
//    "ownerId":"3d55829f-1466-4ada-8f2f-3a5dd45da543",
//    "address":"harav yakov toledano 33 , Beit Shean",
//    "image":"cool one",
//    "cords":{
//            "lat": "lat_1",
//            "lan": "lan_1"
//        },
//    "PricePerHour":15,
//    "plug_type":"EU"
//} 