const express = require("express")
// step 3 แก้ demoContoller เป็นชื่อ controller ที่สร้างก่อนหน้า
const postController = require("../controller/demoController")

const router = express.Router();

router.route("/")
    .get(postController.getAllPost)
    .post(postController.createPost)
;
router.route("/:id")
    .get(postController.getOnePost)
    .patch(postController.updatePost)
    .delete(postController.deletePost)
;
module.exports = router;