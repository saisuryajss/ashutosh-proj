const express=require('express')
const app=express()
const dotenv = require("dotenv").config()
const nodemailer=require('nodemailer')
const path=require('path')
const bodyParser=require('body-parser')
const cors=require('cors')
app.use(cors());
const users=require('./models/user')
app.use(bodyParser());
const workers=require('./models/workers')
app.use(express.json())
app.use(express.static(path.join(__dirname, '..', 'frontend',"dist","frontend")));
const mongoose=require('mongoose')
mongoose.set({strictQuery:false})
mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser: true,
   
    useUnifiedTopology: true
})
.then(()=>{
    console.log("connection successfull")
})
.catch(err=>{
    console.log(err)
})

app.post('/api',(req,res)=>{
    let flag=false
    
    users.findOne(req.body)
    .then((data)=>{
        if(data){
            console.log(data,"dataaaaaa")
           flag=true
           res.send({true:true,true:true})
        }
        else{
            res.send({false:false})
        }

        
    })
    .catch(err=>{
        console.log(err)
    })
    
})
app.post('/api/data',(req,res)=>{
    console.log("inside post creation")
    let data={
        _id:new mongoose.Types.ObjectId(),
        username:req.body.username,
        password:req.body.password,
        room_no:req.body.room,
        contact_no:req.body.contact,
        hostel_no:req.body.hostel,

    }
    let instanc=new users(data)
    instanc.save().then((data)=>{
        console.log(data?"created":"error")
    })
    .catch(()=>{
        console.log("error in creating an user")
    })
    res.send({message:"done"})
})
app.get('/api/profile/:username',(req,res)=>{
    users.findOne({username:req.params.username}).then(data=>{
        if(data){
            console.log(data,"profile")
            res.send(data)
        }
        else{
            res.send({error:error})
        }
    })
    .catch(err=>{
        console.log(err)
        res.send({error:err})
    })
})
app.post('/api/worker/:profession',(req,res)=>{
    let hostel_no=0;
    let room_no=0;
    let contact_no=0;

    console.log(req.params.profession)
    workers.findOne({profession:req.params.profession})
    .then(data=>{
        if(data){
            console.log(req.body.complaint)      
            var transporter=nodemailer.createTransport({
                service:'gmail',
                auth:{
                    user:'',
                    pass:''
                }
            })
            users.findOne({username:req.body.username}).then(dat=>{
                if(dat){
                    console.log(dat,"data found")
                    console.log("complaint",req.body.complaint)
                    hostel_no=dat.hostel_no;
                    contact_no=dat.contact_no;
                    room_no=dat.room_no;
                    const mail={
                        from:'Repair Notice<sanju.koli2500@gmail.com>',
                        to:data.email,
                        subject:'Repair',
                        text:req.body.complaint,
                        html:'<p style="font-weight:bold">complaint raised:&nbsp;<span style="font-style:italic;font-weight:normal">'+req.body.complaint+'</span></p><p style="font-weight:bold"><u>Details</u>:</p><table><tr><tc>hostel_no:</tc><tc>'+hostel_no+'</tc><tr></tr><tc>room_no:</tc><tc>'+room_no+'</tc></tr><tr><tc>contact_no:</tc><tc>'+contact_no+'</tc><tr></table>',
                        
                    }
                    transporter.sendMail(mail,(error,info)=>{
                        
                            console.log(error?error:info)
                        
                    })
                }
            })
      
            res.send({'true':{name:data.name,
            contact_no:data.contact_no}})
            
        }
        else{
            res.send({'false':false})
        }
    })
    .catch(err=>{
        if(err){
            console.log(err)
            res.send({'err':false})
        }
    })
})

app.get('/*',(req,res)=>{
    console.log("inside get ")
    res.sendFile(path.join(__dirname, '..', 'frontend',"dist","frontend","index.html"));
})
app.listen(3000,(err)=>{
    console.log(err?"error in port":"port activated")
})