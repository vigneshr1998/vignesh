const nodemailer = require('nodemailer');
const SmtpTransport=require('nodemailer-smtp-transport');
const transporter = nodemailer.createTransport(SmtpTransport({
    host: "smtp-mail.outlook.com",
    secure: false,
    port: 587,
    auth: {
        user: 'r.vignesh@epikindifi.com',
        pass: 'ydgzchwvnjtvcnlz',
    },
    tls: {
        ciphers: "SSLv3",
        rejectUnauthorized: false,
    },
    logger: true,
   debug: true,
}
//ydgzchwvnjtvcnlz
));
 
let mailDetails = {
    from: 'r.vignesh@epikindifi.com',
    to: 'karthick.umashankar@epikindifi.com',
    subject: 'Send mail',
    text: 'Taks for send mail from node js'
};
 
transporter.sendMail(mailDetails, function(err, data) {
    if(err) {
        console.log('Error Occurs',err);
    } else {
        console.log('Email sent successfully');
    }
});