const express = require("express");
const mongoose = require("mongoose");
const app = express();

// routes 
// step 4 เพิ่ม route โดยเรียกใช้ routeที่สร้างก่อนหน้า
// const postRouter = require("./routes/postRoute")
// const userRouter = require("./routes/userRoute")



// setup function connect db
const { MONGO_IP, MONGO_PORT, MONGO_USER, MONGO_PASS} = require("./config/config")
const dburl=`mongodb://${MONGO_IP}:${MONGO_PORT}/?authSource=admin`;
const connectWithRetry= ()=>{
mongoose.connect(dburl,{user: MONGO_USER, pass: MONGO_PASS})
  .then(()=>{
    console.log("connect db complate");

  })
  .catch((e) =>{
    console.log(e);
    setTimeout(connectWithRetry, 5000);
  });
}
// เรียกใช้ตัวconnect db
connectWithRetry()

// รับค่า json ได้ 
app.use(express.json())
app.get("/", (req, res) => {
  res.send("back end");
})
// step 5 สร้างpath สำหรับ เรียก route
// app.use("/api/v1/posts",postRouter)
// app.use("/api/v1/users",userRouter)
const port = 8080;

app.listen(port, () => { console.log("ggez"); })

function verifyToken(req, res, next) {
  const AUTH_KEY = "PNK"
  const bearerHeader = req.headers['authorization']
  if (typeof bearerHeader !== 'undefined') {
    const bearerToken = bearerHeader.split(' ')[1]
    const keyToken = bearerHeader.split(' ')[0]

    if (keyToken == AUTH_KEY) {
      req.token = bearerToken
      // console.log(bearerToken);
      next()
    } else {
      res.sendStatus(403) //forbidden
    }
  } else {
    res.sendStatus(403) //forbidden
  }
}