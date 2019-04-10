
/* Module 5 Project Script File 
var round1 = [{},{question: "What is html stands for" , answer: "Hypertext Markup Language"},
                {question2: "What does JS stands for", answer: "Javascript"},
                {question3: "What does DOM stands for", answer: "Document Object Model"},
             ]
var round2 =   [{},{question: "action that occurs on the document", answer: "event"},
                {question2: "key word to refer to the element that the event is happening on?", answer: "this"},
                {question3: "the hirecy that the dom creates to organize objects?", answer: "document tree"},
             ]
var round3 =  [{},{question: "date type can be stored, can be any type. Array can hold any types of data in the language?", answer: "untyped language"},
                {question2: "what code should be executed when the event occurs?", answer: "event handler"},
                {question3: "what is part of an object is called a method
?", answer: "function"},
             ]*/

var round1 = [

{},

{question: "What is html stands for?", answer: "Hypertext Markup Language" },

{question: "What does JS stands for?", answer: "Javascript"}, 

{question: "What does DOM stands for?", answer: "Document Object Model"},  

]

 

var round2 = [

{},

{question: "action that occurs on the document", answer: "event"},

{question: "key word to refer to the element that the event is happening on?", answer: "this"}, 

{question: "the hirecy that the dom creates to organize objects?", answer: "document tree"},  

]

 

var round3 = [

{},

{question: "date type can be stored, can be any type. Array can hold any types of data in the language", answer: "untyped language"},

{question: "what code should be executed when the event occurs?", answer: "event handler"}, 

{question: "what is part of an object is called a method?", answer: "function"},  

]

 

var score= 0;

 

function showQuestion(topic, amount){

  var index= amount/ 100;

  var question=" ";

  var answer=" ";

  if(topic == "round1")

{

  question = round1[index].question;

answer = round1[index].answer;

}

 

else if (topic== "round2") {

  question = round2[index].question;

  answer = round2[index].answer;

}

  else if (topic == "round3") {

    question = round3[index].question;

    answer = round3[index].answer;

  }

 

var potentialAnswer = window.prompt(question)

if (potentialAnswer == answer) {

   score= score + amount;

   var scores = document.getElementsByClassName("_score");

   for (var i = 0; i < scores.length; i++)

   {

       scores[i].innerHTML = "Score: $" + score;

   }

   window.alert("You're Correct!");

}

 

else{

  window.alert("Wrong. Please Try Again.");

}

}