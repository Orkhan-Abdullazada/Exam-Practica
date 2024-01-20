
const { Products } = require("../Models/crop.models")


const ProductsController = {
    getAll: async (req, res) => {

        try {
            const target = await Products.find()
            res.send(target)

        }
        catch (error) {
            res.send("item is nor found")
        }
    },
    getById: async (req, res) => {

        try {
            const { id } = req.params
            const product = await Products.findById(id)
            res.send(product)
        }
        catch (error) {
            res.send("item is nor found")
        }

    },
    Post: async (req, res) => {

        try {
            const {name,position,image}=req.body
            const NewProduct= new Products({name,position,image})
            await NewProduct.save()
            res.send("item created")

        }
        catch (error) {
            res.send("item is nor found")
        }
    },
    Edit: async (req, res) => {

        try {
            const {id}=req.params
            const {name,position,image}=req.body
            await Products.findByIdAndUpdate(id, {name,position,image})
            res.send("item update")

        }
        catch (error) {
            res.send("item is nor found")
        }
    },
    delete: async (req, res) => {

        try {
            const {id}=req.params
            await Products.findByIdAndDelete(id)
           res.send("item deleted")

        }
        catch (error) {
            res.send("item is nor found")
        }
    }





}
module.exports={ProductsController}