
//GLOBAL  VARIABLES
//=============================================

var quiz = $("#quiz")

//Question Object
var questions = [ 
    {
        question: "Big steel box, with a long barrel",
        answers: ["Tractor", "Baby Carraige", "Tank"],
        correctAnswer: "Tank"
    },

    {
        question: "Has a nickname of Whirly Bird",
        answers: ["Drunk Wood pecker", "Heliocopter", "Pinto"],
        correctAnswer: "Heliocopter"  
    },
   
    {
        question: "Used to carry Marines to work",
        answers: ["Short Yellow Bus", "Navy Ship", "Space Shuttle"],
        correctAnswer: "Navy Ship"  
    }
];

var timer;
var counter = 30;




 //FUNCTIONS
 //=============================================


var game ={
    correct: 0,
    incorrect: 0,
    counter: 30,

    countDown: function(){
        game.counter--;
        console.log (counter);
        //alert("HEY")
        $("#timer").html(game.counter);
        if (game.counter === 0){
            console.log("TIMES UP")
            game.done();
        }
    },     
    start: function(){

        timer = setInterval(game.countDown, 1000);
        quiz.append("<p>" + questions[0].question + "</p>")
    
    },
    //Done Function
    //=======================================================
    //Loop thru user answers. If else staement incoorrect and correct statement.
    done: function(){
    clearInterval(timer)  
    }
    //result function
    //=======================================================
    //stop the timer. Append the results of the quest
}







//Click Event
//==============================================

$("#start").on("click", function(){
    game.start();
})