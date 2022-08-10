var questionsEl = document.querySelector("#questions");
var answersEl = document.querySelector("#answers");
var startBtn = document.querySelector("#game");
var timeEl = document.querySelector("#time");
var enterBtn = document.querySelector("#enter");
var nameEl = document.querySelector("#name1");
var noteEl = document.querySelector("#notes");
var highEl = document.querySelector("#high");

var correctAnswerIndex;
var questNum = 0;
var time = 120;
var timerC;

questionsEl.style.background = "teal";
questionsEl.style.textAlign = "center";
questionsEl.style.color = "#000001";
answersEl.style.textAlign = "center";
answersEl.style.color = "red";

var questions = [
    {
    question: "What is our definition of the 'this' keyword?",
    
      answers: [    

           "same as me",
            
           "The 'this' keyword refers to the object FROM WHICH the method was called.",
            
           "The opposite of 'that'",

            "this is an obect",

            ],
        correctAnswer: "The 'this' keyword refers to the object FROM WHICH the method was called.",
        correctAnswerIndex: 1,
    },
    {
    
        question: "Inside which HTML element do we put the JavaScript?",
        answers: [ 
             
            "<script>", 

             "<js>", 

             "<scripting>", 

             "<java>",
            
            ],
        correctAnswer: "<script>",
        correctAnswerIndex: 1,
            //A
    },
    
    {
    
        question: "What is the correct syntax for referring to an external script called index.js?",
        answers: [
            "<script src=index.js",

            "<script name=index.js",

            "<script href=index.js",
            
            "<script a=index.js",
        ],
        correctAnswer: "<script src=index.js",
        correctAnswerIndex: 1,
        //A
    
    },
    
    {
    
        question: "How do you write Hello World in an alert box?",
        answers: [
            "alertBox('Hello World')", 
            
            "msg('Hello World')",
            
            "alert('Hello World')",

            "msgBox('Hello World')",

            ],
        correctAnswer: "alert('Hello World')",
        correctAnswerIndex: 1,
        //C
    },
    {
        question: "How do you create a function in JavaScript?",
        answers: [
            "<function = myFunction()>", 
            
            "function myFunction()",
            
            "function(myFunction)",

            "function::myFunction()",

            ],
        correctAnswer: "function myFunction()",
        correctAnswerIndex: 1,
        //C
    
    }

    
    ];

    function startQuiz() {
        // hide start screen
        var startScreenEl = document.getElementById("startgame");
        startScreenEl.setAttribute("class", "hide");
      
        var btnsEl = document.getElementById("game");
        btnsEl.setAttribute("class", "hide");
      
        // un-hide questions section
        questionsEl.removeAttribute("class");
      
        // start timer
        timerC = setInterval(times, 1000);  timeEl.textContent = time;
        
        // show starting time
        timerC.textContent = time;
      
        javaGame2();
      }
      
      
      
      
      
      
      
        function javaGame2() {
        var quest = questions[questNum];
      
        var nameEl = document.getElementById("title");
        nameEl.textContent = quest.question;
      
        answersEl.innerHTML = "";
      
        quest.answers.forEach(function(answer, i) {
        var answerHub = document.createElement('button');
        answerHub.setAttribute("class", "answer");
        answerHub.setAttribute("value", answer);
      
        answerHub.textContent = i + 1 + ". " + answer;
      
        answerHub.onclick = answerCheck;
      
        answersEl.appendChild(answerHub);
      
      });
      };


      function answerCheck() {
        if (this.value !== questions[questNum].correctAnswer) {
            time -= 15;
            timeEl.textContent = time;
            noteEl.textContent = "Incorrect!";
            noteEl.style.color = "white";
            noteEl.style.fontSize = "50px";
        }
        
        else if (this.value = questions[questNum].correctAnswer) {
        noteEl.textContent = "Correct!";
        noteEl.style.color = "yellow";
        noteEl.style.fontSize = "50px";
        questNum++;
        }
      
        if (time === 0) {
            time = 0;
            gameEnd();
        }
      
        noteEl.setAttribute("class", "notes")
        setTimeout(function () {
        noteEl.setAttribute("class", "notes hide")
        }, 1000)
      
        if (questNum === questions.length) {
        gameEnd();
        }
      
        else {
        javaGame2();
        }
      
      }