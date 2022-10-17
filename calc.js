const express=require("express");
const bodyParser=require("body-parser");
const app=express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(request,response){
      response.sendFile(__dirname+"/index.html");
});


app.post("/",function(request,response){
    
    var n1=Number(request.body.num1);
    var n2=Number(request.body.num2);
    var r=n1+n2;
    response.send("The result of addition of "+n1+" and "+n2+" is "+r);
    
});




app.listen(process.env.PORT || 3000,function(){
    console.log("server started at port 3000");
});