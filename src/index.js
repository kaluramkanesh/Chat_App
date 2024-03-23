require('dotenv').config()
const express = require("express")
const mongoose = require("mongoose")
const router = require("./routes/routers")
const path = require("path")
const multer=require("multer")
const app = express()
const PORT = process.env.PORT || 3123
const MONGODBURL = process.env.MONGODB_URL
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Set up views directory and view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static('./public'))
mongoose.connect(MONGODBURL, {

}).then(() => {
    console.log("Mongodb is connected ✅✅")
}).catch((error) => { console.log("mongodb is not connected", error.message) })

app.use("/", router)

app.listen(PORT, () => { console.log(`Server is running on port ${PORT}`) })