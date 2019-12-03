const express = require("express");
const serverlessHttp = require("serverless-http");
const cors = require("cors");
const bodyParser = require("body-parser");
const mysql = require("mysql");

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: "market_list"
});

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get("/products", function (req, res){
  connection.query("SELECT * FROM products", function(err, data){
    if(err){
      console.log("Error fetching products", err);
      res.status(500).json({error: er});    
      } else {
        res.json({products: data});
      }
  });
});
app.post("/products", function (req, res){
    const product = req.body; 
    var sql = "INSERT INTO products (item_name, quantity, date, due_date, completed, user_id) VALUES ?";
  connection.query(sql, [product.item_name, product.quantity, product.date ,product.due_date, product.completed, product.user_id], function (err, data){
    if(err){
      res.status(500).json({error: err});
    }else{
      res.status(205).json({task: data});
    }
  });
  
});
app.delete("/products/:item_id", function (req, res){
  const item_id = req.params.item_id;
  connection.query("DELETE from products WHERE item_id = ?", [item_id], function (err, data){
    if(err){
      res.status(500).json({error: err});
    }else{
      res.sendStatus(200)
    }
  }); 
});
app.put("/products/:item_id", function (req, res) {
  const item_id = req.params.item_id;
  const product = req.body;
  const sql = "UPDATE products SET item_name = ?, quantity = ?, date = ?, due_date = ?, completed = ?, user_id = ? WHERE item_id = ?";
  // var values = [product.item_name, product.quantity, product.date ,product.due_date, product.completed, product.user_id, item_id];
  connection.query(sql, [product.item_name, product.quantity, product.date ,product.due_date, product.completed, product.user_id, item_id], function (err, data){
    if (err){
      res.status(500).json({error: err});
    }else{
      res.status(205).json({task: data});
    }
  });
 
});

module.exports.products = serverlessHttp(app); 
