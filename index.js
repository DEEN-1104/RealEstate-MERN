const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const UserModel = require("./models/User");

const app = express();

app.use(cors());
app.use(express.json());

// ✅ Connect to MongoDB
mongoose
    .connect("mongodb://127.0.0.1:27017/User", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("✅ MongoDB Connected"))
    .catch((err) => console.error("❌ MongoDB Connection Error:", err));

// ✅ Login Route
app.post("/login", async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await UserModel.findOne({ email });

        if (!user) return res.status(400).json("❌ No record found");
        if (user.password !== password) return res.status(400).json({ message: "❌ Incorrect Password!" }) ;
        res.json("Success");
    } catch (err) {
        console.error("Login Error:", err);
        res.status(500).json("❌ Internal Server Error");
    }
});

// ✅ Register Route
app.post("/register", async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const existingUser = await UserModel.findOne({ email });

        if (existingUser) return res.status(400).json({ message: "❌ Email already registered!" });

        const newUser = new UserModel({ name, email, password });
        await newUser.save();

        res.status(201).json({ message: "✅ User registered successfully!", user: newUser });
    } catch (err) {
        console.error("❌ Registration Error:", err);
        res.status(500).json("❌ Internal Server Error");
    }
});

// ✅ Start the Server
const PORT = 3001;
app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
