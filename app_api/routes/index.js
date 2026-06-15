var express = require('express');
var router = express.Router();

const ctrlTrips = require('../controllers/trips');

router
    .route('/trips')
    .get(ctrlTrips.tripsList)
    .post(ctrlTrips.tripsAddTrip);

router
    .route('/trips/:tripCode')
    .get(ctrlTrips.tripsFindByCode);

router
    .route('/trips/:tripId')
    .put(ctrlTrips.tripsUpdateTrip)
    .delete(ctrlTrips.tripsDeleteTrip);

module.exports = router;