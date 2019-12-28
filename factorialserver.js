var http=require('http');
var fs=require('fs');

var url=require('url');
var query=require('querystring');
var factmodule=require('./factmodule');


http.createServer(function(req,res)
{
    var d=url.parse(req.url);
    console.log(d);
   switch(d.pathname)
   {
       case "/":
    res.writeHead(200,{'Content-Type':'text/html'});

    fs.readFile("factorial.html",function(error,data)
    {
        if(error)
        {
            console.log("Error In file..");
        }else
        {
            console.log("Sending File");
            res.end(data);
        }
    });
    break;

    case "/factorial":
        res.writeHead(200,{'Content-Type':'text/html'});
        data=query.parse(d.query);
        res.write("<h1>Your Number::"+data.num1+"</h1><br>");
        res.end("<h1 style='color:red'>Factorial Of Your Number is="+factmodule.factorial(data.num1)+"</h1><br>");

        default:
            res.writeHead(200,{'Content-Type':'text/html'});
            res.end("<h1>page not found</h1>");
         break;
   }
    }).listen(8081);
