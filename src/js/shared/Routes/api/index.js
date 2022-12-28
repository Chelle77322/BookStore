const router = require("express").Router();
const novelRoutes = require("./novel.js");

//This gets the novel route
router.use("/novels", novelRoutes);
module.exports = router;
