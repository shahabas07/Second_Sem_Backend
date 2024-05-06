const express = require("express")
const port = 4000
const app = express()
// const Route = require("./Route/GetRoute")

app.use(express.json())

// app.use("/route", Route)
app.get('/ping', (req,res) =>{
    res.send("pong")
})

app.listen(port, () =>{
    console.log(`Server is running on ${port}`)
});

