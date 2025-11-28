import express from "express";
import dotnev from "dotenv"
dotnev.config();
const app = express();
app.get("/health",(req,res)=>{
    res.send("OK");
});

app.listen(process.env.PORT, ()=>{
    console.log("Server started on port", process.env.PORT);
})