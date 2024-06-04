const express = require(`express`)
const connectDB = require("./config/config")
const router = require(`./routes/userRoute`)
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express()

//middlewares
app.use(bodyParser.json());
app.use(cors())
app.use(express.json())
app.use(`/api/users`, router)

const port = process.env.PORT || 3000
app.listen(port, () =>{
  console.log(`Listening on port ${port}...`)
})

connectDB()