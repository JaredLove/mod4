var questionsEl = document.querySelector("#questions");
var answersEl = document.querySelector("#answers");
var startBtn = document.querySelector("#game");
var timeEl = document.querySelector("#time");
var enterBtn = document.querySelector("#enter");
var nameEl = document.querySelector("#name1");
var noteEl = document.querySelector("#notes");
var highEl = document.querySelector("#high");





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

