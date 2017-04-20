var allQuestion = [
  {
    question: "Who is the cutest dog?",
    choices:['Gussel', 'Shirles', 'Spot', 'Roscoe'],
    correctAnswer:0
  },
  {
    question:'How old is Gussel?',
    choices:['3', '4', '5', '6'],
    correctAnswer: 2
  },
  {
    question:'True or false: Gussel is wearing a blue banadana',
    choices:['true', 'false'],
    correctAnswer: 0
  },
  {
    question: "Where is Gussel's favorite place to go?",
    choices:['park', 'beach', 'mountains', 'all of the above'],
    correctAnswer: 3
  },
  {
    question: 'True or false: Gussel hates playing with balls.',
    choices: ['true', 'false'],
    correctAnswer: 1
  }
];
var position = 0;
var firstQuestion = allQuestion[position].question;
var question = function()
{
  firstQuestion = document.getElementById('questions');
  firstQuestion.innerHTML = allQuestion[position].question;
  var buttons = allQuestion[position].choices;
  answers.innerHTML = "";
  for(i=0; i<buttons.length; i++) {
    var label = document.createElement('label');
    label.innerHTML = buttons[i];
    var button = document.createElement('input');
    var breaks = document.createElement('br');
    button.setAttribute('type','radio');
    button.setAttribute('name', 'answer');
    if(i === allQuestion[position].correctAnswer)
    {
      button.value = 1;
    }
    else{
      button.value = 0;
    }
    document.getElementById('answers').appendChild(label);
    document.getElementById('answers').appendChild(button);
    document.getElementById('answers').appendChild(breaks);
  }
};

var totalScore = 0;
var onClick = function()
{
  var total = document.querySelector('input[name="answer"]:checked');
  if(total !== null)
  {
    if(position === (allQuestion.length - 1))
    {
      firstQuestion.innerHTML = "";
      totalScore = totalScore + (+total.value);
      answers.innerHTML = totalScore;
      document.getElementById("next").style.visibility = "hidden";
    }
    else {
      position++;
      question();
      totalScore = totalScore + (+total.value);
    }
  }
};
