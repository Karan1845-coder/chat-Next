// to get recommended users
// to find friends
// to connect with friends
import express from "express";
import { protectRoute } from "../../middleware/auth.middleware";
import { getRecommendedUsers,getMyFriends } from "../controllers/user.controller.js";

const router =express.Router();

//apply auth middleware to all routes
router.use(protectRoute);

router.get("/",getRecommendedUsers);
router.get("/friends",getMyFriends);

router.post("/friend-request/:id",sendFriendRequest);//send friend request


export default router;