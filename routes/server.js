const express = require("express")
const app = express()
const PORT = 3000


app.get("/",(rec,res)=>{
    res.json({message:"ok"})
})


app.listen(PORT,(rec,res)=>{
    console.log(`servidor iniciado na porta http://localhost:${PORT}`)
})