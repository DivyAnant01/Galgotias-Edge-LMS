const otpTemplate = (otp) => {
	return `<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>OTP Verification Email</title>
	<style>
		body {
			background-color: #ffffff;
			font-family: Arial, sans-serif;
			font-size: 16px;
			line-height: 1.5;
			color: #333333;
			margin: 0;
			padding: 0;
		}
		.container {
			max-width: 600px;
			margin: 0 auto;
			padding: 20px;
			text-align: center;
		}
		.logo {
			max-width: 150px;
			margin-bottom: 20px;
		}
		.message {
			font-size: 22px;
			font-weight: bold;
			margin-bottom: 20px;
		}
		.body {
			font-size: 16px;
			margin-bottom: 20px;
			text-align: left;
		}
		.highlight {
			font-size: 28px;
			font-weight: bold;
			color: #000;
			margin: 20px 0;
		}
		.support {
			font-size: 14px;
			color: #999999;
			margin-top: 30px;
		}
	</style>
</head>
<body>
	<div class="container">
		<a href="https://studynotion-edtech-project.vercel.app" target="_blank">
			<img class="logo" src="https://i.ibb.co/7Xyj3PC/logo.png" alt="StudyNotion Logo" />
		</a>
		<div class="message">OTP Verification Email</div>
		<div class="body">
			<p>Dear User,</p>
			<p>Thank you for registering with <strong>StudyNotion</strong>. To complete your registration, please use the following One-Time Password (OTP) to verify your account:</p>
			<div class="highlight">${otp}</div>
			<p>This OTP is valid for 5 minutes. If you did not request this, please ignore this email.</p>
		</div>
		<div class="support">
			If you have any questions or need help, reach out to us at
			<a href="mailto:info@studynotion.com">info@studynotion.com</a>. We're happy to help!
		</div>
	</div>
</body>
</html>`;
};

module.exports = otpTemplate;
