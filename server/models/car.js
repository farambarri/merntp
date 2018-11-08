const mongoose = require("mongoose");
const { Schema } = mongoose;

const carSchema = new Schema({
  brand: { type: String, required: true },
  identification: { type: String, required: true },
  color: { type: String, required: true },
  price: { type: Number, required: true }
});

module.exports = mongoose.model("Car", carSchema);
