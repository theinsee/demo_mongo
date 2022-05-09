const Model = require("../models/demoModel")
// step 2 copy fileนี้ เปลี่ยนชื่อเป็นอะไรก็ได้ เช่น จาก demoController.js -> userController.js
//  ctrl F -> replace demo to อะไรก็ได้ เช่น จาก demo -> user แนะนำให้ตรงกับชื่อmodel
exports.getAllData = async (req,res,next) =>{
    try {
// =================================================
        const demo = await Model.find();
        res.status(200).json({
            status:'success',
            resual:demo.length,
            data:{demo}
        });
// =================================================
    } catch (e) {
        
        res.status(400).json({
            status:'fail',Error:e
        })
    }
}
exports.getOneData = async (req,res,next)=>{
    try {
// =================================================
        const demo = await Model.findById(req.params.id);
        res.status(200).json({
            status:'success',
            resual:demo.length,
            data:{demo}
        });
// =================================================
    } catch (e) {
        res.status(400).json({
            status:'fail',Error:e
        })
    }
}
exports.createData = async (req,res,next)=>{
    try {
// =================================================
        const demo = await Model.create(req.body);
        res.status(200).json({
            status:'success',
            // resual:demo.length,
            data:{demo}
        });
// =================================================
    } catch (e) {
        console.log(e);
        res.status(400).json({
            status:'fail',Error:e
        })
    }
}
exports.updateData = async (req,res,next)=>{
    try {
// =================================================
        const demo = await Model.findByIdAndUpdate(req.params.id,req.body,{
            new :true,runValidators:true
        });
        res.status(200).json({
            status:'success',
            // resual:demo.length,
            data:{demo}
        });
// =================================================
    } catch (e) {
        res.status(400).json({
            status:'fail',Error:e
        })
    }
}
exports.deleteData = async (req,res,next)=>{
    try {
// =================================================
        const demo = await Model.findByIdAndDelete(req.params.id);
        res.status(200).json({
            status:'success',
            // resual:demo.length,
            // data:{demo}
        });
// =================================================
    } catch (e) {
        res.status(400).json({
            status:'fail',Error:e
        })
    }
}