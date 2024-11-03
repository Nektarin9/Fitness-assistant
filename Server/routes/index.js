const express = require("express");
const authenticated = require("../middlewares/authenticated")
const router = express.Router({ mergeParams: true });

router.use("/", require("./auth"));
//authenticated прописать нужно будет
router.use("/exercises",authenticated, require("./exercises"));
router.use("/clients",authenticated, require("./clients"));
router.use("/clients-training",authenticated, require("./clients-training"));


module.exports = router;