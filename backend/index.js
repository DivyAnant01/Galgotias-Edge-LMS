// const express = require("express");
// const app = express();

// const userRoutes = require("./routes/User");
// const profileRoutes = require("./routes/Profile");
// const paymentRoutes = require("./routes/Payments");
// const courseRoutes = require("./routes/Course");
// const contactUsRoute = require("./routes/Contact");
// const database = require("./config/database");
// const cookieParser = require("cookie-parser");
// const cors = require("cors");
// const {cloudinaryConnect } = require("./config/cloudinary");
// const fileUpload = require("express-fileupload");
// const dotenv = require("dotenv");
// const path = require("path");


// dotenv.config();
// const PORT = process.env.PORT || 4000;

// //database connect
// database.connect();
// //middlewares
// app.use(express.json());
// app.use(cookieParser());
// app.use(cors())

// app.use(
// 	fileUpload({
// 		useTempFiles:true,
// 		tempFileDir:"/tmp",
// 	})
// )
// //cloudinary connection
// cloudinaryConnect();

// //routes
// app.use("/api/v1/auth", userRoutes);
// app.use("/api/v1/profile", profileRoutes);
// app.use("/api/v1/course", courseRoutes);
// app.use("/api/v1/payment", paymentRoutes);
// app.use("/api/v1/reach", contactUsRoute);

// //def route

// // --------------------------deployment------------------------------


// if (process.env.NODE_ENV === "PRODUCTION") {
// 	app.use(express.static(path.join(__dirname, "../frontend/build")))

//   app.get("*", (req, res) => {
// 	res.sendFile(path.resolve(__dirname, "../frontend/build/index.html"));
//   });
// } else {
// 	app.get("/", (req, res) => {
// 		return res.json({
// 			success:true,
// 			message:'Your server is up and running....'
// 		});
// 	});
// }

// // --------------------------deployment------------------------------


// app.listen(PORT, () => {
// 	console.log(`App is running at ${PORT}`)
// })













const express = require("express");
const app = express();

const userRoutes = require("./routes/User");
const profileRoutes = require("./routes/Profile");
const courseRoutes = require("./routes/Course");
const contactUsRoute = require("./routes/Contact");
const database = require("./config/database");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const { cloudinaryConnect } = require("./config/cloudinary");
const fileUpload = require("express-fileupload");
const path = require("path");

// Load environment variables
require("dotenv").config();

const PORT = process.env.PORT || 4000;

// Connect to database
database.connect();

// Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp",
  })
);

// Connect to Cloudinary
cloudinaryConnect();

// Routes
app.use("/api/v1/auth", userRoutes);
app.use("/api/v1/profile", profileRoutes);
app.use("/api/v1/course", courseRoutes);
app.use("/api/v1/reach", contactUsRoute);

// Default route for deployment
if (process.env.NODE_ENV === "PRODUCTION") {
  app.use(express.static(path.join(__dirname, "../frontend/build")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../frontend/build/index.html"));
  });
} else {
  app.get("/", (req, res) => {
    return res.json({
      success: true,
      message: "Your server is up and running....",
    });
  });
}

// Start the server
app.listen(PORT, () => {
  console.log(`App is running at ${PORT}`);
});
