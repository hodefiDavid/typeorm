import express from "express";
import { Review } from "../entities/Review";
const router = express.Router();

// post man localhost:8080/api/review
router.post("/api/review", async(req,res)=>{
    
    const {
        rating,
        comment,
        usersId,
        stationId
    } = req.body;
    const review = Review.create(
        {
            station_id:stationId,
            users_id:usersId,
            rating,
            comment,
        });

        await review.save();
        return res.json(review);
});
export { router as createReviewRouter };

// ex
// {
//     "rating":5,
//     "comment":"was exelent experience",
//     "usersId":"3d55829f-1466-4ada-8f2f-3a5dd45da543",
//     "stationId":"afaed78c-6c64-424f-a4ee-4c5fe6887de6"
//       } 