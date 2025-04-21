import path from "path";
import novelRoutes from "./novel.js";
import express from "express"
const router = express.Router();
//This gets the novel route

router.use("./novel", novelRoutes);
router.use((result)=> {
    result.sendFile(path.join__dirname, "dist/index.html");
});

export default router;