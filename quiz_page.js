player1Name = localStorage.getItem("player1Name");
player2Name = localStorage.getItem("player2Name");

player1Score = 0;
player2Score = 0;

document.getElementById("player1Name").innerHTML = player1Name + ":";
document.getElementById("player2Name").innerHTML = player2Name + ":";

document.getElementById("player1Score").innerHTML = player1Score;
document.getElementById("player2Score").innerHTML = player2Score;


document.getElementById("playerQuestion").innerHTML = "Question turn : " + player1Name;
document.getElementById("playerAnswer").innerHTML = "Answer turn : " + player2Name;

function send() {
    number1 = document.getElementById("Num1").value;
    number2 = document.getElementById("Num2").value;
    actual_answer = parseInt(number1) * parseInt(number2);
    question_number = "<h4>" + number1 + "x" + number2 + "</h4>";
    input_box = "<br><br>Answer: <input type='text' id='input_check_box' placeholder='answer'>";
    check_button = "<br><br><button onclick='check()' class='btn btn-info'>Check</button>";
    hello = question_number + input_box + check_button;
    document.getElementById("output").innerHTML = hello;
    document.getElementById("word1").value = "";
    document.getElementById("word2").value = "";
}
questionTurn = "player1";
answerTurn = "player2";

function check() {
    getAnswer = document.getElementById("input_check_box").value;
    document.getElementById("output").innerHTML = "";
    if (getAnswer == actual_answer) {

        if (answerTurn == "player1") {

            player1Score = player1Score + 1;
            console.log(player1Score);
            document.getElementById("player1Score").innerHTML = player1Score;

        } else {
            player2Score = player2Score + 1;
            console.log(player2Score);
            document.getElementById("player2Score").innerHTML = player2Score;
        }
    }
    if (questionTurn == "player1") {

        questionTurn = "player2";
        document.getElementById("playerQuestion").innerHTML = "Question Turn: " + player2Name;

    } else {
        questionTurn = "player1"
        document.getElementById("playerQuestion").innerHTML = "Question Turn: " + player1Name;
    }
    if (answerTurn == "player1") {
        answerTurn = "player2";
        document.getElementById("playerAnswer").innerHTML = "Answer Turn: " + player2Name;
    } else {
        answerTurn = "player1";
        document.getElementById("playerAnswer").innerHTML = "Answer Turn: " + player1Name;
    }


}