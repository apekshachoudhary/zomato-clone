import mongoose from 'mongoose';

const RestaurantSchema = new mongoose.Schema({
    name: {type: String, required: true},
    city: {type: String, required: true},
    address: {type: String, required: true},
    maplocation: {type: String, required: true},
    cuisine: [String],
    restaurantTimings: String,
    contactNumber: Number,
    Website: String,
    popularDishes: [String],
    averageCost: Number,
    amenties: [String],
    menuImages: {type: mongoose.Types.ObjectId, ref: "Images"},
    menu:{type: mongoose.Types.ObjectId, ref: "Menus"},
    reviews: {type: mongoose.Types.ObjectId, required: "Reviews"},
    photos: {type: mongoose.Types.ObjectId, ref: "Images"}
},
{
    timestemps: true
});

export const RestaurantModel = mongoose.model("Restaurants", RestaurantModel);