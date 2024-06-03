const mongoose = require(`mongoose`)
const {isEmail} = require(`validator`)

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxlength: 255
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: [isEmail]
  },
  password: {
    type: String,
    required: true,
    minlength: 8
  }
})

const User = mongoose.model('User', userSchema)

module.exports = User