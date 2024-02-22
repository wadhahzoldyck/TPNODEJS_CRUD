const express = require("express");
const mongoose = require("mongoose");
const app = express();
var usersRouter = require("./routes/etudiantRouter");
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.use("/etudiants", usersRouter);

async function connectToMongoDB() {
  try {
    await mongoose.connect(
      "mongodb+srv://zoldyck:zoldyck@cluster1.bnllwnc.mongodb.net/NODEJSCRUD?retryWrites=true&w=majority",
      { useNewUrlParser: true, useUnifiedTopology: true }
    );
    console.log("Connected Successfully");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}
connectToMongoDB();

app.listen(5000, () => console.log("server listening on port 5000"));
