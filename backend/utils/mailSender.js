const nodemailer = require("nodemailer");

const mailSender = async (email, title, body) => {
	try {
		let transporter = nodemailer.createTransport({
			host: process.env.MAIL_HOST,
			port: 587,
			secure: false,
			auth: {
				user: process.env.MAIL_USER,
				pass: process.env.MAIL_PASS,
			},
		});

		let info = await transporter.sendMail({
			from: `"StudyNotion" <${process.env.MAIL_USER}>`,
			to: email,
			subject: title,
			html: body,
		});

		console.log("Email sent: ", info.response);
		return info;
	} catch (error) {
		console.error("Error sending email:", error);
		throw error;
	}
};

module.exports = mailSender;
