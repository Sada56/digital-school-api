const mongoose=require('mongoose')

const Schema=mongoose.Schema 
const userSchena=new Schema({ 
    email:String ,
    password:String

}) 
module.exports=mongoose.model('user',userSchena, 'usersx')