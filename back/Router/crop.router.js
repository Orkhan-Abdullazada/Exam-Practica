const express=require("express")
const router=express.Router()

const {ProductsController}=require("../Controller/crop.controller")

router.get("/",ProductsController.getAll)
router.get("/:id",ProductsController.getById)
router.post("/",ProductsController.Post)
router.put("/:id",ProductsController.Edit)
router.delete("/:id",ProductsController.delete)

module.exports =router