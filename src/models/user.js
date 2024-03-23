const mongoose = require("mongoose")

const user_schema = new mongoose.Schema({

    user_name: { type: String, trim: true, required: true },
    user_email: { type: String, trim: true, required: true },
    user_image: { type: String, trim: true },
    user_password: { type: String, trim: true, required: true },
    user_online: { type: Boolean, default: false }
    
}, { timestamps: true })

module.exports = mongoose.model("user", user_schema)