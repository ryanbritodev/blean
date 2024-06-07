const mongoose = require("mongoose");

const analyticsSchema = mongoose.Schema({
  email: { type: String, required: true, unique: true },
  totalComponents: { type: String, required: true },
  percentualMicroplastic: {type: String, required: true},
  quantityTests: { type: String, required: true },
});

module.exports = mongoose.model("analytics", analyticsSchema);