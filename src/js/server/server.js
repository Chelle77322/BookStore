import dotenv from "dotenv-webpack"
import express from "express";
import webpack from "webpack";
import middleware from "webpack-dev-middleware";
import logger from "morgan";
import compression from "compression";
//import connect  from "mongoose";
import router from "../../../src/Routes/index.js";
import mongoose from "mongoose";
const compiler = webpack({});


const PORT = process.env.PORT || 8080;
const app = express();
dotenv.config();

//Defines the middleware being used
app.use(express(compiler({})))
console.log(app);

//Gives up static pages from heroku
if(process.env.NODE_ENV === "production") {
    app.use(express.static(__dirname), "./client/App.jsx");
}
//Use the apiRoutes specified in folder
console.log(process.env.BOOKSTORE_API_KEY);

app.get("*", router);


//Connects to the MongoDB Cloud Cluster
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/goobooks"
  //{
    //useNewUrlParser: true,
    //useUnifiedTopology: true,
    //useCreateIndex: true,
    //useFindAndModify: false
  //}
);
console.log(`Does it get the database " + ${MONGODB_URI}`)

app.listen(PORT, () => {
  console.log(`🙈  ==> API server now at http://localhost ${PORT}!`);
 

});