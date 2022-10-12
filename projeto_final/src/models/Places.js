import mongoose from 'mongoose';
const { Schema } = mongoose;

const PlacesSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    // type: {
    //     type: [string],
    //     required: false
    // },
    city: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    // distance: {
    //     type: String,
    //     required: true
    // },
    photos: {
        type: [String]
    },
    desc: {
        type: String,
        required: true
    },
    rating: {
        type: [Number],
        min: 0,
        max: 10
    },
    roomsNr: {
        type: Number
    },
    cheapestPrice: {
        type: Number,
    },
    featured: {
        type: Boolean
    }
});


export default mongoose.model("Places", PlacesSchema)