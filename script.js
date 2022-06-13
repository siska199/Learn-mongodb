const mongoose = require("mongoose");
const User = require("./User");
mongoose.connect(
  "mongodb://localhost/fundamental",
  () => {
    console.log("connect to mongoose");
  },
  (e) => {
    console.log(`Error:  ${e}`);
  }
);

const user = new User({ name: "Siska", age: 23 });
user.save().then(() => console.log("user save"));
