
import novelRoutes from "./novel.js";
const router = require("express").Router();
//This gets the novel route
router.use("/novels", novelRoutes);
export default router;
