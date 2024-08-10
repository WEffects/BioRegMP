console.log("hello world")

import nodemailer from 'nodemailer'
// Create a transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
    service: 'gmail', // e.g., 'Gmail', 'Yahoo', 'Outlook', etc.
    auth: {
        user: 'rakshankverma130250@gmail.com', // your email address
        pass: '*oh&Fea8&3$!$eZ9Y$jZ'   // your email password (Consider using environment variables or OAuth2 for security)
    }
});

// Set up email data
let mailOptions = {
    from: '"Rakshank" rakshankverma130250@gmail.com', // sender address
    to: 'rakshankverma1930@gmail.com',            // list of receivers
    subject: 'Hello from Node.js',                // subject line
    text: 'Hello world?',                         // plain text body
    html: '<b>Hello world?</b>'                   // html body
};

// Send email with defined transport object
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error);
    }
    console.log('Message sent: %s', info.messageId);
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
});
