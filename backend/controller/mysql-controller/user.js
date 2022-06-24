const mySqlPool=require("../../config/db")
const userModel=require("../../models/mysqlmodel/user")


//Reading Users Details
const getAllUsers=async(req, res, next) => {
    try {
      const userData=await mySqlPool.execute("select * from helios")
       res.json({
           error:false,
           messages:"",
           data: userData[0]
       })
    }catch(err) {
        next(err)
    }
}
//Adding User Details

const addUser=async(req, res, next) => {
    try {
        let{name,age,email,contact,salary}= req.body;
        let pool=new userModel(name,age,email,contact,salary)
        const insert=await pool.insertUsersData()        
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
        let{id,name,age,email,contact,salary}=req.body;
        const pool=new userModel(name,age,email,contact,salary)
        await pool.editUsersData(id) 
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
    let id=req.params.id;
    console.log(id);
    try {
       await userModel.deletUser(id)
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