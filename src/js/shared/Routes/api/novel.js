const router = require("express").Router();
import {findAll, findbyId, create, update, remove} from "../../Controllers/novelControl.js";

router.route("/").get(findAll).post(create);

router
.route("/:id")
.get(findbyId)
.put(update)
.delete(remove);

export default router