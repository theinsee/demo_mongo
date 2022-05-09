const mongoose = require('mongoose'); // Erase if already required

const modelName = "demo";
// step 1 สร้างmodel 
// copy file demoModel.js เป็นอะไรก็ได้ เช่น userModel.js
// แก้ไขmodelName
// ออกแบบ database เป็นรูปแบบjson


// Declare the Schema of the Mongo model
// ตัวอย่าง
// const blogSchema = new Schema({
//     title:  String, // String is shorthand for {type: String}
//     author: String,
//     body:   String,
//     comments: [{ body: String, date: Date }],
//     date: { type: Date, default: Date.now },
//     hidden: Boolean,
//     meta: {
//       votes: Number,
//       favs:  Number
//     }
//   });


// ============================================================================
var Schema = new mongoose.Schema({
    // id	name	skin_use
    demo_id:{
        type:String,
        required:true,
        unique:true,
        index:true,
    },
    demo_feild_1:{
        type:String,
        required:true,
        default: Math.floor(Math.random() * 6) + 1
        // unique:true,
    },
    demo_feild_2:{
        type:String,
        required:true,
        default:0
    },
    
});


//Export the model
// เปลี่ยน demoเป็นคำอื่น
module.exports = mongoose.model(modelName, Schema);