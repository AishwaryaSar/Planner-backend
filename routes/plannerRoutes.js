const router = require("express").Router();
const Planner = require("../data models/Planner"); 

router.get("/",(req,res)=>{
    Planner.find()
    .then((data)=>{
        res.json(data);
    })
    .catch((error)=>{
        console.error(error);
        res.status(500).json({error:'An error occured'});
    });
});

router.post("/",(req,res)=>{
    Planner.create(req.body)
    .then((data) => {
        res.json(data);
    })
    .catch((error)=>{
        console.error(error);
        res.status(500).json({error:'An error occured'});
    })
})

router.put("/:id",(req,res)=>{
    Planner.findOneAndUpdate({_id:req.params.id},req.body,{ returnOriginal:false })
    .then((data) => {
        res.json(data);
    })
    .catch((error)=>{
        console.error(error);
        res.status(500).json({error:'An error occured'});
    })
})
router.delete("/:id",(req,res)=>{
    Planner.findOneAndRemove({_id:req.params.id})
    .then((data) => {
        res.end();
    })
    .catch((error)=>{
        console.error(error);
        res.status(500).json({error:'An error occured'});
    })
})
module.exports = router;