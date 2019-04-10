var basic = [
{},
{question: "How old am I?", answer: "30"}, 
{question: "What is my middle name?", answer: "Bob"},  
{question: "Where was I born?", answer: "China"},   
]
 
var favs = [
{},
{question: "What is my favorite color?", answer: "Blue"}, 
{question: "What is my favorite Disney Movie?", answer: "Aladdin"},  
{question: "What is my favorite restaurant?", answer: "McDonalds"},   
]
 
var family = [
{},
{question: "How many brothers do I have?", answer: "0"}, 
{question: "What is my dad's name?", answer: "Jim"},  
{question: "What kind of dogs do I have?", answer: "Labs"},   
]
 
var score= 0;
 
function showQuestion(topic, amount){
  var index= amount/ 100;
  var question=" ";
  var answer=" ";
  if(topic == "basic")
{
  question = basic[index].question;
answer = basic[index].answer;
}
  
else if (topic== "favs") {
  question = favs[index].question;
  answer = favs[index].answer;
}
  else if (topic == "family") {
    question = family[index].question;
    answer = family[index].answer;
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
