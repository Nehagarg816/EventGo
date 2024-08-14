if (process.env.NODE_ENV != "production") {
    require("dotenv").config();
}

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Events = require("./models/events");
// const MONGO_URL = "mongodb://127.0.0.1:27017/events";
const dbUrl = process.env.ATLASDB_URL;
console.log(dbUrl);
const app = express();
app.use(cors());
app.use(express.json());

if (!dbUrl) {
    console.error("Database URL is not defined in the environment variables.");
    process.exit(1);
}

mongoose
    .connect(dbUrl, {
        serverSelectionTimeoutMS: 50000,
        connectTimeoutMS: 50000,
    })
    .then(() => console.log("Connected to database"))
    .catch((err) => console.error("Connection error:", err));

app.get("/cards", async (req, res) => {
    const cards = await Events.find();
    res.json(cards);
});

// Search route
app.get("/search", async (req, res) => {
    try {
        const { query } = req.query;
        const searchRegex = new RegExp(query, "i");

        const events = await Events.find({
            $or: [
                { title: { $regex: searchRegex } },
                { location: { $regex: searchRegex } },
                { category: { $regex: searchRegex } },
            ],
        });
        console.log("Search Route");

        res.json(events);
    } catch (err) {
        res.status(500).send("Server error");
    }
});

// New Route
app.post("/cards/new", async (req, res) => {
    try {
        const newEvent = new Events(req.body);
        await newEvent.save();
        res.status(201).json({
            newEvent,
            redirectUrl: `/cards`,
        });
    } catch (error) {
        res.status(500).json({ message: "Failed to create event", error });
    }
});

const PORT = 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
