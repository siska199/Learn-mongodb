const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost/fundamental",()=>{
    console.log("connect to mongoose")
},(e)=>{
    console.log(`Error:  ${e}`)
})