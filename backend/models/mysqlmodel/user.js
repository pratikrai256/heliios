const pool=require("../../config/db")

class User{
    constructor(name,age,email,contact,salary){
        this.name=name;
        this.age=age;
        this.email=email;
        this.contact=contact;
        this.salary=salary;
   
    }
    static getAllUsersData(){
        return pool.execute("SELECT * FROM helios")

    }
    insertUsersData(){
        let sql= `INSERT INTO helios(
            name,
            age,
            email,
            contact,
            salary)
            values(
                '${this.name}',
                '${this.age}',
                '${this.email}',
               '${this.contact}',
                '${this.salary}')`
        return pool.execute(sql)
    }
    editUsersData(id){
        let sql=`UPDATE helios SET 
        name='${this.name}',
        age='${this.age}',
        email='${this.email}',
        contact='${this.contact}',
        salary='${this.salary}'
        WHERE id='${id}'`
        return pool.execute(sql)
    }

   static deletUser(id){
    console.log(id,"modals");
        let sql=`DELETE FROM helios WHERE id='${id}' `
        return pool.execute(sql)
    }

}
module.exports=User