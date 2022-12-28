const router = require ("express").Router();
import { findAll, create } from "../../controllers/novelControl";
//Gets and matches all books
router.route("/").get(findAll)
//**THIS MAY BE CAUSING ISSUES */

//post(novelControl.create);

//Gets and matches books based on id
router.route("/:id").post(create)
//**ALSO ISSUES */
//.get(novelControl.findById).put(novelControl.update).delete(novelControl.remove);

export default router;