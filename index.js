const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const planRoute = require("./routes/plannerRoutes");
const PORT = 3030;

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1/plannerApp",
{
    useUnifiedTopology : true,
    useNewUrlParser : true
})
.then(db =>console.log("connected successfully"))
.catch(err =>console.error(err));

app.use("/planners",planRoute);

app.listen(PORT,()=>{
    console.log("The server is listening on port "+PORT);
})