const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes");

const app = express();
require("dotenv").config();
app.use(cors());
app.use(express.json());

// mongoose
//   .connect(process.env.MONGO_URL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => {
//     console.log("DB connected");
//   });

app.use("/api/auth", userRoutes);
mongoose
  .connect(
    "mongodb+srv://amarp:hello123@cluster0.yc1yabd.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("DB cnnect");
  })
  .catch((err) => {
    console.log(err.message);
  });
const server = app.listen(process.env.PORT, () => {
  console.log(`server strated on ${process.env.PORT}`);
});
