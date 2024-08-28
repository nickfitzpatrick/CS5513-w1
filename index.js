// Use this workspace to submit your homework for Week 1: Assignment 2: Git + GitHub Basics

let myhttp = require('http');
let myserver = myhttp.createServer(
  function(myrequest, myresponse){
    console.log(myrequest.url);

    let myresponsetext;
    if (myrequest.url === "/hey"){
      myresponsetext = "Hello to you from beyond the wifi!";
    }
    else {
      myresponsetext = "What, no hello?";
    }

    myresponse.writeHead(
      200, 
      {
        "Content-Type": "text/plain"
      }
    );
    myresponse.end(
      myresponsetext
    );
  }
);

myserver.listen(80, "0.0.0.0");

//test - (github does not appear to be updating to the latest version, so I'm writing this comment to push it)