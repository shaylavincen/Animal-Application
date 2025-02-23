const mongoose = require("mongoose");


// Defining a schema
const Schema = mongoose.Schema;

const AnimalSchema = new Schema({
    name: { type: String, required: true, index: true },
    age: { type: Number, required: true, index: true },
    sex: { type: String, required: true, index: true },
    breed: { type: String, required: true, index: true }
});


module.exports = mongoose.model("Animal", AnimalSchema);