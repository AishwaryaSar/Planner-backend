const mongoose = require("mongoose");

const PlannerSchema = new mongoose.Schema({
    title : String,
    completed : Boolean
});

module.exports = mongoose.model("Planner",PlannerSchema);