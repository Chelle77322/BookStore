import express from express
const router = express.Router();
import {findAll, create,} from "../../js/shared/Controllers/novelControl.js"

router.route("/").get(findAll);
router.route("/:id").post(create)


export default router;
