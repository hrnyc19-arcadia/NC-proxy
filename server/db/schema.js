const goose = require('mongoose');
const Schema = require('mongoose').Schema;

const listingSchema = new Schema({
    // _id: Object,          //in case the user updates it it has to be provided to the client
    listing_id: Number,
    listing_type: String,
    listing_title: String,
    listing_location: String,
    listing_features: {
        guests: Number,
        bedrooms: Number,
        beds: Number,
        baths: Number
    },
    listing_host: String
});

module.exports = goose.model('flairbnb_listings', listingSchema);