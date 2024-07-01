const nodemailer = require("nodemailer");

exports.sendMail = (req, res) => {
    const transport = nodemailer.createTransport({
        service: "gmail",
        host: "smtp.gmail.com",
        port: 465,
        auth: {
            user: "mbasant805@gmail.com",
            pass: "lrbsleghtyqzjgzu",
        },
    });

    const mailOptions = {
        from: "Basant Meena <mbasant805@gmail.com>",
        to: req.body.email,
        subject: " SUBSCRIPTION",
        html: `<h1 style='text-align:center; margin-top:10%'>Thank you for subscribe</h1>`,
    };

    transport.sendMail(mailOptions, (err, info) => {
        if (err) return res.send(err);
        console.log(info);
        return res.send(
            "<h1 style='text-align:center; margin-top:10%'>Email Sent!</h1>"
        );
    });
};