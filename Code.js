//Start() function for the start button.
function start(){
document.getElementById("startButton").disabled = true;
document.getElementById("stopButton").disabled = false;
}

//Stop() function for the stop button.
function stop(){
    document.getElementById("stopButton").disabled = true;
    document.getElementById("startButton").disabled = false;
}

//Same function but made better and more efficient with loops with the change order request.
function countDownV3() {
    var count = 10;
    //This line is to start the for loop.
    for (var i = 1; i <= 11; i++) {

        if (i <= 5) {
            //This function is to start the count.
            setTimeout(function () {
                document.getElementById("countDownTimer").innerHTML = count;
                count--;
            }, 1000 * i);
            //This is an else if statement to show the warning for half way through launch.
        } else if (i > 5 && i != 11) {
            setTimeout(function () {
                document.getElementById("countDownTimer").innerHTML = "Warning less than ½ way to launch, time left = " + count;
                count--;
            }, 1000 * i);
            //This is an else statement to end the countdown with blastoff.
        } else {
            setTimeout(function () {
                document.getElementById("countDownTimer").innerHTML = "Blastoff!";
                count--;
            }, 1000 * i);

        }

    }



}

//Same function but made better and more efficient with loops.
function countDownV2() {
    var count = 10;
    //This line is to start the for loop.
    for (var i = 1; i <= 10; i++) {
        //This function is to start the count.
        setTimeout(function () {
            document.getElementById("countDownTimer").innerHTML = count;
            count--;
        }, 1000 * i);
    }
    //This function is to stop the count at blastoff.
    setTimeout(function () {
        document.getElementById("countDownTimer").innerHTML = "Blastoff!";
        count--;
    }, 11000);



}

//Creating a countdown function to count from 10 to 1 and then blastoff.
function countDown() {
    var count = 10;
    //Starting countdown at 10.
    document.getElementById("countDownTimer").innerHTML = count;
    count = count - 1;
    //Then going to 9.
    setTimeout(function () {
        document.getElementById("countDownTimer").innerHTML = count;
        count = count - 1;
    }, 1000);

    //Going to 8.
    setTimeout(function () {
        document.getElementById("countDownTimer").innerHTML = count;
        count = count - 1;
    }, 2000);
    //Then going to 7.
    setTimeout(function () {
        document.getElementById("countDownTimer").innerHTML = count;
        count = count - 1;
    }, 3000);

    //Going to 6.
    setTimeout(function () {
        document.getElementById("countDownTimer").innerHTML = count;
        count = count - 1;
    }, 4000);
    //Then going to 5.
    setTimeout(function () {
        document.getElementById("countDownTimer").innerHTML = count;
        count = count - 1;
    }, 5000);

    //Going to 4.
    setTimeout(function () {
        document.getElementById("countDownTimer").innerHTML = count;
        count = count - 1;
    }, 6000);
    //3
    setTimeout(function () {
        document.getElementById("countDownTimer").innerHTML = count;
        count = count - 1;
    }, 7000);

    //2
    setTimeout(function () {
        document.getElementById("countDownTimer").innerHTML = count;
        count = count - 1;
    }, 8000);
    //1
    setTimeout(function () {
        document.getElementById("countDownTimer").innerHTML = count;
        count = count - 1;
    }, 9000);

    //Blastoff!
    setTimeout(function () {
        document.getElementById("countDownTimer").innerHTML = "Blastoff!!!";
        count = count - 1;
    }, 10000);


}

function playCraps() {
    //This is to create the die1 variable.
    var die1;
    //This is to create the die2 variable.
    var die2;
    //This is to create the sum variable.
    var sum;
    //This is for die1 to find a random number and multiply it by 6.
    die1 = Math.ceil(Math.random() * 6);
    //This is for die2 to find a random number and multiply it by 6.
    die2 = Math.ceil(Math.random() * 6);
    //This is to for sum to find the total of die1 and die2.
    sum = die1 + die2;
    document.getElementById("die1Res").innerHTML = die1;
    document.getElementById("die2Res").innerHTML = die2;
    document.getElementById("sumRes").innerHTML = sum;
    //This is an if statement to show when you lose the game with a 7 or 11.
    if (sum == 7 || sum == 11) {
        document.getElementById("crapsResults").innerHTML = "Craps!  You lose!";
    }
    //This is an else if statement to show the sequence when you win the game with doubles or even.
    else if (die1 == die2 && die1 % 2 == 0) {
        document.getElementById("crapsResults").innerHTML = "Doubles, you win!";
    }
    //This is an else statement to show the sequence when you get a push in the game.
    else {
        document.getElementById("crapsResults").innerHTML = "Push.  Please try again.";
    }

}
function checkCreds() {
    //Place to store first names.
    var firstName = document.getElementById("fName").value;
    //Place to store last names.
    var lastName = document.getElementById("lName").value;
    //Place to store badge numbers.
    var badgeNumb = document.getElementById("badgeID").value;
    //Place to store the first names and last names.
    var fullName = firstName + " " + lastName;

    if (fullName.length > 20 || fullName.length == 1) {
        //if true statement for the fullName variable.
        document.getElementById("loginStatus").innerHTML = "Invalid full name!"
    } else if (badgeNumb > 999 || badgeNumb < 1) {
        //else if statement for the badgeNumb variable.
        document.getElementById("loginStatus").innerHTML = "Invalid badge number!"
    } else {
        //else statement for the fullName variable.
        alert("Access Granted!  Welcome " + fullName);
        location.replace("index.html");
    }
}