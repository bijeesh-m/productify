const express = require("express");
const connectDB = require("./configs/db");
const dns = require("dns");
const authRoutes = require("./routes/authRoutes")
const cors = require("cors")

const app = express();
require("dotenv").config()

dns.setServers(["8.8.8.8"])

app.use(cors({ origin: "http://localhost:5173" }))

connectDB()
app.use(express.json());

app.use(authRoutes)

app.listen(5000, () => {
    console.log("Server is running...");
})