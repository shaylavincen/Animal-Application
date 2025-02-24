const express = require('express');
const mongoose = require("mongoose");
const animals = require('./route');
const app = express();
const port = 3000;
const cors = require('cors');

app.use(cors());

// to use route.js
app.use(express.json());
app.use('/animals', animals);

app.get("/", async (req, res) => {
    return res.json({ message: "Animal Application" });
});

const start = async () => {
    try {
        await mongoose.connect(
            "mongodb://aacuser:SNHU1234@localhost:27017/aac?authSource=admin"
        );

        app.listen(3000, () => console.log(`Server started on port ${port}`));
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};

start();