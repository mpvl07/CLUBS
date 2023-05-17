const mongoose=require("mongoose");
//const ClubEvent=require("./models/Clubs")
const eventRegisterSchema=new mongoose.Schema({
    name:{
      type:String,
      required:true
    },
    email: {
    type: String,
    required: true,
   
    },
    rollno:{
      type:Number,
      required:true,
      unique:true
    },
     year:{
      type:String,
      required:true
    },
    branch:{
      type:String,
      required:true
    },
    section:{
      type:String,
      required:true
    },
    title:{
      type:String,
      required:true
    },
    clubname:{
      type:String,
      required:true
    },
    time1:{
      type:Date,
      required:true
    },
    reminder:{
      type:Boolean,
      default:true,
      required:true
    }
  
   

})
const EventRegister=new mongoose.model("EventRegister",eventRegisterSchema);
module.exports=EventRegister;