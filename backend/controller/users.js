const express = require('express');
const user= require('../models/user')
//Reading Users Details
const getAllUsers=async(req, res, next) => {
    try {
       const users= await user.find().lean();
       res.json({
           error:false,
           messages:"",
           data: users
       })
    }catch(err) {
        next(err)
    }
}
//Adding User Details

const addUser=async(req, res, next) => {
    try {
        let{name,age,email,contact,salary}=req.body
        await user.insertMany([{
            name,age,email,contact,salary
        }])
        res.json({
            error:false,
            messages:"User has been added successfully",
            data: null
        })

     }catch(err) {
         next(err)
     }
 }
//Editing User Details

 const editUser=async(req, res, next) => {
    try {
        let{_id,name,age,email,contact,salary}=req.body;
        await user.updateOne(
            { _id},
            {$set:{name,age,email,contact,salary}
        }
        )
        res.json({
            error:false,
            messages:"User has been updated successfully",
            data: null
        })

     }catch(err) {
         next(err)
     }
 }

 //Deleting User Details

 const deleteUser=async(req, res, next) => {
    let _id=req.params._id;
    try {
        await user.deleteOne(
            { _id}
        
        )
        console.log(_id);
        res.json({
            error:false,
            messages:"User has been deleted successfully",
            data: null
        })

     }catch(err) {
         next(err)
     }
 }
module.exports={
    getAllUsers,
    addUser,
    editUser,
    deleteUser
}