const express = require('express');
const router = express.Router();

const animal_controller = require("../backend/controller");

// /animals/get
router.get("/get", animal_controller.get);

router.post("/post", animal_controller.post);

router.put("/put/:animalId", animal_controller.put);

router.delete("/delete/:animalId", animal_controller.delete);

// used in index.js
module.exports = router;