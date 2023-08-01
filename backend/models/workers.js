const mongoose=require('mongoose')
const workers=mongoose.model("workers",{
    _id:mongoose.Schema.Types.ObjectId,
    name:{},
    contact_no:{},
    profession:{},
    status:{},
    email:{}
})
module.exports=workers