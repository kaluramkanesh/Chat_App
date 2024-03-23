require('dotenv').config()
const express = require("express")
const mongoose = require("mongoose")
const router = require("./routes/routers")
const app = express()
const PORT = process.env.PORT || 3123
const MONGODBURL = process.env.MONGODB_URL
app.use(express.json())
mongoose.connect(MONGODBURL, {

}).then(() => {
    console.log("Mongodb is connected ✅✅")
}).catch((error) => { console.log("mongodb is not connected", error.message) })

app.use("/", router)

app.listen(PORT, () => { console.log(`Server is running on port ${PORT}`) })