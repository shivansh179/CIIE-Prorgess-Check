const express = require("express")

const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://secondstorage7935:RadhaRani123@cluster0.9diz3ng.mongodb.net/test"
);

const app = express();
app.use(express.json());
const UserModel = require("./Models/User");

const cors = require("cors");
app.use(cors());

require("./db/connection");
const User = require("./Models/User");

app.get("/getUsers", function (req, res) {
  UserModel.find()
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

app.post("/", async (req, res) => {
  let user = new User(req.body);
  let result = await user.save();
  res.send(result);
});

app.listen(4000, () => {
  console.log("App is running");
});
