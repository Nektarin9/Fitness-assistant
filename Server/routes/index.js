const express = require("express");

const router = express.Router({ mergeParams: true });

router.use("/exercises", require("./exercises"));


module.exports = router;