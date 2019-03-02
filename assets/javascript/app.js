var card = $("#quiz")

var quiz = [
    {
        Q: "1. How old is the actor Hugh Laurie who plays Dr. Gregory House in House MD?",
        A: ["65", "58", "62", "59"],
        correctA: "59",
        Image: "assets/images/image1.jpeg"
    },

    {
        Q: "2. What year did House MD first air on T.V.?",
        A: ["2004", "2005", "2006", "2007"],
        correctA: "2004",
        Image: "assets/images/image2.jpg"
    },

    {
        Q: "3. Which of the following is not an episode title of House MD?",
        A: ["The Mistake", "Top Secret", "It's a Wonderful Lie", "Burning Questions"],
        correctA: "Burning Questions",
        Image: "assets/images/image3.jpg"

    },

    {
        Q: "4. Which of the following actors was not a guest star on House MD?",
        A: ["Amanda Seyfried", "Kristen Bell", "Leighton Meester", "Evan Peters"],
        correctA: "Kristen Bell",
        Image: "assets/images/image4cropped.png"

    },

    {
        Q: "5. What is the name of James Wilson's dog which he bought with his second wife Bonnie Wilson?",
        A: ["Hector", "Harris", "Hayden", "Harry"],
        correctA: "Hector",
        Image: "assets/images/image5.jpg"
    },
    {
        Q: "6. Who plays Dr. Cuddy in House MD?",
        A: ["Megan Mullally", "Lisa Edelstein", "Julia Louis-Dreyfus", "Julianne Moore"],
        correctA: "Lisa Edelstein",
        Image: "assets/images/image6.jpeg"
    },
    {
        Q: "7. Why did Foreman quit?",
        A: ["He was not happy with his salary", "He didn't like his coworkers", "He wanted to start his own practice", "He didn't want to turn into House"],
        correctA: "He didn't want to turn into House",
        Image: "assets/images/image7.jpg"
    },
    {
        Q: "8. In what season did a former patient shoot House?",
        A: ["Season 1", "Season 2", "Season 3", "Season 4"],
        correctA: "Season 2",
        Image: "assets/images/image8.jpg"
    },
    {
        Q: "9. What is Foreman's first name on House?",
        A: ["Robert", "James", "Chris", "Eric"],
        correctA: "Eric",
        Image: "assets/images/image9.jpg"
    },
    {
        Q: "What nationality is Chase on House?",
        A: ["Canadian", "American", "Australian", "British"],
        correctA: "Australian",
        Image: "assets/images/image10.jpg"
    },

]

var timer;
var image;
var usarChoice;

var game = {
    correct: 0,
    incorrect: 0,
    unanswered: 0,
    counter: 60,

    countDown: function () {
        game.counter--
        $("#countDown").html(game.counter)
        if (game.counter === 0) {
            console.log("Time's Up!")
            game.UserChoice();
            game.done()
        }
    },
    start: function () {
        timer = setInterval(game.countDown, 1000)
        $("#innerWrapper").prepend("<h2> Time Remaining: <span id = 'countDown'> 60 </span> Seconds </h2>")
        $("#house").css('background-image', 'none').css('background-color', '#59D2FE');
        $("#start").remove()
        for (var i = 0; i < quiz.length; i++) {
            card.append("<h3> " + quiz[i].Q + "<h3>" + "<div class='img'><img style = 'width: 350px; text-align: center;' id= 'images' src = " + (quiz[i].Image) + "></div>");
            for (var j = 0; j < quiz[i].A.length; j++) {
                card.append("<input class ='radio' type='radio' name='question-" + i +
                    "' value='" + quiz[i].A[j] + "''>" + quiz[i].A[j]);
            }
        }
        card.append("<button id = 'done' style = 'margin: 20px 10px;'> Done </button>")
    },

    UserChoice: function () {
        for (var i = 0; i < quiz.length; i++) {
            var radioValue = $("input[name='question-" + i + "']:checked").val();
            console.log(radioValue);

            if (radioValue === quiz[i].correctA) {
                console.log("that's right!");
                game.correct++
            } else if (radioValue === undefined) {
                console.log("no guess");
                game.unanswered++
            } else {
                console.log("wrong")
                game.incorrect++
            }
        }
    },

    done: function () {
        $("#innerWrapper").css('display', 'none');
        $("#title").text("Your Results");
        game.result()
        clearTimeout(timer);
        $("#house").css("background-color", "black");
        $("#house").css("background-image", "url('assets/images/done.jpg')");
        $("#house").css("background-size", "cover");
        $("#innerWrapper").remove();
    },

    result: function () {
        $("#scoreCorrect").append("<p>Correct Answers: " + game.correct + "</p>");
        $("#scoreIncorrect").append("<p>Incorrect Answers: " + game.incorrect + "</p>");
        $("#scoreUnanswered").append("<p>Unanswered Questions: " + game.unanswered + "</p>");
        $("#endMessage").append("<p>Great Game! </p>");
        console.log("Correct: " + game.correct);
        console.log("Incorrect: " + game.incorrect);
        console.log("No Guess: " + game.unanswered);
    },
}


$(document).on("click", "#start", function () {
    game.start();
});

$(document).on("click", "#done", function () {
    game.UserChoice();
    game.done();
});


