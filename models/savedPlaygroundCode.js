const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const savedPlaygroundCodeSchema = new Schema({
    username: {
        type: String,
        trim: true,
        required: true,
        unique: true,
        code: [{
            playmation_name: {
                type: String,
                trim: true,
                required: true,
                unique: true
            },
            html: {
                type: String,
                trim: true, 
            },
            css: {
                type: String,
                trim: true
            },
            js: {
                type: String,
                trim: true,
            }
        }]
    }

})

const savedPlaygroundCode = mongoose.model("savedPlaygroundCode", savedPlaygroundCodeSchema);

module.exports = savedPlaygroundCode;