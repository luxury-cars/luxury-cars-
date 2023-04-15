const mysql = require('mysql2');
const config = {
    host: 'localhost',
    user: 'root',
    password: 'admin', 
    database: 'vuecars'
  };

const connection = mysql.createConnection(config)
connection.connect((err)=>{
    if (err) {
        console.log(err)
    }
    else {
        console.log("db MYSQL connected")
    }
})

const getAllProducts = (callback) => {
    const sql='select * from cars'
   connection.query(sql,(err,results)=>{
    if(err) console.log(err)
    else callback(err,results)
   })
};
const postall=(callback,data) => {  
    const sql="INSERT INTO  `cars` SET ?"
   connection.query(sql,data,(err,results)=>{
    if(err) console.log(err)
    else callback(err,results)
   })
};
const deletone=(callback,id) => {
    const sql='DELETE FROM cars WHERE id= ?'
   connection.query(sql,id,(err,results)=>{
    if(err) console.log(err)
    else callback(err,results)
   })
};
const putone=(callback,data,id) => {
    console.log(data[0],'tgedata');
    const sql='UPDATE product SET ? WHERE id=?'
   connection.query(sql,[data[0],id],(err,results)=>{
    if(err) console.log(err)
    else callback(err,results)
   }) 
};

module.exports= { getAllProducts, postall,deletone,putone };