const express = require("express");
const app = express();

const pool = require("./sql/connection");

const PORT = process.env.PORT || 5000


// 
app.get('/', (req, res) => {
    res.send("Hello Turkey")
})


// 
app.get('/users', (req, res) => {
    pool.query("SELECT * FROM users", function(err, rows, fields){
        console.log(rows);
    });
})

app.listen(PORT, () => console.log(`We are listening @ http://localhost:${PORT}`));


