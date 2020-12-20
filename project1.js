var readlineSync = require("readline-sync");

var score=0;

var userName =readlineSync.question("What's your name?");


console.log("Welcome " + userName + " to DO YOU KNOW Samarth!!");

// play function
// basically a mini program and all the processing is done here

function play(question,answer){
  var userAnswer = readlineSync.question(question);

  if (userAnswer=== answer){
    console.log("Right!");
    score=score+1 ;
    
  }
  else{
    console.log("Wrong!");
    
  }

  console.log("Current Score: ", score);
  console.log("------------")
}

// array of objects
var questions = [{
  question : "Q1) Where do I live? ",
  answer : "Nagpur"
}, {
  question : "Q2) My favourite superhero is ? " ,
  answer : "Batman"
},{
  question : "Q3) Where do i study ? " ,
  answer : "Ghriit"
},{
  question : "Q4) What is my favourite dish ? " ,
  answer : "Pizza"
},{
  question : "Q5) What do i love to read about ? " ,
  answer : "Startups"
},{
  question : "Q6) What is my hobby ? " ,
  answer : "Reading"
},{
  question : "Q7) What is my favourite place for vacation ? " ,
  answer : "Nainital"
}
];

// loop
for (var i=0; i<questions.length;i++){
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer)
}

console.log(" Yaaay!! YOU SCORED :", score + " out of 7." );
