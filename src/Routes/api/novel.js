import express from express
const router = express.Router();
import{findAll, findbyId, findOneAndUpdate, create,remove } from "../../js/shared/Controllers/novelControl.js";
router.route("/").get(findAll).post(create)

router.route("/:id")
.get(findbyId)
.put(findOneAndUpdate)
.delete(remove)

export  default router