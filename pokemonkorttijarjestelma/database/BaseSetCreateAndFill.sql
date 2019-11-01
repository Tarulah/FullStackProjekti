DROP TABLE BaseSet;

CREATE TABLE BaseSet(
	id INT IDENTITY(1, 1) PRIMARY KEY,
	cardName VARCHAR(255) NOT NULL,
	setName VARCHAR(255) NOT NULL,
	setNumber VARCHAR(10) NOT NULL,
	PokemonType VARCHAR(20) NOT NULL,
	cardType VARCHAR(20) NOT NULL,
	other VARCHAR(255),
	photo VARCHAR(255)
);

INSERT INTO BaseSet(cardName, setName, setNumber, PokemonType, cardType) VALUES ('Alakazam', 'BaseSet', '1/102', 'Psychic', 'Pokemon');
INSERT INTO BaseSet(cardName, setName, setNumber, PokemonType, cardType) VALUES ('Blastoise', 'BaseSet', '2/102', 'Water', 'Pokemon');
INSERT INTO BaseSet(cardName, setName, setNumber, PokemonType, cardType) VALUES ('Chansey', 'BaseSet', '3/102', 'Colorless', 'Pokemon');
INSERT INTO BaseSet(cardName, setName, setNumber, PokemonType, cardType) VALUES ('Charizard', 'BaseSet', '4/102', 'Fire', 'Pokemon');
INSERT INTO BaseSet(cardName, setName, setNumber, PokemonType, cardType) VALUES ('Clefairy', 'BaseSet', '5/102', 'Colorless', 'Pokemon');
INSERT INTO BaseSet(cardName, setName, setNumber, PokemonType, cardType) VALUES ('Gyarados', 'BaseSet', '6/102', 'Water', 'Pokemon');
INSERT INTO BaseSet(cardName, setName, setNumber, PokemonType, cardType) VALUES ('Hitmonchan', 'BaseSet', '7/102', 'Fighting', 'Pokemon');
INSERT INTO BaseSet(cardName, setName, setNumber, PokemonType, cardType) VALUES ('Machamp', 'BaseSet', '8/102', 'Fighting', 'Pokemon');
INSERT INTO BaseSet(cardName, setName, setNumber, PokemonType, cardType) VALUES ('Magneton', 'BaseSet', '9/102', 'Lightning', 'Pokemon');
INSERT INTO BaseSet(cardName, setName, setNumber, PokemonType, cardType) VALUES ('Mewtwo', 'BaseSet', '10/102', 'Psychic', 'Pokemon');
INSERT INTO BaseSet(cardName, setName, setNumber, PokemonType, cardType) VALUES ('Nidoking', 'BaseSet', '11/102', 'Grass', 'Pokemon');
INSERT INTO BaseSet(cardName, setName, setNumber, PokemonType, cardType) VALUES ('Ninetales', 'BaseSet', '12/102', 'Fire', 'Pokemon');
INSERT INTO BaseSet(cardName, setName, setNumber, PokemonType, cardType) VALUES ('Poliwrath', 'BaseSet', '13/102', 'Water', 'Pokemon');
INSERT INTO BaseSet(cardName, setName, setNumber, PokemonType, cardType) VALUES ('Raichu', 'BaseSet', '14/102', 'Lightning', 'Pokemon');
INSERT INTO BaseSet(cardName, setName, setNumber, PokemonType, cardType) VALUES ('Venusaur', 'BaseSet', '15/102', 'Grass', 'Pokemon');
INSERT INTO BaseSet(cardName, setName, setNumber, PokemonType, cardType) VALUES ('Zapdos', 'BaseSet', '16/102', 'Lightning', 'Pokemon');
INSERT INTO BaseSet(cardName, setName, setNumber, PokemonType, cardType) VALUES ('Beedrill', 'BaseSet', '17/102', 'Grass', 'Pokemon');
INSERT INTO BaseSet(cardName, setName, setNumber, PokemonType, cardType) VALUES ('Dragonair', 'BaseSet', '18/102', 'Colorless', 'Pokemon');
INSERT INTO BaseSet(cardName, setName, setNumber, PokemonType, cardType) VALUES ('Dugtrio', 'BaseSet', '19/102', 'Fighting', 'Pokemon');
INSERT INTO BaseSet(cardName, setName, setNumber, PokemonType, cardType) VALUES ('Electabuzz', 'BaseSet', '20/102', 'Lightning', 'Pokemon');
INSERT INTO BaseSet(cardName, setName, setNumber, PokemonType, cardType) VALUES ('Electrode', 'BaseSet', '21/102', 'Lightning', 'Pokemon');
INSERT INTO BaseSet(cardName, setName, setNumber, PokemonType, cardType) VALUES ('Pidgeotto', 'BaseSet', '22/102', 'Colorless', 'Pokemon');
INSERT INTO BaseSet(cardName, setName, setNumber, PokemonType, cardType) VALUES ('Arcanine', 'BaseSet', '23/102', 'Fire', 'Pokemon');
INSERT INTO BaseSet(cardName, setName, setNumber, PokemonType, cardType) VALUES ('Charmeleon', 'BaseSet', '24/102', 'Fire', 'Pokemon');
INSERT INTO BaseSet(cardName, setName, setNumber, PokemonType, cardType) VALUES ('Dewgong', 'BaseSet', '25/102', 'Water', 'Pokemon');
INSERT INTO BaseSet(cardName, setName, setNumber, PokemonType, cardType) VALUES ('Dratini', 'BaseSet', '26/102', 'Colorless', 'Pokemon');
INSERT INTO BaseSet(cardName, setName, setNumber, PokemonType, cardType) VALUES ('Farfetchd', 'BaseSet', '27/102', 'Colorless', 'Pokemon');
INSERT INTO BaseSet(cardName, setName, setNumber, PokemonType, cardType) VALUES ('Growlithe', 'BaseSet', '28/102', 'Fire', 'Pokemon');
INSERT INTO BaseSet(cardName, setName, setNumber, PokemonType, cardType) VALUES ('Haunter', 'BaseSet', '29/102', 'Psychic', 'Pokemon');
INSERT INTO BaseSet(cardName, setName, setNumber, PokemonType, cardType) VALUES ('Ivysaur', 'BaseSet', '30/102', 'Grass', 'Pokemon');
INSERT INTO BaseSet(cardName, setName, setNumber, PokemonType, cardType) VALUES ('Jynx', 'BaseSet', '31/102', 'Psychic', 'Pokemon');
INSERT INTO BaseSet(cardName, setName, setNumber, PokemonType, cardType) VALUES ('Kadabra', 'BaseSet', '32/102', 'Psychic', 'Pokemon');
INSERT INTO BaseSet(cardName, setName, setNumber, PokemonType, cardType) VALUES ('Kakuna', 'BaseSet', '33/102', 'Grass', 'Pokemon');
INSERT INTO BaseSet(cardName, setName, setNumber, PokemonType, cardType) VALUES ('Machoke', 'BaseSet', '34/102', 'Fighting', 'Pokemon');
INSERT INTO BaseSet(cardName, setName, setNumber, PokemonType, cardType) VALUES ('Magikarp', 'BaseSet', '35/102', 'Water', 'Pokemon');
INSERT INTO BaseSet(cardName, setName, setNumber, PokemonType, cardType) VALUES ('Magmar', 'BaseSet', '36/102', 'Fire', 'Pokemon');
INSERT INTO BaseSet(cardName, setName, setNumber, PokemonType, cardType) VALUES ('Nidorino', 'BaseSet', '37/102', 'Grass', 'Pokemon');
INSERT INTO BaseSet(cardName, setName, setNumber, PokemonType, cardType) VALUES ('Poliwhirl', 'BaseSet', '38/102', 'Water', 'Pokemon');
INSERT INTO BaseSet(cardName, setName, setNumber, PokemonType, cardType) VALUES ('Porygon', 'BaseSet', '39/102', 'Colorless', 'Pokemon');
INSERT INTO BaseSet(cardName, setName, setNumber, PokemonType, cardType) VALUES ('Raticate', 'BaseSet', '40/102', 'Colorless', 'Pokemon');
INSERT INTO BaseSet(cardName, setName, setNumber, PokemonType, cardType) VALUES ('Seel', 'BaseSet', '41/102', 'Water', 'Pokemon');
INSERT INTO BaseSet(cardName, setName, setNumber, PokemonType, cardType) VALUES ('Wartortle', 'BaseSet', '42/102', 'Water', 'Pokemon');
INSERT INTO BaseSet(cardName, setName, setNumber, PokemonType, cardType) VALUES ('Abra', 'BaseSet', '43/102', 'Psychic', 'Pokemon');
INSERT INTO BaseSet(cardName, setName, setNumber, PokemonType, cardType) VALUES ('Bulbasaur', 'BaseSet', '44/102', 'Grass', 'Pokemon');
INSERT INTO BaseSet(cardName, setName, setNumber, PokemonType, cardType) VALUES ('Caterpie', 'BaseSet', '45/102', 'Grass', 'Pokemon');
INSERT INTO BaseSet(cardName, setName, setNumber, PokemonType, cardType) VALUES ('Charmander', 'BaseSet', '46/102', 'Fire', 'Pokemon');
INSERT INTO BaseSet(cardName, setName, setNumber, PokemonType, cardType) VALUES ('Diglett', 'BaseSet', '47/102', 'Fighting', 'Pokemon');
INSERT INTO BaseSet(cardName, setName, setNumber, PokemonType, cardType) VALUES ('Doduo', 'BaseSet', '48/102', 'Colorless', 'Pokemon');
INSERT INTO BaseSet(cardName, setName, setNumber, PokemonType, cardType) VALUES ('Ghastly', 'BaseSet', '50/102', 'Psychic', 'Pokemon');
INSERT INTO BaseSet(cardName, setName, setNumber, PokemonType, cardType) VALUES ('Koffing', 'BaseSet', '51/102', 'Grass', 'Pokemon');
INSERT INTO BaseSet(cardName, setName, setNumber, PokemonType, cardType) VALUES ('Machop', 'BaseSet', '52/102', 'Fighting', 'Pokemon');
INSERT INTO BaseSet(cardName, setName, setNumber, PokemonType, cardType) VALUES ('Magnemite', 'BaseSet', '53/102', 'Lightning', 'Pokemon');
INSERT INTO BaseSet(cardName, setName, setNumber, PokemonType, cardType) VALUES ('Metapod', 'BaseSet', '54/102', 'Grass', 'Pokemon');
INSERT INTO BaseSet(cardName, setName, setNumber, PokemonType, cardType) VALUES ('Nidoran (m)', 'BaseSet', '55/102', 'Grass', 'Pokemon');
INSERT INTO BaseSet(cardName, setName, setNumber, PokemonType, cardType) VALUES ('Onix', 'BaseSet', '56/102', 'Fighting', 'Pokemon');
INSERT INTO BaseSet(cardName, setName, setNumber, PokemonType, cardType) VALUES ('Pidgey', 'BaseSet', '57/102', 'Colorless', 'Pokemon');
INSERT INTO BaseSet(cardName, setName, setNumber, PokemonType, cardType) VALUES ('Pikachu', 'BaseSet', '58/102', 'Lightning', 'Pokemon');
INSERT INTO BaseSet(cardName, setName, setNumber, PokemonType, cardType) VALUES ('Poliwag', 'BaseSet', '59/102', 'Water', 'Pokemon');
INSERT INTO BaseSet(cardName, setName, setNumber, PokemonType, cardType) VALUES ('Ponyta', 'BaseSet', '60/102', 'Fire', 'Pokemon');
INSERT INTO BaseSet(cardName, setName, setNumber, PokemonType, cardType) VALUES ('Rattata', 'BaseSet', '61/102', 'Colorless', 'Pokemon');
INSERT INTO BaseSet(cardName, setName, setNumber, PokemonType, cardType) VALUES ('Sandshrew', 'BaseSet', '62/102', 'Fighting', 'Pokemon');
INSERT INTO BaseSet(cardName, setName, setNumber, PokemonType, cardType) VALUES ('Squirtle', 'BaseSet', '63/102', 'Water', 'Pokemon');
INSERT INTO BaseSet(cardName, setName, setNumber, PokemonType, cardType) VALUES ('Starmie', 'BaseSet', '64/102', 'Water', 'Pokemon');
INSERT INTO BaseSet(cardName, setName, setNumber, PokemonType, cardType) VALUES ('Staryu', 'BaseSet', '65/102', 'Water', 'Pokemon');
INSERT INTO BaseSet(cardName, setName, setNumber, PokemonType, cardType) VALUES ('Tangela', 'BaseSet', '66/102', 'Grass', 'Pokemon');
INSERT INTO BaseSet(cardName, setName, setNumber, PokemonType, cardType) VALUES ('Voltorb', 'BaseSet', '67/102', 'Lightning', 'Pokemon');
INSERT INTO BaseSet(cardName, setName, setNumber, PokemonType, cardType) VALUES ('Vulpix', 'BaseSet', '68/102', 'Fire', 'Pokemon');
INSERT INTO BaseSet(cardName, setName, setNumber, PokemonType, cardType) VALUES ('Weedle', 'BaseSet', '69/102', 'Grass', 'Pokemon');

INSERT INTO BaseSet(cardName, setName, setNumber, PokemonType, cardType) VALUES ('Clefairy Doll', 'BaseSet', '70/102', 'Trainer', 'Trainer');
INSERT INTO BaseSet(cardName, setName, setNumber, PokemonType, cardType) VALUES ('Computer Search', 'BaseSet', '71/102', 'Trainer', 'Trainer');
INSERT INTO BaseSet(cardName, setName, setNumber, PokemonType, cardType) VALUES ('Devolution Spray', 'BaseSet', '72/102', 'Trainer', 'Trainer');
INSERT INTO BaseSet(cardName, setName, setNumber, PokemonType, cardType) VALUES ('Imposter Professor Oak', 'BaseSet', '73/102', 'Trainer', 'Trainer');
INSERT INTO BaseSet(cardName, setName, setNumber, PokemonType, cardType) VALUES ('Item Finder', 'BaseSet', '74/102', 'Trainer', 'Trainer');
INSERT INTO BaseSet(cardName, setName, setNumber, PokemonType, cardType) VALUES ('Lass', 'BaseSet', '75/102', 'Trainer', 'Trainer');
INSERT INTO BaseSet(cardName, setName, setNumber, PokemonType, cardType) VALUES ('Pokémon Breeder', 'BaseSet', '76/102', 'Trainer', 'Trainer');
INSERT INTO BaseSet(cardName, setName, setNumber, PokemonType, cardType) VALUES ('Pokémon Trader', 'BaseSet', '77/102', 'Trainer', 'Trainer');
INSERT INTO BaseSet(cardName, setName, setNumber, PokemonType, cardType) VALUES ('Scoop Up', 'BaseSet', '78/102', 'Trainer', 'Trainer');
INSERT INTO BaseSet(cardName, setName, setNumber, PokemonType, cardType) VALUES ('Super Energy Removal', 'BaseSet', '79/102', 'Trainer', 'Trainer');
INSERT INTO BaseSet(cardName, setName, setNumber, PokemonType, cardType) VALUES ('Defender', 'BaseSet', '80/102', 'Trainer', 'Trainer');
INSERT INTO BaseSet(cardName, setName, setNumber, PokemonType, cardType) VALUES ('Energy Retrieval', 'BaseSet', '81/102', 'Trainer', 'Trainer');
INSERT INTO BaseSet(cardName, setName, setNumber, PokemonType, cardType) VALUES ('Full Heal', 'BaseSet', '82/102', 'Trainer', 'Trainer');
INSERT INTO BaseSet(cardName, setName, setNumber, PokemonType, cardType) VALUES ('Maintenance', 'BaseSet', '83/102', 'Trainer', 'Trainer');
INSERT INTO BaseSet(cardName, setName, setNumber, PokemonType, cardType) VALUES ('PlusPower', 'BaseSet', '84/102', 'Trainer', 'Trainer');
INSERT INTO BaseSet(cardName, setName, setNumber, PokemonType, cardType) VALUES ('Pokémon Center', 'BaseSet', '85/102', 'Trainer', 'Trainer');
INSERT INTO BaseSet(cardName, setName, setNumber, PokemonType, cardType) VALUES ('Pokémon Flute', 'BaseSet', '86/102', 'Trainer', 'Trainer');
INSERT INTO BaseSet(cardName, setName, setNumber, PokemonType, cardType) VALUES ('Pokédex', 'BaseSet', '87/102', 'Trainer', 'Trainer');
INSERT INTO BaseSet(cardName, setName, setNumber, PokemonType, cardType) VALUES ('Professor Oak', 'BaseSet', '88/102', 'Trainer', 'Trainer');
INSERT INTO BaseSet(cardName, setName, setNumber, PokemonType, cardType) VALUES ('Revive', 'BaseSet', '89/102', 'Trainer', 'Trainer');
INSERT INTO BaseSet(cardName, setName, setNumber, PokemonType, cardType) VALUES ('Super Potion', 'BaseSet', '90/102', 'Trainer', 'Trainer');
INSERT INTO BaseSet(cardName, setName, setNumber, PokemonType, cardType) VALUES ('Bill', 'BaseSet', '91/102', 'Trainer', 'Trainer');
INSERT INTO BaseSet(cardName, setName, setNumber, PokemonType, cardType) VALUES ('Energy Removal', 'BaseSet', '92/102', 'Trainer', 'Trainer');
INSERT INTO BaseSet(cardName, setName, setNumber, PokemonType, cardType) VALUES ('Gust of Wind', 'BaseSet', '93/102', 'Trainer', 'Trainer');
INSERT INTO BaseSet(cardName, setName, setNumber, PokemonType, cardType) VALUES ('Potion', 'BaseSet', '94/102', 'Trainer', 'Trainer');
INSERT INTO BaseSet(cardName, setName, setNumber, PokemonType, cardType) VALUES ('Switch', 'BaseSet', '95/102', 'Trainer', 'Trainer');

INSERT INTO BaseSet(cardName, setName, setNumber, PokemonType, cardType) VALUES ('Double Colorless Energy', 'BaseSet', '96/102', 'Colorless', 'Energy');
INSERT INTO BaseSet(cardName, setName, setNumber, PokemonType, cardType) VALUES ('Fighting Energy', 'BaseSet', '97/102', 'Fighting', 'Energy');
INSERT INTO BaseSet(cardName, setName, setNumber, PokemonType, cardType) VALUES ('Fire Energy', 'BaseSet', '98/102', 'Fire', 'Energy');
INSERT INTO BaseSet(cardName, setName, setNumber, PokemonType, cardType) VALUES ('Grass Energy', 'BaseSet', '99/102', 'Grass', 'Energy');
INSERT INTO BaseSet(cardName, setName, setNumber, PokemonType, cardType) VALUES ('Lightning Energy', 'BaseSet', '100/102', 'Lightning', 'Energy');
INSERT INTO BaseSet(cardName, setName, setNumber, PokemonType, cardType) VALUES ('Psychic Energy', 'BaseSet', '101/102', 'Psychic', 'Energy');
INSERT INTO BaseSet(cardName, setName, setNumber, PokemonType, cardType) VALUES ('Water Energy', 'BaseSet', '102/102', 'Water', 'Energy');