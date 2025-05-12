const mongoose = require("mongoose")
const express = require("express")

const app = express();

app.use(express.static(__dirname + "/public"));

app.use(json());

app.set("view engine", "ejs");

app.use((req, res, next) => {
    console.log(`${req.method}: ${req.path}`);
    next();
});

const cardSchema = new Schema(
    {
        name: { type: String},
        image: { type: String},
        grade: { type: Number},
        date: { type: Date},
        price: { type: Number},
        avail: { type: Boolean},
        genre: {type: String }
    }
);

const Card = model("Card", cardSchema, "Cards");

app.post("/add/card", async (req, res) => {
  const newCard = await new Card({
    name: req.body.name,
    image: req.body.image,
    grade: req.body.grade,
    date: req.body.date,
    price: req.body.price,
    avail: req.body.avail,
    genre: req.body.genre
  }).save();
  res.json(newCard);
});




app.get("/", async (req, res) => {
    const cards = await Card.find({});
    res.render("alma.ejs", { cards });
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
    
    await connect("mongodb+srv://SE12:CSH2025@cluster101.nh11j.mongodb.net/cesar?retryWrites=true&w=majority&appName=Cluster101");

 

    app.listen(3000, () => {
        console.log(`Server running.`);
    });


startServer();
