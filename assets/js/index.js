
var answers;
var question;
var correctAnswerIndex;




var questions = [
    {
    question: "What is our definition of the 'this' keyword?",
    
      answers: [    

           "same as me",
            
           "The 'this' keyword refers to the object FROM WHICH the method was called.",
            
           "The opposite of 'that'",

            "this is an obect",

            ],
        //b 
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

        correctAnswerIndex: 1,
        //A
    
    },
    
    {
    
        question: "How do you write Hello World in an alert box?",
        answers: [
            "alertBox('Hello World');", 
            
            "msg('Hello World')",
            
            "alert('Hello World');",

            "msgBox('Hello World')",

            ],
        correctAnswerIndex: 1,
        //C

        question: "How do you write Hello World in an alert box?",
        answers: [
            "alertBox('Hello World');", 
            
            "msg('Hello World')",
            
            "alert('Hello World');",

            "msgBox('Hello World')",

            ],
        correctAnswerIndex: 1,
        //C
    
    },
    
    
    
    ];



var gameBtn = document.querySelector("#game");


gameBtn.addEventListener("click", javaGame2);