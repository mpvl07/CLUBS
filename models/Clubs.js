const mongoose=require("mongoose");

const clubEventSchema = new mongoose.Schema({
  clubname: {
    type: String, // use String instead of [String]
    required:true
  },
  image:{
    // data: Buffer,
    // contentType: String,
    type:String,
    //required:true
  },
  title: {
    type: String, // use String instead of [String]
    required: true
  },
  description: {
    type: String, // use String instead of [String]
    required: true
  },
  venue: {
    type: String, // use String instead of [String]
    required: true
  },
  date:{
    type: Date,
    required: true
  },
  time1:{
    type:Date ,// use String instead of [String]
    required: true
  },
  time2:{
     type:Date, // use String instead of [String]
    required: true
  }
});



//const ClubEvent=new mongoose.model("ClubEvent",clubEventSchema);

const ClubEvent=new mongoose.model("ClubEvent",clubEventSchema);
module.exports=ClubEvent;