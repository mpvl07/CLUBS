const mongoose=require("mongoose");
const clubEventSchema = new mongoose.Schema({
  clubname: {
    type: String, // use String instead of [String]
    required: true
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
    type:[String] ,// use String instead of [String]
    required: true
  },
  time2:{
     type:Date, // use String instead of [String]
    required: true
  }
});
const ClubEvent2=new mongoose.model("ClubEvent2",clubEventSchema);
//module.exports=ClubEvent;
module.exports=ClubEvent2;