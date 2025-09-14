const express = require("express");
const router = express.Router();


//Posts
//Index Route
router.get('/',(req,res)=>{
    res.send("Get for posts")
});

//Show Route
router.get('/:id',(req,res)=>{
    res.send("Get for post id")
});

//Post Route
router.post('/new',(req,res)=>{
    res.send("Post for posts")
});

//Delete Route
router.get('/:id',(req,res)=>{
    res.send("Delete for post id")
});

module.exports = router;