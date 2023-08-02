
const User = require('../models/user.schema.model.js')

exports.home = (req,res)=>{
 res.send('This is Home page')
}

exports.createUser = async (req,res)=>{
    try{
        const {name, email} = req.body

        if(!name || !email){
            throw new Error('Please Enter name and email')
        }
      const userExist = await User.findOne({email})
      if(userExist){
        throw new Error('User already exists')
      }
      const user = await User.create({name,email})
      res.status(201).json({
        success: true,
        message: 'User created Successfully',
        user
      })
    }
    catch(error){
        console.log(error);
        res.status(400).json({
            success:false,
            message:error.message
        })
    }
}
exports.getUsers = async (req,res) => {                   
    try{

      const users = await User.find({})
      res.status(200).json({
        success: true,
        users
      })
    }
    catch(error){
      console.log(error)
             res.status(400).json({
                      success:false,
                      message:error.message
                                  })
    }
}
exports.deleteUsers = async (req,res) =>{
 try
 { 
  const userId = req.params.id;
  const user = await User.findByIdAndDelete(userId)
   res.status(200).json({
    success: true,
    message: "Deleted sucessfully",
    })
  }
  catch(error){
    console.log(error);
    res.status(400).json({
      success: false,
      message: error.message
    })
 }
}
