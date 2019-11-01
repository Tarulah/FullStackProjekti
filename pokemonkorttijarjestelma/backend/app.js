const express = require('express');
const bodyParser = require("body-parser");

let app = express();

//Take stuff from database and put it into json file

//Dummy Database
let database = []
let id = 100

app.use(bodyParser.json());

//GET
//testi
app.get("/testi", function(req, res) {
	return res.status(200).json(database);
});

//POST
app.post("/testi",function(req, res) {
	let card = {
		id:id,
		cardName:req.body.cardName,
		setNumber:req.body.setNumber,
		pokemonType:req.body.pokemonType,
		cardType:req.body.cardType
	}
	
	database.push(card);
	id++;
	return res.status(200).json({message:"success"});
});

//DELETE

//PUT


app.listen(3001);