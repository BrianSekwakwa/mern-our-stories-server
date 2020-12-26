import mongoose from "mongoose";
import Story from "../Models/storyModel.js";

// READ all stories
export const getStories = async (req, res) => {
  try {
    const stories = await Story.find();

    res.status(200).json(stories);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// CREATE a story
export const createStory = async (req, res) => {
  const story = req.body;
  const newStory = new Story(story);

  try {
    await newStory.save();
    res.status(201).json({ message: "Story was created!" });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

// UPDATE a story
export const updateStory = async (req, res) => {
  const _id = req.params.id;
  const story = req.body;

  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send("No post with that id is available");
  }

  try {
    const updatedStory = await Story.findByIdAndUpdate(_id, story, {
      new: true,
    });
    res.status(200).json(updatedStory);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

// DELETE a story
export const deleteStory = async (req, res) => {
  const _id = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send("No post with that id is available");
  }

  try {
    const deletedStory = await Story.findByIdAndDelete(_id);
    res.status(202).json(deletedStory);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

// UPDATE like and dislikes count
export const updateCount = async (req, res) => {
  const _id = req.params.id;
  const count = req.body;

  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send("No post with that id is available");
  }

  try {
    const updatedLikes = await Story.findByIdAndUpdate(_id, count, {
      new: true,
    });
    res.status(200).json(updatedLikes);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
