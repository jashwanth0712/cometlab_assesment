import express from "express";
import  githubRoutes  from "./routes/github.js";
import bodyParser from "body-parser";

const app=express();
app.use(bodyParser.json());
app.use("/",githubRoutes);
const PORT = 5000;

app.listen(PORT,()=>{console.log(`[.]server running at port : ${PORT}`)})