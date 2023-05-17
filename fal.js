var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: '421135@student.nitandhra.ac.in',
    pass: 'CocoCola@69'
  }
});

var mailOptions = {
  from: '421135@student.nitandhra.ac.in',
  to: 'dommetimohan104@gmail.com',
  subject: 'hello folks',
  text: `hi everyone`
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
