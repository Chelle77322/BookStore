import express, { urlencoded, json} from "express";
import { connect } from "mongoose";
import routes from "./routes";
const app = express();
const PORT = process.env.PORT || 1311;

// Define middleware here
app.use(urlencoded({ extended: true }));
app.use(json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(("/public/"));
}
// Add routes, both API and view
app.use(routes);
console.log(routes);

// Connect to the Mongo DB
connect(process.env.MONGODB_URI || "mongodb://localhost/goobooks");

// Start the API server
app.listen(PORT, function() {
  console.log(`🍍 🍍   ==> API Server now listening on PORT ${PORT}!🍍 🍍 `);
});
