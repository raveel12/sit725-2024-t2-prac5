var express = require("express"); 
const CatController= require("/Uni/SIT725/week5/controllers/controller");

const router= express.Router();

router.get("/cats",CatController.getAllCats);
router.post("/cats",CatController.addCat);

module.exports= router;