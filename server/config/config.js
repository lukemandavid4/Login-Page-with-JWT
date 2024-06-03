const mongoose = require(`mongoose`)

const connectDB = () =>{
  mongoose.connect(process.env.DB__CONNECT)
    .then(() =>{
      console.log(`Connected to Database`)
    })
    .catch((err) =>{
      console.log(`Error: ${err}`)
    })
}

module.exports = connectDB