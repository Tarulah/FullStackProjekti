const express = require('express');
var Connection = require('tedious').Connection;
var Request = require('tedious').Request;

let app = express();

//Take stuff from database and put it into json file

//TODO: toteuta jotenki vähän tietoturvallisemmin, ettei mene tiedot vahingossa gittiin
var config = {
	userName: '',
	password: '',
	server: 'localhost'
};

var connection = new Connection(config);

//Open connection to the database
connection.on('connect', function(err) {
	if(err){
		console.log(err);
	} else {
		executeStatement();
	}
});

function executeStatement(){
	request = new Request("select Alakazam from BaseSet, 'pokemonkorttisql'", function(err, rowCount){
		if(err){
			console.log(err);
		} else {
			console.log(rowCount + ' rows');
		}
		//close connection
		connection.close();
	});
	
	//go through the stuff from the database and put it to console.log
	request.on('row', function(columns){
		columns.forEach(function (column){
			if(column.value === null){
				console.log('NULL')
			} else {
				console.log(column.value)
			}
		})
	})
	
	connection.execSql(request)
}


//GET
//testi
app.get("/", function(req, res) {
	res.end("Testi testi");
});


//POST

//DELETE

//PUT


app.listen(3001);