//Hitting the start button hides the Start Menu and brings up the first question
$(".startButton").on("click", function () {
    var state = $(this).parent().attr("data-state");

    if (state === "shown") {
        $(this).parent().attr("class", "gameScreen container hidden");
        $(this).parent().attr("data-state", "hidden");
        $("#question1").attr("class", "gameScreen container");
        $("#question1").attr("data-state", "shown");
    }
});

//Hitting the Next button on question 1 moves to the next question
$("#submitFirstAnswer").on("click", function () {
    console.log("Another Button!");
    var state = $(this).parent().attr("data-state");

    if (state === "shown") {
        $(this).parent().attr("class", "gameScreen container hidden");
        $(this).parent().attr("data-state", "hidden");
        $("#question2").attr("class", "gameScreen container");
        $("#question2").attr("data-state", "shown");
    }
});

//Hitting the Next button on question 2 moves to the next question
$("#submitSecondAnswer").on("click", function () {
    var state = $(this).parent().attr("data-state");

    if (state === "shown") {
        $(this).parent().attr("class", "gameScreen container hidden");
        $(this).parent().attr("data-state", "hidden");
        $("#question3").attr("class", "gameScreen container");
        $("#question3").attr("data-state", "shown");
    }
});

//Hitting the Next button on question 3 moves to the next question
$("#submitThirdAnswer").on("click", function () {
    var state = $(this).parent().attr("data-state");

    if (state === "shown") {
        $(this).parent().attr("class", "gameScreen container hidden");
        $(this).parent().attr("data-state", "hidden");
        $("#question4").attr("class", "gameScreen container");
        $("#question4").attr("data-state", "shown");
    }
});

//Hitting the Next button on question 4 moves to the next question
$("#submitFourthAnswer").on("click", function () {
    var state = $(this).parent().attr("data-state");

    if (state === "shown") {
        $(this).parent().attr("class", "gameScreen container hidden");
        $(this).parent().attr("data-state", "hidden");
        $("#question5").attr("class", "gameScreen container");
        $("#question5").attr("data-state", "shown");
    }
});