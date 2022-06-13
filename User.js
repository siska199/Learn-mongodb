const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema({
  street: String,
  city: String,
});

const userSchema = new mongoose.Schema({
  name: String,
  age: {
    type: Number,
    // validate:{
    
    // },
    min: 1,
    max: 100,
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    minlength: 10,
  },
  createdAt: {
    type: Date,
    immutable: true,
    default: () => Date.now(),
  },
  updatedAt: {
    type: Date,
    default: () => Date.now(),
  },
  bestFriend: {
    type :mongoose.SchemaTypes.ObjectId,
    ref : "User" 
  },
  hobbies: [String],
  address: addressSchema,
});


//Add method 
userSchema.methods.sayHi = function(){
    console.log(`my name is ${this.name}`)
}

userSchema.statics.findByName = function(name){
    return this.where({name : new RegExp(name, 'i')})
}
module.exports = mongoose.model("User", userSchema);
