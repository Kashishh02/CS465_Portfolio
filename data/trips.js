const mongoose = require('mongoose');

require('../app_server/models/travlr');
require('../app_server/models/db');

const Trip = mongoose.model('trips');

const trips = [
{
    code: "BCN",
    name: "Barcelona",
    length: "6 days, 5 nights",
    start: "2026-06-12",
    resort: "Costa Brava",
    perPerson: "$1200",
    image: "barcelona.jpg",
    description: "Explore the beautiful beaches and culture of Barcelona."
},
{
    code: "LDN",
    name: "London",
    length: "5 days, 4 nights",
    start: "2026-07-01",
    resort: "The Savoy",
    perPerson: "$1500",
    image: "london.jpg",
    description: "Experience historic landmarks and modern attractions in London."
},
{
    code: "PAR",
    name: "Paris",
    length: "7 days, 6 nights",
    start: "2026-08-15",
    resort: "Paris Central Hotel",
    perPerson: "$1800",
    image: "paris.jpg",
    description: "Visit the Eiffel Tower and enjoy the charm of Paris."
}
];

Trip.insertMany(trips)
    .then(() => {
        console.log('Trips inserted successfully');
        mongoose.connection.close();
    })
    .catch(err => {
        console.log(err);
        mongoose.connection.close();
    });