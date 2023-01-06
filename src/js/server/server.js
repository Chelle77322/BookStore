import express from "express";
import logger from "morgan";
import compression from "compression";
//import connect  from "mongoose";
import routes from "../shared/Routes/index.js";
import mongoose from "mongoose";
const PORT = process.env.PORT || 5055;
const app = express();

//Defines the middleware being used
app.use(logger("dev"));
app.use(compression());
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//Gives up static pages from heroku
if(process.env.NODE_ENV === "production") {
    app.use(express.static(__dirname), "js/client/");
}
//Use the apiRoutes specified in folder

app.use(routes);

//Connects to the MongoDB Cloud Cluster
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/goobooks",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
);

app.listen(PORT, () => {
  console.log(`🙈  ==> API server now at http://localhost ${PORT}!`);
 

});