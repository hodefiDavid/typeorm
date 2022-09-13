import express from "express";
import { TimeSlot } from "../entities/TimeSlot";
const router = express.Router();

// post man localhost:8080/api/timeSlot
router.post("/api/timeSlot", async(req,res)=>{
    // res.send("hello");
    const {
        stationId,
        start,
        end,
        comment
    } = req.body;
    const timeSlot = TimeSlot.create(
        {
            station_id:stationId,
            start,
            end,
            comment,
        });

        await timeSlot.save();
        return res.json(timeSlot);
});
export { router as createTimeSlotRouter };

//   {
//    "stationId":"afaed78c-6c64-424f-a4ee-4c5fe6887de6",
//    "start":"2022-05-27",
//    "end":"2022-07-27",
//    "comment":"great station with some shedowed parking"
//  } 