const mongoose=require("mongoose")

const Products=mongoose.model("product",new mongoose.Schema({
    name:String,
    position:String,
    image:String
}))
module.exports={Products}