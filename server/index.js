const express = require(`express`)
const connectDB = require("./config/config")
const router = require(`./routes/userRoute`)
const app = express()
const dotenv = require(`dotenv`).config()

//middlewares
app.use(express.json())
app.use(`/api/users`, router)

const port = process.env.PORT || 3000
app.listen(port, () =>{
  console.log(`Listening on port ${port}...`)
})

connectDB()