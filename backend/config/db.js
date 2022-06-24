const mySql=require("mysql2")

const pool=mySql.createPool({
    host:"localhost",
    user:"root",
    database:"helio",
    password:"root"
})

module.exports=pool.promise()