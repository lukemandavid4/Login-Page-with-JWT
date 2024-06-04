const User = require(`../model/userModel`)
const validator = require(`validator`)
const bcrypt = require(`bcrypt`)
const jwt = require(`jsonwebtoken`)

const createToken = (id) =>{
  return jwt.sign({id}, process.env.JWT_SECRET)
}
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
    const token = createToken(user._id)
    return res.status(201).json({success: true, data: user, token})
  } catch (error) {
    console.log(`Error: ${error}`)
    return res.status(500).json({success: false, message: error.message})
  }
}
const login = async (req, res) =>{
  const {email, password} = req.body
  try {
    const user = await User.findOne({email})
    if (!user){
      return res.status(400).json({success: false, message: "User does not exist"})
    }
    const match = await bcrypt.compare(password, user.password)
    if (!match){
      return res.status(400).json({success: false, message: "Invalid credentials"})
    }
    const token = createToken(user._id)
    return res.status(201).json({success: true, data: user, token})
  } catch (error) {
    console.log(`Error: ${error}`)
    return res.status(500).json({success: false, message: error.message})
  } 
}

module.exports = {register, login}