// This Willbe chage the github

const Signup = require('../models/Signup');

const signup = async (req, res) => {
  try {
    const { email, password } = req.body;

    

    const newSignup = new Signup({ email, password });
    await newSignup.save();

    res.status(200).json({ message: 'User signed up successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error while signing up' });
  }
}
const getAllusers=async(req,res)=>{
    try{
        const users=await Signup.find();
        res.status(200).json(users)
    }
    catch(erroe){
        res.status(500).json({ message: 'sercinhg go wornd' },error);
    }
}
const getuserbyid=async(req,res)=>{
  const {id} =req.params;
  try{
    const user=await Signup.findById(id);
    if(!user){
      return res.status(404).json({message:'internmet error'})

    }
    res.status(200).json(user)
     }catch{
      res.status(500).json({message:'internal error'})
     }
  }
const updateuser=async(req,res)=>{
  const {id}=req.params;
  const{email,password}=req.body;
  try{
    const userupdate=await Signup.findByIdAndUpdate(id,{email,password}, {new:true})
    if(!userupdate){
      return res.status(404).json({message:'internmet error'})
  
    }
    res.status(200).json({message:'user update successfully',user:userupdate})
  }catch(error){
    res.status(500).json({message:'internal server error'})
  }
  
}
const deleteuser=async(req,res)=>{
  const{id}=req.params;
  try{
    const deleteuser=await Signup.findByIdAndDelete(id)
    if(!userupdate){
      return res.status(404).json({message:'internmet error'})
  
    }
    res.status(200).json({message:'user dleted successfully'})
  }catch(error){
      res.status(500).json({message:'user delted successfuuly'})
  }
}
module.exports = { signup,getAllusers,getuserbyid, updateuser,deleteuser };
