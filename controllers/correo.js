const nodemailer = require('nodemailer');

const enviarEmail = (req, res = response) => {
    var transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
            user: 'proyectotorrecasas@gmail.com',
            pass: 'hhmvmsybzlaovofr' 
        }
    });

    const mailOptions = {
        from: `${req.nombre} <${req.emailEmi}>`,
        to: req.emailDest, 
        subject: req.asunto,
        html: 
            `
            <strong>Nombre:</strong> ${req.nombre} <br/>
            <strong>Mensaje:</strong> ${req.mensaje}
            `
    };

    transporter.sendMail(mailOptions, function (err, info) {
        if(err){
            return res.json({
                ok: false,
                msg: 'No se ha podido enviar el correo'
            })
        } else {
            return res.json({
                ok: true,
                msg: 'Correo enviado'
            })
        }
    });
}

module.exports = enviarEmail;