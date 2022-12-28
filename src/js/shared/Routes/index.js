import { join } from "path";

import apiRoutes from "./api";
const router = require("express").Router();

//Specifies the api routes used
router.use("/api", apiRoutes);

//If you don't get to any API routes send the default REACT App opening page instead
router.use(function(request, result){
    result.sendFile(join(__dirname, "/dist/index.html"));
});
export default router;