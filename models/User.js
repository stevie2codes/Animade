const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {
        type: String,
        trim: true,
        required: "Must enter a username"
    },

    password: {
        type: String,
        trim: true,
        required: "Must enter a password",
        validate: [({ length }) => length >= 8, "Password must be at least 8 characters."]
        //set up some type of length verification here maybe
        //still need to figure out how to hash password
    },

    email: {
        type: String,
        unique: true,
        match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
    },

    user_created: {
        type: Date,
        default: Date.now
    }

    //maybe add a saved animations property to this model here

    //maybe add email verification and such here, unsure yet
});

//hashes password everytime the save function is called, before user data is stored
UserSchema.pre("save", function(next) {
    if(!this.isModified("password")) {
        return next();
    }
    this.password = bcrypt.hashSync(this.password, 12);
    next();
});

UserSchema.methods.comparePassword = function(plaintext, callback) {
    return callback(null, bcrypt.compareSync(plaintext, this.password));
};

const User = mongoose.model("User", UserSchema);


module.exports = User;