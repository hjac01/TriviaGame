var score=0;

var quizQuestions = [
    {
        question:"What is the name of Joey's Stuffed Penguin?",
        answers: ["Chandler","Hugsy","Janice"],
        rightAnswer: "b",
    },
    {
        question:"What caused the fire in Phoebe and Rachel's apartment?",
        answers: ["Monica's turkey","Phoebe's candles","Rachel's hair straightener"],
        rightAnswer: "c",
    },
    {
        question:"What color was the couch at Central Perk?",
        answers: ["orange","blue","green"],
        rightAnswer: "c",
    },
    
];
    
    function showQuestions(){
        for(var i=0; i<quizQuestions.length;i++){
            $("#quiz").append("<h2>"+ quizQuestions[i].question + "</h2>")
            for(var j=0; j<quizQuestions[i].answers.length; j++){
                $("#quiz").append(`<input type='radio' name=${i} value="${quizQuestions[i].answers[j]}"> ${quizQuestions[i].answers[j]}</input>`)
            }
        }
       

    } 
    showQuestions()

    $("#submit").on("click",function(){
        console.log("quizsubmitted")
        var q1 = $("input[name=0]:checked").val();
        var q2 = $("input[name=1]:checked").val();
        var q3 = $("input[name=2]:checked").val();
        console.log(q1, q2, q3)
        if (q1=="Hugsy"){
            score ++
        }
        if (q2=="Rachel's hair straightener"){
            score ++
        }
        if (q3=="orange"){
            score ++
        }
        console.log(score)
        $("#result").append("<h2>" + "you got" + score +"questions correct" + "</h2>")
    })