const mongoose=require('mongoose')
const users=mongoose.model("users",{
    _id:mongoose.Schema.Types.ObjectId,
    username:{},
    password:{},
    contact_no:{type:Number},
    hostel_no:{type:Number},
    room_no:{type:Number}
})
module.exports=users
