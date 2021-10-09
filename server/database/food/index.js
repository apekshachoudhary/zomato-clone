import mongoose, { mongo } from 'mongoose';

const FoodSchema = new mongoose.Schema({
    name: {type: String, require: true},
    description: {type: String, require: true},
    isVeg: {type: Boolean, require: true},
    isContainsEgg: {type: Boolean, require: true},
    category: {type: String, require: true},
    photos: {
        type: mongoose.Types.ObjectId,
        ref: "Images"
    },
    price: {type: Number, default: 150, require: true},
    addOns: [
        {
            type: mongoose.Types.ObjectId,
            ref: "Foods"
        }
    ],
    restaurants: {
        type: mongoose.Types.ObjectId,
        ref: "Restaurants",
        require: true
    }
},{
    timestamps: true
});

export const FoodModel = mongoose.model("Foods", FoodSchema);