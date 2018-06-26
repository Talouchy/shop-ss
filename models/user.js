const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var bcrypt = require('bcrypt');

// create User Schema and model
const UserSchema = new Schema({
  firstName: {
    type: String,
    lowercase: true,
  },
  lastName: {
    type: String,
    lowercase: true,
  },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    required: [true, 'Email address is required'],
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
  },
  password: {
    type: String,
    required: [true, "Password is required"]
  },
  loginAttempts: {
    type: Number,
    required: true,
    default: 0
  },
  lockUntil: {
    type: Number
  },
  regDate: {
    type: Date,
    default: Date.now,
    required: true
  }
});

// pre
UserSchema.pre('save', function(next) {
    if(this.password) {
        var salt = bcrypt.genSaltSync(10)
        this.password  = bcrypt.hashSync(this.password, salt)
    }
    next()
});

/*UserSchema.methods.comparePassword = function(candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch);
    });
};*/

const User = mongoose.model('User', UserSchema);

module.exports = User;
