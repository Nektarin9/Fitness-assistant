const express = require("express");

const router = express.Router({ mergeParams: true });

router.use("/exercises", require("./exercises"));
router.use("/clients", require("./clients"));
router.use("/clients-training", require("./clients-training"));


module.exports = router;