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
run() 
async function run() {
  const user = await User.findByName({name:"siska"})
  console.log(user);

}
