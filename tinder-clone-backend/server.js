import express from 'express'
import mongoose from "mongoose";
import db from './config/db.js'
import Cards from './models/tinderCards.js'
//App config
const app = express();
const port = process.env.PORT || 8001
//Middleware

//API endpoint
app.get('/',(req,res)=>{
    res.status(200).send("API  running")
})

app.post('/tinder/cards', ((req, res) =>{
    const dbCard = req.body;
    Cards.create(dbCard, (err, data) => {
        if (err){
            res.status(500).send(err);
        }
        else {
            res.status(201).send(data);
        }
    })
}))

app.get('/tinder/cards', ((req, res) => {
    Cards.find((err, data) => {
        if (err){
            res.status(500).send(err);
        }
        else {
            res.status(200).send(data);
        }
    });
}))
//Listener

app.listen(port,()=>{
    console.log(`Listening on port ${port}`);
})