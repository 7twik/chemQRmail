const express = require("express");
const app = express();
const dotenv = require("dotenv");
const qrcode = require('qrcode')
const cors = require('cors')
dotenv.config({ path: "./config/.env" });

const connectDB = require("./config/db");
const UrlRouter = require("./routes/Url")

const PORT = 3000;
app.use(cors());
app.use(express.json())


//Connect Mongo DB
connectDB();

app.use('/api',UrlRouter)

app.listen(PORT, () => console.log(`App is listening to Port: ${PORT}`));
