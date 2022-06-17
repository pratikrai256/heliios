const express = require('express')
var cors = require('cors');
const mongoose = require('mongoose')
const app = express();
// const mysql= require('mysql');
const port=4000

const dbUrl='mongodb+srv://pratikrai256:pr909763@cluster0.spa3m.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(dbUrl,{ 
    useNewUrlParser:true,
    useUnifiedTopology:true
},(err)=>{
    if(!err){
        console.log("DB connected successfully");
    }else{
        console.log("Db not connected,connection failed");
    }
})

const userRoutes= require('./routes/user');

//Body Parser Middleware
app.use(express.urlencoded({extended: true}))

//json Middleware
app.use(express.json());
app.use(cors());

//Router Level Middleware
app.use('/users',userRoutes);

//Error level Route
app.get('/error',(req, res)=>{
    res.status(500).send('something went wrong')
})

app.listen(port, ()=>{
    console.log(`The server is listening on port ${port}`);
})




















// const connection= mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: 'root',
//     database: 'helio'

// });
// connection.connect(function(error){
//     if (error) {
//         console.log('Error');
//     }else{
//         console.log('Connected');
//     }
// });

// app.get('/', function(req, res){
//     connection.query("select * from helios",function(err,rows,fields){
//         if (error) {
//             console.log('Error in the query');

//         }
//         else{
//             console.log('Query successful');
//         }
//     });
// })
