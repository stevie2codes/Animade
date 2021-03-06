const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const adminAnimationSchema = new Schema({
    user: {
        type: String,
        trim: true, 
        required: "Must have a username"
    },

    animation_name: {
        type: String,
        trim: true, 
        unique: true, 
        required: true
    },

    animation_code: {
        type: String,
        required: "Must provide code for animation"
    },

    animation_created: {
        type: Date,
        default: Date.now
    }

});

const adminAnimation = mongoose.model("admin_Animation", adminAnimationSchema);

module.exports = adminAnimation;