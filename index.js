// Use this workspace to submit your homework for Week 1: Assignment 2: Git + GitHub Basics

let myhttp = require('http');
let myserver = myhttp.createServer(
  function(myrequest, myresponse){
    console.log(myrequest.url);

    myresponse.writeHead(
      200, 
      {
        "Content-Type": "text/plain"
      }
    );
    myresponse.end(
      "Hello from beyond the wifi!"
    );
  }
);

myserver.listen(80, "0.0.0.0");