// const express = require('express')
// const app = express()
// const ClubEvent=require("./models/Clubs")
// const mongoose = require('mongoose');
// const cors = require('cors')
// const passport = require('passport');
// const cookieSession = require('cookie-session')
// require('dotenv').config()
// require('./passport-setup.js');
// const bodyParser = require('body-parser')
// app.use(cors())
// app.use(express.json());
// app.use(express.static("public"))
// app.set("view engine","ejs")

// app.use(bodyParser.urlencoded({ extended: false}))
// app.use(bodyParser.json())
// app.use(express.json())

// // mongoose.connect('mongodb://localhost:27017/ClubEvent', { useNewUrlParser: true, useUnifiedTopology: true })
// //   .then(() => {
// //     console.log('Connected to MongoDB');
// //   })
// //   .catch((error) => {
// //     console.error('Error connecting to MongoDB:', error);
// //   });

// const MONGODB_URL = "mongodb://127.0.0.1/ClubEvent";
// mongoose.connect(MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log("Connected to MongoDB"))
  
//   .catch((error) => console.log("Error connecting to MongoDB: ", error));
  

// //   var db = mongoose.connection;

// //   db.on('error',()=>console.log("Error in Connecting to Database"));
// // db.once('open',()=>console.log("Connected to Database"))



// app.get('/registraion/:id',()=>{
// res.render(req.params.id)
// })

// app.post('/events',async(req,res)=>{
//   console.log("jjjj");
//     try{ 
//          console.log(req.body.clubname)
         
//          console.log(req.body.image)
//          console.log(req.body.title)
//          console.log(req.body.description)
//         console.log(req.body.venue)
//          console.log(req.body.date)
//           console.log(req.body.time)
         
//      const event=new ClubEvent({
//           // clubname:req.body.clubname,
//           // image:req.body.image,
//           // title:req.body.title,
//           // description:req.body.description,
//           // venue:req.body.venue,
//           // date:req.body.date,
//           // time:req.body.time,
//           "clubname": "My Club",
//   "image": "cs.jpg",
//   "title": "My Event",
//   "description": "This is my event description.",
//   "venue": "123 Main St.",
//   "date": "2022-04-01",
//   "time": "15:30"
          
//        })
//         try {
//                 await event.save();
//               console.log('Model saved successfully');
//               } catch (error) {
//                 console.error('Error saving model:', error);
//         }

  
      
        
//       res.redirect('/events');

     
//        //res.status(201).render("events",{events:events});
//     }catch(error){
//        res.status(400).send(error);
//     }
//  })

// app.use(cookieSession({
//     name: 'tuto-session',
//     keys: ['key1', 'key2']
//   }))


// const isLoggedIn = (req, res, next) => {
//     if (req.user) {
//         next();
//     } else {
//         res.sendStatus(401);
//     }
// }

// app.use(passport.initialize());
// app.use(passport.session());

// app.get('/', (req, res) => res.render("index.ejs"))
// app.get('/failed', (req, res) => res.send('You Failed to log in!'))

// // In this route you can see that if the user is logged in u can acess his info in: req.user
// app.get('/good', isLoggedIn, (req, res) =>{
// let pq=req.user.displayName
//     res.render("chitram2.ejs",{pq:pq})
// });


// // Auth Routes
// app.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

// app.get('/google/callback', passport.authenticate('google', { failureRedirect: '/failed' }),
//   function(req, res) {
//     res.redirect('/good');
//   }
// );

// app.get('/logout', (req, res) => {
//     req.session = null;
//     req.logout();
//     res.redirect('/');
// })


// app.get("/",(req,res)=>{
//     res.render("index");
// })
// app.get("/clickev/register",(req,res)=>{
//     res.render("rrr");
// })


// app.get("/registraion",async(req,res)=>{
//   try{
//     const events=await ClubEvent.find({});
//     res.render("registration",{events:events});
//   }
//   catch(err){

//   }
    
// })

// app.get("/clickev",(req,res)=>{
//     res.render("clickev")
// })


// app.get('/clubs', (req, res) => {
//     res.render('clubs.ejs');
//   });
  
// app.get('/faqs', (req, res) => {
//     res.render('faqs.ejs');
//   });

//   app.get('/clubs/prayatnam', (req, res) => {
//     res.render('prayatnam.ejs');
//   });
  
// app.get('/clubs/chitram', (req, res) => {
//     res.render('chitram.ejs');
//   });
//  app.get('/clubs/csea', (req, res) => {
//     res.render('csea.ejs');
//   });
  
//   app.get('/clubs/physical-education', (req, res) => {
//     res.render('physical-education.ejs');
//   });
  
//  app .get('/clubs/ee-association', (req, res) => {
//     res.render('ee-association.ejs');
//   });
  
//   // app.get('/events', (req, res) => {
//   //   res.render('events.ejs');
//   // })

//   // app.get('/events', async (req, res) => {
//   //   try {
//   //     const events = await ClubEvent.find({});
//   //     res.render('events', { events });
//   //   } catch (error) {
//   //   res.render("events2");
//   //   }
//   // });
  

// app.get('/events', async (req, res) => {
//   try {
//     const events = await ClubEvent.find({});
//     res.render('events', { events:events });
//   } catch (error) {
//     console.log('Error: ', error);
//     res.status(500).send('Something went wrong');
//   }
// });



// Run the delete function every second
//setInterval(moveCompletedEvents, 1000);
// Import required modules and models


// Define the function to move completed events
// async function moveCompletedEvents() {
//   try {
//     // Get upcoming events that have already ended (time2 <= now)
//     const events = await ClubEvent.find({ time2: { $lte: new Date() } });

//     // Create new completed events with the same data as upcoming events
//     const completedEvents = events.map((event) => {
//       return {
//         clubname: event.clubname,
//         image: event.image,
//         title:event.title,
//         description: event.description,
//         venue: event.venue,
//         date: event.date,
//         time1: event.time1,
//         time2: event.time2
//       };
//     });

//     // Insert completed events into the completed collection
//     await ClubEvent2.insertMany(completedEvents);

//     // Delete completed events from the upcoming collection
//     await ClubEvent.deleteMany({ time2: { $lte: new Date() } });

//     console.log('Completed events moved successfully!');
//   } catch (error) {
//     console.error(error);
//   } finally {
//     mongoose.disconnect();
//    }
// }

// Call the function to move completed events
// setInterval(async () => {
//   try {
//     await moveCompletedEvents();
//     console.log("Completed events moved successfully!");
//   } catch (error) {
//     console.error(error);
//   }
// },1000); // run every 24 hours
// },1000); // run every 24 hours



//const multer = require('multer');

// Set storage engine
// const storage = multer.diskStorage({
//   destination: './public/images',
//   filename: function (req, file, cb) {
//     cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
//   }
// });
//const upload=multer({dest:"uploads/"});
//Initialize upload
// const upload = multer({
//   storage: storage,
//   limits: { fileSize: 1000000 },
//   fileFilter: function (req, file, cb) {
//     checkFileType(file, cb);
//   }
// }).single('image');

// //const ClubEvent = require("./models/event");
// //const mongoose = require("mongoose");
// //const MONGODB_URL = "mongodb://127.0.0.1/ClubEvent";


//  app.put('/events/:id', async (req, res) => {

//   console.log("ph");
//   try {
//     const event = await ClubEvent.findById(req.params.id);
//     console.log('HI ');

//     if (!event) {
//       return res.status(404).send('Event not found');
//     }
//     event._id = req.params.id;
//     event.clubname = req.body.clubname;
//     event.image = req.body.image;
//     event.title = req.body.title;
//     event.description = req.body.description;
//     event.venue = req.body.venue;
//     event.date = req.body.date;
//     event.time = req.body.time;

//     await event.save();
//     res.redirect('/events');
//   } catch (error) {
//     console.log('Error: ', error);
//     res.status(500).send('Something went wrong');
//   }
// });


//const upload = multer({ dest: 'uploads/' });
// app.post('/registraionto',async(req,res)=>{
//   console.log("put ra pooks");
//   console.log("hello world");
//     try{ 
//      let event=new ClubEvent({
//       _id: req.params.id, 
//           clubname:req.body.clubname,
//           image:req.body.image,
//           title:req.body.title,
//           description:req.body.description,
//           venue:req.body.venue,
//           date:req.body.date,
//           time:req.body.time,
//        })

//    event= await event.save()
//    const events = await ClubEvent.find({});
//        res.status(201).render("events",{events});
//     }catch(error){
//       console.log("something went wrong");
//        res.status(400).send(error);
//     }
//  })
// async function moveCompletedEvents() {
//   const events = await ClubEvent.find({ time2: { $lte: new Date() } });
//   await ClubEvent.deleteMany({ time2: { $lte: new Date() } });
//   const eventss=await ClubEvent.find({});
//  // events2= await events2.save();
//   let event=new ClubEvent2({
//      // _id: req.params.id, 
//           clubname:eventss.clubname,
//           image:eventss.image,
//           title:eventss.title,
//           description:eventss.description,
//           venue:eventss.venue,
//           date:eventss.date,
          
//           time1:eventss.time1,
//           time2:eventss.time2,
//        })

//     event= await event.save()
  
// query the ClubEvent database and populate events2


//}
//setInterval(moveCompletedEvents, 1000);

// app.listen(3000, () => console.log(`Example app listening on por`))



const express = require('express')
const multer = require('multer');
const uuid = require('uuid'); 
const app = express()
const methodOverride = require('method-override');
app.use(methodOverride('_method'));

const ClubEvent=require("./models/Clubs")
const { Gallery, Image }=require("./models/Clubs4")
//const GridFsStorage = require('multer-gridfs-storage');
const mongoose = require('mongoose');
const cors = require('cors')
const passport = require('passport');
const cookieSession = require('cookie-session')
require('dotenv').config()
require('./passport-setup.js');
const bodyParser = require('body-parser');
const async = require('hbs/lib/async');
app.use(cors())
app.use(express.static("public"))
app.set("view engine","ejs")
const { ObjectId } = require('mongodb');

app.use(express.urlencoded({extended:false}));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.json())

const MONGODB_URL = "mongodb://127.0.0.1/ClubEvent";
 mongoose.connect(MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
   .then(() => console.log("Connected to MongoDB"))
  
  .catch((error) => console.log("Error connecting to MongoDB: ", error));





const ClubEvent2 = require("./models/Clubs2");
const EventRegister=require("./models/Clubs3");





async function transferEvents() {
  const now = new Date();
 const events = await ClubEvent.find({ time2: { $lte: now } }, null, { collection: 'ClubEvent' });

  if (events.length > 0) {
   await ClubEvent.deleteMany({ _id: { $in: events.map(event => event._id) } }, { collection: 'ClubEvent' });

    const eventsData = events.map(event => {
      const eventData = event.toObject();
      eventData._id = new ObjectId();
      return eventData;
    });
    await ClubEvent2.insertMany(eventsData, { collection: 'ClubEvent2' });

    
    console.log('Completed events moved successfully!');
  }
}

setInterval(() => {
  transferEvents();
}, 1000);
module.exports = transferEvents;




let pdd;

const isLoggedIn = (req, res, next) => {
  console.log(req.user);
  //  if (req.user.emails[0].value === "dommetimohan104@gmail.com" || "nithinkatkam504106@gmail.com") {
  //       if(req.user.emails[0].value=="nithinkatkam504106@gmail.com"){
  //         pdd="Chitram Club";
  //       }
  //       else if(req.user._json.email=="dommetimohan104@gmail.com"){
  //         pdd="Prayatnam Club"
  //       }
      if((req.user._json.email=="nithinkatkam504106@gmail.com") || req.user._json.email=="dommetimohan104@gmail.com"){
                      if(req.user._json.email=="nithinkatkam504106@gmail.com"){
                        pdd="Chitram Club";
                      }
                      else if(req.user._json.email=="dommetimohan104@gmail.com"){
                        pdd="Prayatnam Club"
                      }
                          next();
      }

  else {
    res.sendStatus(401);
  }
}






var x;
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public')
  },
  filename: function (req, file, cb) {
    x=`${Date.now()}-${file.originalname}`;
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});

const upload = multer({ storage});




app.get('/galleryform',async(req,res)=>{
  res.render('galleryform.ejs');
 
});













// configure storage for multer
const storage2 = multer.memoryStorage();
const upload2 = multer({ storage: storage2, limits: { fileSize: 5 * 1024 * 1024 } });



app.post('/upload2', upload2.array('images', 5), async (req, res) => {
  try {
    const { title } = req.body;
    const images = req.files;
    const imageDocuments = [];
    for (const image of images) {
      const newImage = new Image({
        filename: image.originalname,
        contentType: image.mimetype,
        data: image.buffer
      });
      imageDocuments.push(newImage);
    }
    const newGallery = new Gallery({ title, images: imageDocuments });
    await newGallery.save();
    res.redirect('/gallery');
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
});









// app.post('/upload2', upload2.array('images'), async (req, res) => {
//   try {
//     const images = req.files;
//     // loop through all uploaded images
//     for (const image of images) {
//       const newImage = new File({
//         filename: image.originalname,
//         contentType: image.mimetype,
//         data: image.buffer,

//       });
//       await newImage.save();
//     }
//     res.status(200).res.render('gallery', { images: images });
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('Server error');
//   }
// });

// // start the server


// var y;
// const storage1 = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, './public')
//   },
//   filename: function (req, file, cb) {
//     y=`${Date.now()}-${file.originalname}`;
//     cb(null, `${Date.now()}-${file.originalname}`);
//   }
// });

// const upload1 = multer({ storage1});
// // Check file type
// function checkFileType(file, cb) {
//   // Allowed file types
//   const filetypes = /jpeg|jpg|png|gif/;
//   // Check file extension
//   const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
//   // Check MIME type
//   const mimetype = filetypes.test(file.mimetype);
//   if (mimetype && extname) {
//     return cb(null, true);
//   } else {
//     cb('Error: Images only!');
//   }
// }
// Set up multer storage
// const storage1 = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, './public')
//   },
//   filename: function (req, file, cb) {
//     cb(null, `${Date.now()}-${file.originalname}`);
//   }
// });

// Set up multer upload
// const upload1 = multer({
//   storage: storage1,
//   // Limits of the uploaded files
//   limits: { fileSize: 1024 * 1024 * 5 },
//   // Filter the type of uploaded file
//   fileFilter: function (req, file, cb) {
//     if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
//       return cb(new Error('Only image files are allowed!'));
//     }
//     cb(null, true);
//   }
// }).array('image', 5); // allow up to 5 images to be uploaded

// // Define a route to handle file uploads
// app.post('/upload1', async (req, res) => {
//   try {
//     upload1(req, res, (err) => {
//       if (err) {
//         return res.status(400).json({
//           message: err.message
//         });
//       }

//       // Save the filenames of the uploaded images to the database
//       const imageNames = req.files.map((file) => {
//         return file.filename;
//       });

//       // Create a new instance of File and save to database
//       const file = new File({
//         images: imageNames
//       });

//       file.save();

//       return res.status(200).json({
//         message: 'Images uploaded successfully'
//       });
//     });
//   } catch (err) {
//     console.error(err);
//     res.status(500).send('Server Error');
//   }
// });








// Create a new instance of Multer and specify the storage engine


// Define a route to handle file uploads




// Handle file upload
app.post('/upload',upload.single('image'), async (req, res)=> {
  // upload(req, res, function (err) {
  //   if (err) {
  //     console.log(err);
  //     res.render('index', { msg: err });
  //   } else {
  //     console.log(req.file);
  //     res.render('index', { msg: 'File uploaded successfully!' });
  //   }
  // });
  console.log("hello world");
    try{ 
     let event=new ClubEvent({
      _id: req.params.id, 
          clubname:req.body.clubname,
          image:x,
          title:req.body.title,
          description:req.body.description,
          venue:req.body.venue,
          date:req.body.date,
          
          time1:req.body.time1,
          time2:req.body.time2,
       })

   event = await event.save({ collection: 'ClubEvent' });
  const events = await ClubEvent.find({}, null, { collection: 'ClubEvent' });
       res.status(201).render("events",{events});
    }catch(error){
      console.log("something went wrong");
       res.status(400).send(error);
    }
 });

app.post('/registeroo/:title/:clubname/:time1', async (req, res) => {
   console.log("THanh you");
   console.log(req.body);
  let eventReg = new EventRegister({
    name: req.body.name,
    email:req.body.email,
    rollno: req.body.rollno,
    year: req.body.year,
    branch: req.body.branch,
    section: req.body.section,
    title: req.params.title,
    clubname: req.params.clubname,
    time1:req.params.time1,
    reminder:false
   // user: req.body.user
  });
   console.log("THanhkkk you");
  eventReg.save()
    .then(() => {
      // handle successful save
      console.log("THanK");
      res.send("Thank you for registering!"); // add this line to send the message to the client
    })
    .catch((error) => {
     console.log(error+"errs mesfsgd")
    });

});


   
app.delete('/events/:id', async (req, res) => {
  try {
    const deletedEvent = await ClubEvent.findByIdAndDelete(req.params.id);
    res.status(200).send(deletedEvent);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
});
    
const nodemailer = require('nodemailer');
//const EventRegister = require('./models/EventRegister');

// Function to send email to registered user
//const nodemailer = require('nodemailer');
//const EventRegister = require('./models/EventRegister');

// Function to send email to registered user
const sendEmail = (userEmail, eventName) => {
  console.log("vachesa");
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: '421135@student.nitandhra.ac.in',
      pass: 'Remember@44',
    },
  });

  const mailOptions = {
    from: '421135@student.nitandhra.ac.in',
    to: userEmail,
    subject: 'Event Reminder',
    text: `You have registered for the ${eventName} event. It will start in 15 minutes.`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log(`Email sent to ${userEmail}: ` + info.response);
    }
  });
};
const currentTime = new Date();
const yea = currentTime.getTime();
const year = currentTime.getFullYear();
const month = currentTime.getMonth() + 1;
const day = currentTime.getDate();
const hour = currentTime.getHours();
const minute = currentTime.getMinutes();
const second = currentTime.getSeconds();
const timezoneOffset = currentTime.getTimezoneOffset() / 60;
const timezoneSign = timezoneOffset > 0 ? "-" : "+";
const timezoneOffsetHours = Math.abs(timezoneOffset);
const timezoneOffsetMinutes = Math.abs(timezoneOffset) % 1 * 60;
const timezoneString = `GMT${timezoneSign}${timezoneOffsetHours < 10 ? '0' : ''}${timezoneOffsetHours}:${timezoneOffsetMinutes < 10 ? '0' : ''}${timezoneOffsetMinutes}`;
console.log(yea);
console.log(`Current date and time in your local time zone: ${month}/${day}/${year} ${hour}:${minute}:${second} ${timezoneString}`);

// Function to check if the event is starting in 15 minutes and send reminder email
const checkEventStart = async (eventName) => {
  const event = await EventRegister.findOne({ title: eventName });
  //console.log(event.title);
 // console.log(event.title);
  const eventTime = new Date(event.time1);
  //console.log(eventTime);
  const currentTime = new Date();
  // console.log("eventtiem")
  // console.log(eventTime.getTime())
  // console.log("currettiem")
  // console.log(currentTime.getTime())
  const timeDiff = eventTime.getTime() - currentTime.getTime();
  const fifteenMinutes = 15 * 60 * 1000 * 23; // convert 15 minutes to milliseconds
  // console.log(event.title);
  
  // console.log(timeDiff);
  // console.log( '---')

  //console.log(event.reminder);
  //console.log(timeDiff);
  if (timeDiff <= fifteenMinutes && !event.reminder) {
    console.log("Ikkada");
    sendEmail(event.email, event.title);
    event.reminder = true;
    await event.save(); // Save the 
  }

};

// Check the start time of each event every minute
setInterval(async () => {
  console.log("on way");
  const events = await EventRegister.find();
  events.forEach((event) => {
    checkEventStart(event.title);
  });
},  10000); // check every minute




 app.put('/events/:id', async (req, res) => {

  console.log("ph");
  try {
    const event = await ClubEvent.findById(req.params.id);
    console.log('HI ');

    if (!event) {
      return res.status(404).send('Event not found');
    }
    event._id = req.params.id;
    event.clubname = req.body.clubname;
    event.image = req.body.image;
    event.title = req.body.title;
    event.description = req.body.description;
    event.venue = req.body.venue;
    event.date = req.body.date;
    event.time = req.body.time;

    await event.save();
    res.redirect('/events');
  } catch (error) {
    console.log('Error: ', error);
    res.status(500).send('Something went wrong');
  }
});

app.get('/events/:id/edit', async (req, res) => {
  console.log("edit ");
  try {
    const events = await ClubEvent.findById(req.params.id);
    console.log("hioasldfjh");
    res.render('reg2', { events});
  } catch (error) {
    console.log('Error: ', error);
    res.status(500).send('Something went wrong baby');
  }
});

app.post('/events/:id/edit', async (req, res) => {
  try {
    const { clubname, image, title, description, venue, date, time } = req.body;
    await ClubEvent.findByIdAndUpdate(req.params.id, { clubname, image, title, description, venue, date, time });
    res.redirect('/events');
  } catch (error) {
    console.log("post edit ra hooks");
    console.log('Error: ', error);
    res.status(500).send('Something went wrong');
  }
});










app.use(cookieSession({
    name: 'tuto-session',
    keys: ['key1', 'key2']
  }))

app.use(passport.initialize());
app.use(passport.session());

app.get('/', (req, res) => res.render("home.ejs"))
app.get('/failed', (req, res) => res.send('You Failed to log in!'))



// app.get('/home',isLoggedIn,(req,res,next)=>{
//   let pq=req.user.displayName
//     res.render("chitram2.ejs",{name:name});
//     //next();
// })
let cd;
let pq;
let c="appjsofjsdo";
// In this route you can see that if the user is logged in u can acess his info in: req.user
app.get('/good', isLoggedIn, (req, res,next) =>{
 pq=req.user.displayName;
    res.render("admin.ejs",{c,pdd});
    next();
   
});

// Auth Routes
app.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

// app.get('/google/callback', passport.authenticate('google', { failureRedirect: '/failed' }),
//   function(req, res) {
//     res.redirect('/home');
//   }
// );
app.get('/google/callback', passport.authenticate('google', { failureRedirect: '/failed' }),
  function(req, res) {
    res.redirect('/good');
  }
);

app.get('/logout', (req, res) => {
    req.session = null;
    req.logout();
    res.redirect('/index');
})

app.get("/",(req,res)=>{
    res.render("home.ejs");
})
app.get("/registraionto",(req,res)=>{
    res.redirect("/events")
})
app.get("/clickev/register",(req,res)=>{
    res.render("rrr");
})


app.get("/registraion",isLoggedIn, async (req,res,next)=>{
  try {
    const events = await ClubEvent.find({});
    res.render('registration', { events });
    next();
  } catch (error) {
    console.log("something went wrong");
    res.status(400).send(error);
  }
})

app.get("/",(req,res)=>{
  res.render("home.ejs")
})
app.get("/clickev",(req,res)=>{
    res.render("clickev")
})

app.get('/clubs', (req, res) => {
    res.render('clubs.ejs');
  });

app.get('/faqs', (req, res) => {
    res.render('faq.ejs');
  });

  app.get('/clubs/prayatnam', (req, res) => {
    res.render('prayatnam.ejs');
  });
  
app.get('/clubs/chitram', (req, res) => {
    res.render('chitram.ejs');
  });
app.get('/about', (req, res) => {
    res.render('about.ejs');
  });
 app.get('/clubs/csea', (req, res) => {
    res.render('csea.ejs');
  });

  
  app.get('/clubs/physical-education', (req, res) => {
    res.render('physical.ejs');
  });
  
 app.get('/clubs/brindavanam', (req, res) => {
    res.render('brindavanam.ejs');
  });
  

app.get('/gallery', async (req, res) => {
  try {
    const galleries = await Gallery.find();
    const images = galleries.map(gallery => gallery.images.map(image => ({
      url: `data:${image.contentType};base64,${image.data.toString('base64')}`,
      filename: image.filename
    })));
    res.render('gallery', { galleries, images });
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
});

// Route to display all club events
app.get('/events', async function(req, res) {
  try {
    const events = await ClubEvent.find({}, null, { collection: 'ClubEvent' });
    //const events2 = await ClubEvent2.find({}, null, { collection: 'ClubEvent2' });
    res.render('events', { events }); // Make sure events2 is passed to the view

   
  } catch (err) {
    console.error(err);
    res.render('error', { message: 'An error occurred', error: err });
  }
});
app.get('/eventRegisters', async (req, res) => {
  try {
    let eventRegisters;
    const title = req.query.title;
    if (title) {
      eventRegisters = await EventRegister.find({ title: title });
      const count = eventRegisters.length; // get the count of filtered results
      res.render('eventRegisters', { eventRegisters, count });
    } else {
      eventRegisters = await EventRegister.find();
      const count = eventRegisters.length; // get the count of all results
      res.render('eventRegisters', { eventRegisters, count });
    }
  } catch (error) {
    console.log(error);
    res.redirect('/');
  }
});



app.get('/readmore', (req, res) => {
  const title = req.query.title;
  const description = req.query.description;
  const image = req.query.image;
  const clubname = req.query.clubname;
  const date = req.query.date;
  const venue = req.query.venue;
  const time1 =req.query.time1;
  res.render('readmore.ejs', {time1:time1, title: title, description: description,venue:venue,image:image,clubname:clubname,date:date});
});
app.get('/rrr', (req, res) => {
  const title = req.query.title;
  const name = req.query.name;
  const year = req.query.year;
  const clubname = req.query.clubname;
  const email=req.query.email;
  const branch = req.query.branch;
  const section = req.query.section;
  const time1=req.query.time1;
  //const reminder=req.query.reminder;
  res.render('rrr.ejs', {time1:time1,title: title, name: name,year:year,branch:branch,clubname:clubname,email:email,section:section });
});


app.listen(3000, () => console.log(`Example app listening on port 3000`));




const {OAuth2Client} = require('google-auth-library');
const client1 = new OAuth2Client({
  clientId: '1026641464103-3c5b6dtim26b51q7tco6gs0cra8c15pg.apps.googleusercontent.com',
  clientSecret: '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',
  redirectUri: 'http://localhost:3000/route1/callback'
});

const session = require('express-session');
app.use(session({
  secret: 'my-secret-key',
  resave: false,
  saveUninitialized: true
}));

app.get('/route1', (req, res) => {
  const authUrl = client1.generateAuthUrl({
    access_type: 'offline',
    scope: ['email', 'profile'],
    prompt: 'consent'
  });
  res.redirect(authUrl);
});

app.get('/route1/callback', async (req, res) => {
  try {
    const {tokens} = await client1.getToken(req.query.code);
    client1.setCredentials(tokens);

    const ticket = await client1.verifyIdToken({
      idToken: tokens.id_token,
      audience: '1026641464103-3c5b6dtim26b51q7tco6gs0cra8c15pg.apps.googleusercontent.com',  
    });

    const {name, email} = ticket.getPayload();
    if(email.endsWith('@student.nitandhra.ac.in')){
      req.session.email = email; // store email in session
      res.redirect('/index');
    } else {
      res.send ("<h1> You are not a member of NIT ANDHRA PRADESH, please do login with college Email ");
    }
  } catch (error) {
    console.error(error);
    res.redirect("/");
  }
});

// Middleware function to check if the user is authenticated
function isAuthenticated(req, res, next) {
  if (req.session.email) { // check if session variable exists
    console.log("auth1");
    console.log(req.user);
    console.log(req.session.email);
    next();
  } else {
    console.log("auth2");
    res.send("<h1>Please Login to get credentials")
  }
}
app.get('/logout', (req, res) => {
  req.session.destroy((err) => {
    if(err) {
      console.log(err);
    }
    else {
      res.redirect('/');
    }
  });
});
app.get('/index', isAuthenticated, (req, res) => {
  console.log("pew")
  res.render('index');
});