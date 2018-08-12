var runningTotalCorrect = 0;
var runningTotalIncorrect = 0;

//Hitting the start button hides the Start Menu and brings up the first question
$(".startButton").on("click", function () {
    var state = $(this).parent().attr("data-state");

    if (state === "shown") {
        $(this).parent().attr("class", "gameScreen container hidden");
        $(this).parent().attr("data-state", "hidden");
        $("#question1").attr("class", "gameScreen container");
        $("#question1").attr("data-state", "shown");
    };

    //Start the timer for the first question
    var firstTimeOut = setTimeout(function () {
        $("#question1").attr("class", "gameScreen container hidden");
        $("#question1").attr("data-state", "hidden");
        $("#questionOneIncorrect").attr("class", "gameScreen container");
        $("#questionOneIncorrect").attr("data-state", "shown");
        runningTotalIncorrect++;
        console.log("Total Incorrect: " + runningTotalIncorrect);
        $(".incorrectAnswers").text(runningTotalIncorrect);
    }, 15000);

    $("#submitFirstAnswer").on("click", function () {

        clearTimeout(firstTimeOut);
    });

    //Show the timer on the first question panel
    var n = 15;
    var tm = setInterval(countDown, 1000);
    function countDown() {
        n--;
        if (n == 0) {
            clearInterval(tm);
        }
        $("#firstQuestionTimeRemaining").text(n);
    }
});

//Hitting the Next button on question 1 moves to the first answer screen
$("#submitFirstAnswer").on("click", function () {
    var state = $(this).parent().attr("data-state");
    var firstQuestionSelection = $("input[name=firstAnswerGroup]:checked").val();
    console.log(firstQuestionSelection);

    if (state === "shown" && firstQuestionSelection === "Michael Jordan") {
        $(this).parent().attr("class", "gameScreen container hidden");
        $(this).parent().attr("data-state", "hidden");
        $("#questionOneCorrect").attr("class", "gameScreen container");
        $("#questionOneCorrect").attr("data-state", "shown");
        runningTotalCorrect++;
        console.log("Total Correct: " + runningTotalCorrect);
        $(".correctAnswers").text(runningTotalCorrect);
    } else if (state === "shown" && firstQuestionSelection !== "Michael Jordan") {
        $(this).parent().attr("class", "gameScreen container hidden");
        $(this).parent().attr("data-state", "hidden");
        $("#questionOneIncorrect").attr("class", "gameScreen container");
        $("#questionOneIncorrect").attr("data-state", "shown");
        runningTotalIncorrect++;
        console.log("Total Incorrect: " + runningTotalIncorrect);
        $(".incorrectAnswers").text(runningTotalIncorrect);
    }
});

//Hitting next goes to the next question and starts the timer
$(".goToSecondQuestion").on("click", function () {
    $(this).parent().attr("class", "gameScreen container hidden");
    $(this).parent().attr("data-state", "hidden");
    $("#question2").attr("class", "gameScreen container");
    $("#question2").attr("data-state", "shown");

    //Start the timer for the Second question
    var secondTimeOut = setTimeout(function () {
        $("#question2").attr("class", "gameScreen container hidden");
        $("#question2").attr("data-state", "hidden");
        $("#questionTwoIncorrect").attr("class", "gameScreen container");
        $("#questionTwoIncorrect").attr("data-state", "shown");
        runningTotalIncorrect++;
        console.log("Total Incorrect: " + runningTotalIncorrect);
        $(".incorrectAnswers").text(runningTotalIncorrect);
    }, 15000);

    $("#submitSecondAnswer").on("click", function () {
        clearTimeout(secondTimeOut);
    });

    //Show the timer on the second question panel
    var n = 15;
    var tm = setInterval(countDown, 1000);
    function countDown() {
        n--;
        if (n == 0) {
            clearInterval(tm);
        }
        $("#secondQuestionTimeRemaining").text(n);
    }
});

//Hitting the Next button on question 2 moves to the second answer screen
$("#submitSecondAnswer").on("click", function () {
    var state = $(this).parent().attr("data-state");
    var secondQuestionSelection = $("input[name=SecondAnswerGroup]:checked").val();
    console.log(secondQuestionSelection);

    if (state === "shown" && secondQuestionSelection === "Six") {
        $(this).parent().attr("class", "gameScreen container hidden");
        $(this).parent().attr("data-state", "hidden");
        $("#questionTwoCorrect").attr("class", "gameScreen container");
        $("#questionTwoCorrect").attr("data-state", "shown");
        runningTotalCorrect++;
        console.log("Total Correct: " + runningTotalCorrect);
        $(".correctAnswers").text(runningTotalCorrect);
    } else if (state === "shown" && secondQuestionSelection !== "Six") {
        $(this).parent().attr("class", "gameScreen container hidden");
        $(this).parent().attr("data-state", "hidden");
        $("#questionTwoIncorrect").attr("class", "gameScreen container");
        $("#questionTwoIncorrect").attr("data-state", "shown");
        runningTotalIncorrect++;
        console.log("Total Incorrect: " + runningTotalIncorrect);
        $(".incorrectAnswers").text(runningTotalIncorrect);
    }
});

//Hitting next goes to the next question and starts the timer
$(".goToThirdQuestion").on("click", function () {
    $(this).parent().attr("class", "gameScreen container hidden");
    $(this).parent().attr("data-state", "hidden");
    $("#question3").attr("class", "gameScreen container");
    $("#question3").attr("data-state", "shown");

    //Start the timer for the Third question
    var thirdTimeOut = setTimeout(function () {
        $("#question3").attr("class", "gameScreen container hidden");
        $("#question3").attr("data-state", "hidden");
        $("#questionThreeIncorrect").attr("class", "gameScreen container");
        $("#questionThreeIncorrect").attr("data-state", "shown");
        runningTotalIncorrect++;
        console.log("Total Incorrect: " + runningTotalIncorrect);
        $(".incorrectAnswers").text(runningTotalIncorrect);
    }, 15000);

    $("#submitThirdAnswer").on("click", function () {
        clearTimeout(thirdTimeOut);
    });

    //Show the timer on the third question panel
    var n = 15;
    var tm = setInterval(countDown, 1000);
    function countDown() {
        n--;
        if (n == 0) {
            clearInterval(tm);
        }
        $("#thirdQuestionTimeRemaining").text(n);
    }
});

//Hitting the Next button on question 3 moves to the third answer screen
$("#submitThirdAnswer").on("click", function () {
    var state = $(this).parent().attr("data-state");
    var secondQuestionSelection = $("input[name=thirdAnswerGroup]:checked").val();
    console.log(secondQuestionSelection);

    if (state === "shown" && secondQuestionSelection === "Jimmy Butler") {
        $(this).parent().attr("class", "gameScreen container hidden");
        $(this).parent().attr("data-state", "hidden");
        $("#questionThreeCorrect").attr("class", "gameScreen container");
        $("#questionThreeCorrect").attr("data-state", "shown");
        runningTotalCorrect++;
        console.log("Total Correct: " + runningTotalCorrect);
        $(".correctAnswers").text(runningTotalCorrect);
    } else if (state === "shown" && secondQuestionSelection !== "Jimmy Butler") {
        $(this).parent().attr("class", "gameScreen container hidden");
        $(this).parent().attr("data-state", "hidden");
        $("#questionThreeIncorrect").attr("class", "gameScreen container");
        $("#questionThreeIncorrect").attr("data-state", "shown");
        runningTotalIncorrect++;
        console.log("Total Incorrect: " + runningTotalIncorrect);
        $(".incorrectAnswers").text(runningTotalIncorrect);
    }
});

//Hitting next goes to the next question and starts the timer
$(".goToFourthQuestion").on("click", function () {
    $(this).parent().attr("class", "gameScreen container hidden");
    $(this).parent().attr("data-state", "hidden");
    $("#question4").attr("class", "gameScreen container");
    $("#question4").attr("data-state", "shown");

    //Start the timer for the Fourth question
    var fourthTimeOut = setTimeout(function () {
        $("#question4").attr("class", "gameScreen container hidden");
        $("#question4").attr("data-state", "hidden");
        $("#questionFourIncorrect").attr("class", "gameScreen container");
        $("#questionFourIncorrect").attr("data-state", "shown");
        runningTotalIncorrect++;
        console.log("Total Incorrect: " + runningTotalIncorrect);
        $(".incorrectAnswers").text(runningTotalIncorrect);
    }, 15000);

    $("#submitFourthAnswer").on("click", function () {
        clearTimeout(fourthTimeOut);
    });

    //Show the timer on the Fourth question panel
    var n = 15;
    var tm = setInterval(countDown, 1000);
    function countDown() {
        n--;
        if (n == 0) {
            clearInterval(tm);
        }
        $("#fourthQuestionTimeRemaining").text(n);
    }
});

//Hitting the Next button on question 4 moves to the fourth answer screen
$("#submitFourthAnswer").on("click", function () {
    var state = $(this).parent().attr("data-state");
    var fourthQuestionSelection = $("input[name=fourthAnswerGroup]:checked").val();
    console.log(fourthQuestionSelection);

    if (state === "shown" && fourthQuestionSelection === "Kirk Hinrich") {
        $(this).parent().attr("class", "gameScreen container hidden");
        $(this).parent().attr("data-state", "hidden");
        $("#questionFourCorrect").attr("class", "gameScreen container");
        $("#questionFourCorrect").attr("data-state", "shown");
        runningTotalCorrect++;
        console.log("Total Correct: " + runningTotalCorrect);
        $(".correctAnswers").text(runningTotalCorrect);
    } else if (state === "shown" && fourthQuestionSelection !== "Kirk Hinrich") {
        $(this).parent().attr("class", "gameScreen container hidden");
        $(this).parent().attr("data-state", "hidden");
        $("#questionFourIncorrect").attr("class", "gameScreen container");
        $("#questionFourIncorrect").attr("data-state", "shown");
        runningTotalIncorrect++;
        console.log("Total Incorrect: " + runningTotalIncorrect);
        $(".incorrectAnswers").text(runningTotalIncorrect);
    }
});

//Hitting next goes to the next question and starts the timer
$(".goToFifthQuestion").on("click", function () {
    $(this).parent().attr("class", "gameScreen container hidden");
    $(this).parent().attr("data-state", "hidden");
    $("#question5").attr("class", "gameScreen container");
    $("#question5").attr("data-state", "shown");


    //Start the timer for the Fifth question
    var fifthTimeOut = setTimeout(function () {
        $("#question5").attr("class", "gameScreen container hidden");
        $("#question5").attr("data-state", "hidden");
        $("#questionFiveIncorrect").attr("class", "gameScreen container");
        $("#questionFiveIncorrect").attr("data-state", "shown");
        runningTotalIncorrect++;
        console.log("Total Incorrect: " + runningTotalIncorrect);
        $(".incorrectAnswers").text(runningTotalIncorrect);
    }, 15000);

    $("#submitFifthAnswer").on("click", function () {
        clearTimeout(fifthTimeOut);
    });

    //Show the timer on the Sixth question panel
    var n = 15;
    var tm = setInterval(countDown, 1000);
    function countDown() {
        n--;
        if (n == 0) {
            clearInterval(tm);
        }
        $("#fifthQuestionTimeRemaining").text(n);
    }
});

//Hitting the Next button on question 5 moves to the fifth answer screen
$("#submitFifthAnswer").on("click", function () {
    var state = $(this).parent().attr("data-state");
    var fifthQuestionSelection = $("input[name=fifthAnswerGroup]:checked").val();
    console.log(fifthQuestionSelection);

    if (state === "shown" && fifthQuestionSelection === "1966") {
        $(this).parent().attr("class", "gameScreen container hidden");
        $(this).parent().attr("data-state", "hidden");
        $("#questionFiveCorrect").attr("class", "gameScreen container");
        $("#questionFiveCorrect").attr("data-state", "shown");
        runningTotalCorrect++;
        console.log("Total Correct: " + runningTotalCorrect);
        $(".correctAnswers").text(runningTotalCorrect);
    } else if (state === "shown" && fifthQuestionSelection !== "1966") {
        $(this).parent().attr("class", "gameScreen container hidden");
        $(this).parent().attr("data-state", "hidden");
        $("#questionFiveIncorrect").attr("class", "gameScreen container");
        $("#questionFiveIncorrect").attr("data-state", "shown");
        runningTotalIncorrect++;
        console.log("Total Incorrect: " + runningTotalIncorrect);
        $(".incorrectAnswers").text(runningTotalIncorrect);
    }
});

//Hitting next goes to the next question and starts the timer
$(".goToSixthQuestion").on("click", function () {
    $(this).parent().attr("class", "gameScreen container hidden");
    $(this).parent().attr("data-state", "hidden");
    $("#question6").attr("class", "gameScreen container");
    $("#question6").attr("data-state", "shown");


    //Start the timer for the Sixth question
    var sixthTimeOut = setTimeout(function () {
        $("#question6").attr("class", "gameScreen container hidden");
        $("#question6").attr("data-state", "hidden");
        $("#questionSixIncorrect").attr("class", "gameScreen container");
        $("#questionSixIncorrect").attr("data-state", "shown");
        runningTotalIncorrect++;
        console.log("Total Incorrect: " + runningTotalIncorrect);
        $(".incorrectAnswers").text(runningTotalIncorrect);
    }, 15000);

    $("#submitSixthAnswer").on("click", function () {
        clearTimeout(sixthTimeOut);
    });

    //Show the timer on the Sixth question panel
    var n = 15;
    var tm = setInterval(countDown, 1000);
    function countDown() {
        n--;
        if (n == 0) {
            clearInterval(tm);
        }
        $("#sixthQuestionTimeRemaining").text(n);
    }
});

//Hitting the Next button on question 5 moves to the fifth answer screen
$("#submitSixthAnswer").on("click", function () {
    var state = $(this).parent().attr("data-state");
    var sixthQuestionSelection = $("input[name=sixthAnswerGroup]:checked").val();
    console.log(sixthQuestionSelection);

    if (state === "shown" && sixthQuestionSelection === "Jerry Sloan") {
        $(this).parent().attr("class", "gameScreen container hidden");
        $(this).parent().attr("data-state", "hidden");
        $("#questionSixCorrect").attr("class", "gameScreen container");
        $("#questionSixCorrect").attr("data-state", "shown");
        runningTotalCorrect++;
        console.log("Total Correct: " + runningTotalCorrect);
        $(".correctAnswers").text(runningTotalCorrect);
    } else if (state === "shown" && sixthQuestionSelection !== "Jerry Sloan") {
        $(this).parent().attr("class", "gameScreen container hidden");
        $(this).parent().attr("data-state", "hidden");
        $("#questionSixIncorrect").attr("class", "gameScreen container");
        $("#questionSixIncorrect").attr("data-state", "shown");
        runningTotalIncorrect++;
        console.log("Total Incorrect: " + runningTotalIncorrect);
        $(".incorrectAnswers").text(runningTotalIncorrect);
    }
});

//Hitting next goes to the next question and starts the timer
$(".goToSeventhQuestion").on("click", function () {
    $(this).parent().attr("class", "gameScreen container hidden");
    $(this).parent().attr("data-state", "hidden");
    $("#question7").attr("class", "gameScreen container");
    $("#question7").attr("data-state", "shown");


    //Start the timer for the Seventh question
    var seventhTimeOut = setTimeout(function () {
        $("#question7").attr("class", "gameScreen container hidden");
        $("#question7").attr("data-state", "hidden");
        $("#questionSevenIncorrect").attr("class", "gameScreen container");
        $("#questionSevenIncorrect").attr("data-state", "shown");
        runningTotalIncorrect++;
        console.log("Total Incorrect: " + runningTotalIncorrect);
        $(".incorrectAnswers").text(runningTotalIncorrect);
    }, 15000);

    $("#submitSeventhAnswer").on("click", function () {
        clearTimeout(seventhTimeOut);
    });

    //Show the timer on the Seventh question panel
    var n = 15;
    var tm = setInterval(countDown, 1000);
    function countDown() {
        n--;
        if (n == 0) {
            clearInterval(tm);
        }
        $("#seventhQuestionTimeRemaining").text(n);
    }
});

//Hitting the Next button on question 7 moves to the seventh answer screen
$("#submitSeventhAnswer").on("click", function () {
    var state = $(this).parent().attr("data-state");
    var seventhQuestionSelection = $("input[name=seventhAnswerGroup]:checked").val();
    console.log(seventhQuestionSelection);

    if (state === "shown" && seventhQuestionSelection === "Miami Heat") {
        $(this).parent().attr("class", "gameScreen container hidden");
        $(this).parent().attr("data-state", "hidden");
        $("#questionSevenCorrect").attr("class", "gameScreen container");
        $("#questionSevenCorrect").attr("data-state", "shown");
        runningTotalCorrect++;
        console.log("Total Correct: " + runningTotalCorrect);
        $(".correctAnswers").text(runningTotalCorrect);
    } else if (state === "shown" && seventhQuestionSelection !== "Miami Heat") {
        $(this).parent().attr("class", "gameScreen container hidden");
        $(this).parent().attr("data-state", "hidden");
        $("#questionSevenIncorrect").attr("class", "gameScreen container");
        $("#questionSevenIncorrect").attr("data-state", "shown");
        runningTotalIncorrect++;
        console.log("Total Incorrect: " + runningTotalIncorrect);
        $(".incorrectAnswers").text(runningTotalIncorrect);
    }
});

//Hitting next goes to the end screen
$(".goToEndScreen").on("click", function () {
    $(this).parent().attr("class", "gameScreen container hidden");
    $(this).parent().attr("data-state", "hidden");
    $("#endScreen").attr("class", "gameScreen container");
    $("#endScreen").attr("data-state", "shown");
});


//Hitting the reset button on the end screen restarts the game
$("#restartGame").on("click", function () {
    var state = $(this).parent().attr("data-state");
    if (state === "shown") {
        $(this).parent().attr("class", "gameScreen container hidden");
        $(this).parent().attr("data-state", "hidden");
        $("#question1").attr("class", "gameScreen container");
        $("#question1").attr("data-state", "shown");
    }
    var runningTotalCorrect = 0;
    var runningTotalIncorrect = 0;
    $(".correctAnswers").text(runningTotalCorrect);
    $(".incorrectAnswers").text(runningTotalIncorrect);


    var firstTimeOut = setTimeout(function () {
        $("#question1").attr("class", "gameScreen container hidden");
        $("#question1").attr("data-state", "hidden");
        $("#questionOneIncorrect").attr("class", "gameScreen container");
        $("#questionOneIncorrect").attr("data-state", "shown");
        runningTotalIncorrect++;
        console.log("Total Incorrect: " + runningTotalIncorrect);
        $(".incorrectAnswers").text(runningTotalIncorrect);
    }, 15000);

    $("#submitFirstAnswer").on("click", function () {

        clearTimeout(firstTimeOut);
    });

});