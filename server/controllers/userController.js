const router = require(`../routes/userRoute`)
const User = require(`../model/userModel`)
const validator = require(`validator`)
const bcrypt = require(`bcrypt`)

const register = async (req, res) =>{
  const {name, email, password} = req.body
  if (!email || !password || !name) {
    return res.status(400).json({ success: false, message: 'All fields are required' });
  }
  if(!validator.isEmail(email)){
    return res.status(400).json({success: false, message: 'Please enter a valid email'})
  }
  if(password.length < 8){
    return res.status(400).json({success: false, message: 'Password must be at least 8 characters'})
  }
  try {
    const exists = await User.findOne({email})
    if(exists){
      return res.status(400).json({success: false, message: 'User already exists'})
    }
    const salt = await bcrypt.genSalt()
    const hashedPassword = await bcrypt.hash(password, salt)
    const user = await User.create({
      name: name,
      email: email,
      password: hashedPassword
    })
    return res.status(201).json({success: true, data: user})
  } catch (error) {
    console.log(`Error: ${error}`)
    return res.status(500).json({success: false, message: error.message})
  }
}

module.exports = {register}