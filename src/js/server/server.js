import express, {urlencoded, json} from "express";
import path from "path";
import logger from "morgan";
import {connect} from "mongoose";
import routes from "../../Routes/index.js";
import compression from "compression-webpack-plugin";

const PORt = process.env.PORT || 8080;

const app = express();
app.use(logger("dev"));
app.use(compression());
app.use(urlencoded({extended: true}));
app.use(json());

if(process.env.NODE_ENV === "production"){
  app.use(path("dist"));
}
app.use(routes);
console.log("This is the routes from the server " + routes);

connect(
  process.env.MONGODB_URI
|| "mongodb://localhost/goobooks",
{
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});
app.listen(PORt, () =>{
  console.log(`BookStore App is active at http://localhost:${PORt}`);
});
