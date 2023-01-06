import { join } from "path";

import novelRoutes from "./api/index.js";
const router = require("express").Router();

//Specifies the api routes used
router.use("/api", novelRoutes);
console.log(novelRoutes);

//If you don't get to any API routes send the default REACT App opening page instead
router.use(function(request, result){
    result.sendFile(join(__dirname, "/dist/index.html"));
});
export default router;