import mongoose from "mongoose";
const Schema=new mongoose.Schema({
name:{
    type:String,
    required:true,

},
price:{
    type:Number,
    required:true,
    min:0,
},
date:{
    type:Date,
    required:true
}
});
const model=new mongoose.model("expenses",Schema);
export default model;