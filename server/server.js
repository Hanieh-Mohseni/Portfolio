


const path = require('path');
const express = require('express');


const nodemailer = require("nodemailer");
const cors = require("cors");
const router = express.Router();


const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
// app.listen(5000, () => console.log("Server Running"));


const PORT = 8000;

express()

 .use(express.json())

 // ============Routs for Endpoints============//

 


  .listen(PORT, function() {
  console.info('🌍 Listening on port ' + PORT);
  
});


// setting Nodmailer with gmail

const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: "Hani.Portfolio.Nodmailer@gmail.com",
    pass: "Alonestar",
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

// setup the router
router.post("/contact", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.message; 
  const mail = {
    from: name,
    to: "Hani.Portfolio.Nodmailer@gmail.com",
    subject: "Contact Form Submission",
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Message: ${message}</p>`,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json({ status: "ERROR" });
    } else {
      res.json({ status: "Message Sent" });
    }
  });
});
