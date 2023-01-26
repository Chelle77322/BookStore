
import novelRoutes from "./novel.js";
import express from "express"
const router = express.Router();
//This gets the novel route

router.use("/", novelRoutes);


export default router;
