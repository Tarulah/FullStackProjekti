const express = require('express');
const mssql = require("mssql");

let router = express();

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
router.get("/sets/" + cardset + "/" + cardId, function(req, res) {
	
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
router.get("/sets/" + cardset, function(req, res) {
	
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
router.post("/testi",function(req, res) {

});

//DELETE

//PUT


module.exports = router;
