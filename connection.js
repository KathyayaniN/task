const mysql = require('mysql');

var con = mysql.createConnection({
    user:'root',
    password:'',
    database:'task',
    host:'localhost'
})

con.connect(function(err,res){
    if(err)
        console.log(err);
    console.log('Connected');
    // Create Table Script. 
   createTableScript();
})

function createTableScript() {
    let query = `CREATE IF NOT EXIST table mobiledata (name varchar(50), ram int,rom int, EMI boolean, rating float, battery int,
    replacable boolean, price int)`
}


