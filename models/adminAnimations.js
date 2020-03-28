const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const adminAnimation = new Schema({
    user: {
        type: String,
        trim: true, 
        required: "Must have a username"
    },

    id: {
        type: Number,
        unique: true,
        required: true
    },

    animation_code: {
        type: String,
        required: "Must provide code for animation"
    },

    date: {
        type: Date,
        default: Date.now
    }

});

const admin_animation = mongoose.model("admin_animation", adminAnimation);

module.exports = admin_animation;