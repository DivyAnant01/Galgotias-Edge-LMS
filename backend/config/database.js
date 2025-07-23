const mongoose = require("mongoose");
require("dotenv").config(); // Ensure environment variables are loaded

exports.connect = () => {
    const mongoUri = process.env.MONGO_URL; // Use the environment variable for MongoDB URL

    // Check if MONGO_URL is undefined or empty
    if (!mongoUri) {
        console.log("MONGO_URL is not defined. Please check your .env file.");
        process.exit(1); // Exit if the URL is not set
    }

    mongoose.connect(mongoUri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("DB Connected Successfully");
    })
    .catch((error) => {
        console.log("DB Connection Failed");
        console.error(error);
        process.exit(1); // Exit if connection fails
    });
};
