import express from "express";
//import { connect } from "mongoose";
import routes from "../shared/Routes/index.js";
const PORT = process.env.PORT || 5055;
const app = express();

//Defines the middleware being used
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//Gives up static pages from heroku
if(process.env.NODE_ENV === "production") {
    app.use(express.static("goobooks/build"));
}
//Use the apiRoutes specified in folder

app.use(routes);

//Connects to the MongoDB Cloud Cluster
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/goobooks");

app.listen(PORT, () => {
  console.log(`🙈  ==> API server now on port ${PORT}!`);
 

});