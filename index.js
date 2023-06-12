const express = require("express");
const app = express();
const { seatRouter } = require("./Routes/Reserve");
const mongoose = require("mongoose");
const cors = require("cors");
const PORT = process.env.PORT || 8080
require("dotenv").config();

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.DB_URL);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};


app.use(cors());
app.use(express.json());
app.use("/seats", seatRouter);


connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`);
  });
});