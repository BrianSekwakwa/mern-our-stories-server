import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import router from "./Routes/stories.js";

// Starting the server
const app = express();
dotenv.config();

// Middleswares
app.use(cors());
app.use(bodyParser.json({ limit: "40mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "40mb", extended: true }));

// APIs
app.use("/stories", router);
app.get("/", (req, res) => {
  res.send("<h1>Our Stories API</h1>");
});

// Connecting to the MongoDB
const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.CONNECTION_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port: ${PORT}`);
    });
  })
  .catch((err) => console.log(err));

// -- Catching errors flag
mongoose.set("useFindAndModify", false);
