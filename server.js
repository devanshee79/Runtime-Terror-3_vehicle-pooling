const http = require("http");
const fs = require("fs");

console.log("server is listening");
const server = http.createServer((req,res) => {
    console.log(req.url,req.method);


    //set header content type
    res.setHeader('Content-type','text/html');

    //send an html file
    fs.readFile('./vehiclepooling.html',(err,data) => {
        if(err){
            console.log(err);
            res.end();
        }
        else{
            res.write(data);
            res.end();
        }












        
    })

})



server.listen(3000,'localhost', () =>{

    console.log('listening for the request on the port 3000');
})