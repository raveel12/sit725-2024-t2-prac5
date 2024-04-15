var express = require("express") 
var app = express()
const router= require("/Uni/SIT725/week5/routers/router");
var port = process.env.port || 3000;


app.use(express.static(__dirname+'/public'))
app.use(express.json());
app.use(express.urlencoded({extended: false}));


app.use("/api",router);


 app.listen(port,()=>{
 console.log("App listening to: "+port)
 })