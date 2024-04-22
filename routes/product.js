const express = require('express')

const router = express.Router();
const Product = require('../models/product')
const multer = require('multer')

filename = '';

const mystorage = multer.diskStorage({
    destination :'./uploads',
    filename : (req,file,redirect)=>{
        let date = file.originalname;
        let fl = date
        redirect (null , fl);
        filename = file.mimetype;
    }
});

const upload = multer({storage : mystorage})


router.get('/products', async (req, res) => {
    try {
        const products = await Product.find();
        console.log(products)
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json("Failed to get products");
    }
});

router.post('/createProd',upload.any('image'),async (req,res)=>{
    try{
        data = req.body;
        prd = new Product(data);
        prd.Image = filename;
        
        savedUser =await prd.save();
        
        res.send(savedUser);
    }catch(error){
        res.send(error)
    }
})
module.exports = router;