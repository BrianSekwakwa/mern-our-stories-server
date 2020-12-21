import express from "express";
import {
  getStories,
  createStory,
  updateStory,
  deleteStory,
  updateCount,
} from "../Controllers/storiesController.js";

const router = express.Router();

// Creating Routes and Endpoints
router.get("/", getStories);
router.post("/", createStory);
router.patch("/:id", updateStory);
router.delete("/:id", deleteStory);
router.patch("/likes/:id", updateCount);
router.patch("/dislikes/:id", updateCount);

export default router;
