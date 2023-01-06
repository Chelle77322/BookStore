
import novelRoutes from "./novel.js";
const router = require("express").Router();
//This gets the novel route
console.log("Here Is" + novelRoutes);
router.use("/novels", novelRoutes);
export default router;
