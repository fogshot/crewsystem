var faker = require('faker');

var database = { ships: []};

for (var i = 1; i<= 300; i++) {
  database.ships.push({
    id: i,
    name: faker.commerce.productName(), // TODO find better name list for ships
  });
}

console.log(JSON.stringify(database));
