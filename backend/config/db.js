const mySql=require("mysql2")

const pool=mySql.createPool({
    host:"localhost",
    user:"root",
    database:"helios",
    password:"root"
})

module.exports=pool.promise()