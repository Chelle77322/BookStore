import express from "express";
import{findAll, findbyId, findOneAndUpdate, create,remove } from "../../js/shared/Controllers/novelControl.js";
const router = express.Router();
router.route("/").get(findAll).post(create)

router.route("/:id")
.get(findbyId)
.put(findOneAndUpdate)
.delete(remove)

export  default router