const mongoose = require("mongoose")
const carsSchema = mongoose.Schema({
car_type: String,
car_name: String,
model: String
})
module.exports = mongoose.model("cars",
carsSchema)
