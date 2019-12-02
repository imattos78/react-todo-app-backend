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
      res.status(500).json({
        error: er
      });    
      } else {
        res.json({
          products: data
        });
      }
  });
});
module.exports.products = serverlessHttp(app); 
