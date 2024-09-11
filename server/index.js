const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware and routes
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello, ChronoTech!");
});

// Connect to MongoDB
mongoose.connect("your-mongodb-uri", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.log(err));

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
