const express = require("express");
const router = express.Router();


//Users
//Index Route
router.get('/',(req,res)=>{
    res.send("Get for users")
});

//Show Route
router.get('/:id',(req,res)=>{
    res.send("Get for user id")
});

//Post Route
router.post('/new',(req,res)=>{
    res.send("Post for users")
});

//Delete Route
router.get('/:id',(req,res)=>{
    res.send("Delete for user id")
});

module.exports = router;