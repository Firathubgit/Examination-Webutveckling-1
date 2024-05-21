const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();

// Middleware för att tolka url-encoded form-data
app.use(bodyParser.urlencoded({ extended: false }));

// Middleware för att tolka JSON
app.use(bodyParser.json());

// Hantera POST-förfrågningar till '/sendmail'
app.post('/sendmail', (req, res) => {
  const { firstname, lastname, message, department } = req.body;

  // Skapa en SMTP transportör
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'lokigulferismoil@gmail.com', // E-postadressen som skickar e-post
      pass: 'Alifirat05' // Lösenord för e-postadressen
    }
  });

  // Inställningar för e-postmeddelandet
  const mailOptions = {
    from: 'lokigulferismoil@gmail.com', // E-postadressen som skickar e-post
    to: 'Loki_gulfer_ismoil@hotmail.com', // Mottagarens e-postadress
    subject: 'Nytt meddelande från kontaktsidan',
    text: `
      Förnamn: ${firstname}
      Efternamn: ${lastname}
      Meddelande: ${message}
      Avdelning: ${department}
    `
  };

  // Skicka e-post
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send('Något gick fel vid skickandet av e-post.');
    } else {
      console.log('E-post skickad: ' + info.response);
      res.status(200).send('E-post skickad framgångsrikt.');
    }
  });
});

// Lyssna på port 3000
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
