// app.get('/news', (req, res) => {
//     res.render('new.ejs');
// });
const express = require('express');
const router = express.Router();

const newsmodel= require('../models/newSchema');
const upload = require('../middlewares/upload');

//query avaliable: latest, category, limit
router.get('/', async (req, res) => {

    // const latest = req.query.latest || false;
    // const category = req.query.category;
    // const limit = +req.query.limit || 25;
    let news = await newsmodel.find();
    res.render("new",{news})


    

});
router.get('/:id', async (req, res) => {

    // const latest = req.query.latest || false;
    // const category = req.query.category;
    // const limit = +req.query.limit || 25;
    let news = await newsmodel.find({_id:req.params.id})
    res.render("new", {news})


    

});

//upload.single('urlToImage')
router.post('/', async(req, res) => { 

    try{
        const news = await newsmodel.create(req.body);

        return res.status(201).send(news);

    } catch(err){
       return res.status(500).send({messagee: err.message, status: 'failed'});
    }

});


module.exports = router;