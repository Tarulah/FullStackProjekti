const express = require('express');
const bodyParser = require("body-parser");
const mssql = require("mssql");

let app = express();

app.use(bodyParser.json());

//Väliaikanen ratkaisu
let cardset = "BaseSet";
let cardId = 1;

function getConfig(){
	let config = {
		user: '',
		password: '',
		server: 'localhost',
		database: 'pokemonkorttisql'
	};
	
	return config;
}

//GET ONE CARD FROM A SET
app.get("/cards/" + cardset + "/" + cardId, function(req, res) {
	
	let config = getConfig();
	
	mssql.connect(config, function(err){
		if(err){
			console.log("Error while connecting to database: " + err);
			return res.status(404).json({message:"not found"});
		}
		
		let request = new mssql.Request();
		
		request.query('select * from ' + cardset + ' where id=\'' + cardId + '\'', function(err, recordset){
			if(err){
				console.log("Error with the query: " + err);
				return res.status(404).json({message:"not found"});
			}
			
			mssql.close();
			return res.status(200).json(recordset);
		});
	});
});

//GET ALL CARDS OF A SET
app.get("/cards/" + cardset, function(req, res) {
	
	let config = getConfig();
	
	mssql.connect(config, function(err){
		if(err){
			console.log("Error while connecting to database: " + err);
			return res.status(404).json({message:"not found"});
		}
		
		let request = new mssql.Request();
		
		request.query('select * from ' + cardset, function(err, recordset){
			if(err){
				console.log("Error with the query: " + err);
				return res.status(404).json({message:"not found"});
			}
			
			mssql.close();
			return res.status(200).json(recordset);
		});
	});
});

//POST
app.post("/testi",function(req, res) {

});

//DELETE

//PUT


app.listen(3001);