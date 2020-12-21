import mongoose from "mongoose";

const storySchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
    },
    creator: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
    },
    story: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
    },
    story_image: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
    },
    likeCount: {
      type: Number,
      default: 0,
    },
    dislikeCount: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const Story = mongoose.model("Story", storySchema);

export default Story;
