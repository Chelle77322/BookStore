import { join } from "path";

import express from "express"
const router = express.Router();
import apiRoutes from "./api/index.js";


//Specifies the api routes used
router.use("./api", apiRoutes);
console.log("I am the " + router)


//If you don't get to any API routes send the default REACT App opening page instead
router.use(function(request, result){
    result.sendFile(join(__dirname, "/dist/index.html"));

});
export default router;