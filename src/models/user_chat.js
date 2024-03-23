const mongoose = require("mongoose")
const Object_id = mongoose.Schema.Types.ObjectId
const chat_schema = new mongoose.Schema({
    sender_id: {
        type: Object_id,
        ref: "user"
    },
    receiver_id: {
        type: Object_id,
        ref: "user"
    },
    message: {
        type: String,
        required: true,
        trim: true
    }
}, { timestamps: true })

module.exports = mongoose.model("user_chat", chat_schema)