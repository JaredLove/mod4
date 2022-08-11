//Selecotr varaibles used for quiz
var questionsEl = document.querySelector("#questions");
var answersEl = document.querySelector("#answers");
var startBtn = document.querySelector("#game");
var timeEl = document.querySelector("#time");
var enterBtn = document.querySelector("#enter");
var nameEl = document.querySelector("#name1");
var noteEl = document.querySelector("#notes");
var highEl = document.querySelector("#high");


//start of quiz
var questNum = 0;
var time = 120;
var timerC;
//style to var questions array
questionsEl.style.background = "white";
questionsEl.style.textAlign = "center";
questionsEl.style.color = "#000001";


//array of questions and answers used for quiz learned this from jeremy my profressor in class
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
        
    
    }

    
    ];
    //function to start quiz
    function startQuiz() {
        //hides html for quiz to show
        var startScreenEl = document.getElementById("startgame");
        startScreenEl.setAttribute("class", "hide");
        //hides the start game button
        var btnsEl = document.getElementById("game");
        btnsEl.setAttribute("class", "hide");
      
        //removes the hide class to show the questions on the screen
        questionsEl.removeAttribute("class");
      
        //starts the timer for the quiz calls times function
        timerC = setInterval(times, 1000);  timeEl.textContent = time;
        
        //shows the timer
        timerC.textContent = time;
        //evokes the game function
        javaGame2();
      }
      
      
      
      
      
      
      //function for the javagame
        function javaGame2() {
        var quest = questions[questNum];
      
        var nameEl = document.getElementById("title");
        nameEl.textContent = quest.question;
      
        answersEl.innerHTML = "";
      
        quest.answers.forEach(function(answer, i) {
        //turns the answers into buttons by using createElement
        var answerHub = document.createElement('button');
        //adding style to answers
        answerHub.setAttribute("class", "answer");
        answerHub.setAttribute("value", answer);

        answerHub.style.textAlign = "center";
        answerHub.style.color = "black";
       
      
        answerHub.textContent = i + 1 + ". " + answer;
        //when the user checks an answer it will send it to the answerCheck function
        answerHub.onclick = answerCheck;
        //appendChild the "answers" to the screen
        answersEl.appendChild(answerHub);
      
      });
      };

      //function to check the answers
      function answerCheck() {
        // if statement to make sure the user chose the correct answer and if not subtract time
        if (this.value !== questions[questNum].correctAnswer) {
            time -= 15;
            timeEl.textContent = time;
            //note to tell the user the answer was wrong with some styling
            noteEl.textContent = "Incorrect!";
            noteEl.style.color = "white";
            noteEl.style.fontSize = "50px";
        }
        // if statement the make sure the user chose the correct answer
        else if (this.value = questions[questNum].correctAnswer) {
        //note to tell the user the answer was correct with some styling
        noteEl.textContent = "Correct!";
        noteEl.style.color = "yellow";
        noteEl.style.fontSize = "50px";
        questNum++;
        }
        // if time reaches 0 go to gameEnd function
        if (time === 0) {
            time = 0;
            gameEnd();
        }
        //shows note
        noteEl.setAttribute("class", "notes")
        setTimeout(function () {
        //hides note
        noteEl.setAttribute("class", "notes hide")
        }, 1000)
        //when you reach the end of the quiz it willgo to gameEnd function
        if (questNum === questions.length) {
        gameEnd();
        }
        
        else {
        javaGame2();
        }
      
      }

      function gameEnd() {

        clearInterval(timerC);
        //gets the end screen id
        var endEl = document.getElementById("end");
        //removes to class to show end screen
        endEl.removeAttribute("class");
        //grabs the endscore id
        var scoreEl = document.getElementById("endScore");
        //shows the score
        scoreEl.textContent = time;
        //hides the quetions to show end screen
        questionsEl.setAttribute("class", "hide");
      }
      //function for timer
      function times() {
        time--;
        timeEl.textContent = time;
      
        if (time <= 0) {
            gameEnd();
        }
      }
      //highscore function to store name and score
      function highScore () {
        //name input
        var name = nameEl.value;
      
        if (name !== "") {
            var scores = JSON.parse(window.localStorage.getItem("scores")) || [];
            //score is based on how much time you had left
            var news = {
                score: time,
                name: name
            };
         //push news to scores   
        scores.push(news);
        //stores the score
        window.localStorage.setItem("scores", JSON.stringify(scores));
      
      
      
        
        }
      }
      //check for the user key click sends to highscore for input of name
      function check(event) {
        if (event.key === "Enter") {
            highScore();
        }
      }
      //function to show scores alerts the user
      function getScore() {
      alert(localStorage["scores"]);
      }

      //onclick events 
      highEl.onclick = getScore;

    enterBtn.onclick = highScore;

    startBtn.onclick = startQuiz;

    nameEl.onkeyup = check;