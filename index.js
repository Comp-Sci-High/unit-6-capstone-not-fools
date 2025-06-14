const express = require('express')
const mongoose = require('mongoose')
const app = express();

// import path from 'path';
// import { fileURLToPath } from 'url';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
app.use(express.static(__dirname + "/public"));

app.use(express.json());

app.set("view engine", "ejs");

app.use((req, res, next) => {
    console.log(`${req.method}: ${req.path}`);
    next();
});

const cardSchema = new mongoose.Schema(
    {

        name: { type: String},
        image: { type: String},
        price: { type: Number},
        avail: { type: Boolean},
        genre: {type: String },
        description: {type: String }
    }
);

const Card = mongoose.model("Card", cardSchema, "Cards");

app.post("/add/card", async (req, res) => {
  console.log(req.body)
  const newCard = await new Card({
    name: req.body.name,
    image: req.body.image,
    price: req.body.price,
    genre: req.body.genre,
     description: req.body.description
     
  }).save();
  res.json(newCard);
});




app.get("/", async (req, res) => {
    const cards = await Card.find({});
    res.render("index.ejs", { cards });
});


app.get("/pokemon", async (req, res) => {
  const cards = await Card.find({ genre: "pokemon" });
  res.render("index.ejs", { cards });
});

app.get("/magic", async (req, res) => {
  const cards = await Card.find({ genre: "mtg" });
  console.log(cards)
  res.render("magic.ejs", { cards });
});

app.get("/yugioh", async (req, res) => {
  const cards = await Card.find({ genre: "yugioh" });
  res.render("yu.ejs", { cards });
});


app.delete("/delete/:_id", async (req,res) => {
    const response = await Card.findOneAndDelete({_id: req.params._id})
    res.json(response)
})


app.patch("/patch/:_id", async (req, res) => {
    const response = await Card.findOneAndUpdate({ _id: req.params._id }, 
    req.body, {new: true})
    res.json(response);
    });
    
async function startServer(){
    await mongoose.connect("mongodb+srv://SE12:CSH2025@cluster101.nh11j.mongodb.net/cesar?retryWrites=true&w=majority&appName=Cluster101");

    app.listen(3000, () => {
        console.log(`Server running.`);
    });
}


startServer();

