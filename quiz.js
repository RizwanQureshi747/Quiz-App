// QUESTIONS
var questions = [
    {
        id: 1,
        question: "Q1 : HTML stand for",
        options: {
            a: "Hyper text markup Language",
            b: "Hyper text programming Language",
            c: "Hyper text styling Language",
            d: "Hyper text scripting Language",

        },
        answer: "Hyper text markup Language"
    },
    {
        id: 2,
        question: "Q2 : Which type of JavaScript Languages is",
        options: {
            a: "Object-Oriented ",
            b: "Object-Base",
            c: "Assembly Languages",
            d: "high Level",

        },
        answer: "Object-Base"
    },
    {
        id: 3,
        question: "Q3 : The 'function' and  'var' are known as:",
        options: {
            a: "Keywords",
            b: "Data types",
            c: "Declaration statements",
            d: "Prototypes",

        },
        answer: "Declaration statements"
    }
    ,
    {
        id: 4,
        question: "Q4 : who is the present president of pakistan",
        options: {
            a: "Arif Alvi",
            b: "Imran Khan",
            c: "Nawaz Sharif",
            d: "Zardari",

        },
        answer: "Arif Alvi"
    }
    ,
    {
        id: 5,
        question: "Q5 : How many prayers in a day:",
        options: {
            a: "6",
            b: "5",
            c: "3",
            d: "none",

        },
        answer: "5"
    },
    {
        id: 6,
        question: "Q6 : How many total surah in quran",
        options: {
            a: "113",
            b: "114",
            c: "112",
            d: "111",

        },
        answer: "114"
    },
    {
        id: 7,
        question: "Q7 : The correct sequence of HTML tags for starting a webpage is",
        options: {
            a: "Head, Title, HTML, body",
            b: "HTML, Body, Title, Head",
            c: "HTML, Head, Title, Body",
            d: "HTML, Title , Head,  Body",

        },
        answer: "HTML, Head, Title, Body"
    }
]

// DEFINE VARIBLES
var htmlQues = document.getElementById("htmlQues");
var htmlOptions = document.getElementById("htmlOptions");
var indexNum = 0;
var nextQuizBtn = document.getElementById("nextQuizBtn");
var resultBtn = document.getElementById("resultBtn");
resultBtn.className = "hide";


// FUNCTION FOR QUIZ START
function startQuizNow() {

    // DEFINE VERIBLES
    var name = document.getElementById("name");
    var email = document.getElementById("email");

    // QUI START BTN HIDE AND QUIZ START NOW
    quizStart.className = "hide";
    quiz.className = "quiz-main";

    // USER NAME AND EMAIL PRINT IN QUIZ HEADER
    userName.innerHTML = name.value;
    userEmail.innerHTML = email.value;


    // DYNAMIC QUESTION CHANGE INNERHTML
    htmlQues.innerHTML = questions[indexNum].question;

    // NEW OPTIONS OVERRIDE 
    htmlOptions.innerHTML = "";

    // DYNAMIC OPTIONS CHANGE INNERHTML
    for (var key in questions[indexNum].options) {
        var option = questions[indexNum].options[key]
        htmlOptions.innerHTML += `<li onclick="checkAnswer(this)">${option}</li>`
    }

    // NEXT BTN IS HIDE WHEN OPTIONS IS NOT SELECT
    nextQuizBtn.className = "hide";
}

// NEXT QUIZ FUNCTION

// QUES COUNTER
var currentQuiz = document.getElementById("currentQuiz");
var totalQuiz = document.getElementById("totalQuiz");
totalQuiz.innerHTML = questions.length

// RESULTE COUNTER
var totalCorrectAns = document.getElementById("totalCorrectAns");
var totalAns = document.getElementById("totalAns");


totalAns.innerHTML = questions.length

// NEXT QUES BTN 
function nextQues() {
    if (indexNum < questions.length - 1) {
        indexNum++
        currentQuiz.innerHTML++
        startQuizNow()
    } else {
        nextQuizBtn.className = "hide";
        resultBtn.className = "show";
    }
}

// CHECK ANSWER IS CORRECT OR WRONG
function checkAnswer(ele) {
    var liOptions = htmlOptions.getElementsByTagName("li");
    var ansCheck = ele.innerHTML === questions[indexNum].answer;


    // GET HTML PROGRESS VALUE
    var proValue = document.getElementById("proValue");


    // IF ANSWER CORRECT LI BACKGROUND IS GREEN
    if (ansCheck) {
        console.log("correct!");
        ele.className = "correctAns"
        totalCorrectAns.innerHTML++
    }
    // IF ANSWER INCORRECT LI BACKGROUND IS RED
    else {
        console.log("Wrongans");
        ele.className = "inCorrectAns"

        // OF LOOP FOR CORRECT ANSWER IS GREEN IF CHOSE WRONG ANSWER
        for (var li of liOptions) {
            if (li.innerHTML === questions[indexNum].answer) {
                li.className = "correctAns"
            }
        }
    }

    // 2ND TIME LI DISABLE WHEN OPTIONS IS SELLECT
    for (var li of liOptions) {
        li.style.pointerEvents = "none";
    }

    // NEXT BTN IS SHOW WHEN OPTIONS IS SELECT
    nextQuizBtn.className = "show";


    // CORRECT ANSWER COUNT CONVERT INTO NUMARIC AND SHOW IN INNERHTML
    var totalCorrectAnsElement = document.getElementById("totalCorrectAns");
    var value = totalCorrectAnsElement.textContent;
    var numericValue = parseInt(value, 10); // This will convert '0' to the number 0
    var calculate = numericValue / questions.length * 100
    var decimalValue = calculate.toFixed();
    proValue.innerHTML = decimalValue + " %";
    console.log(decimalValue);


    // VALUE CONVERT TO NUMARIC FOR CONDITIONS
    var num1 = parseInt(decimalValue, 10)

    // SET VARIBLES
    var fail = document.getElementById("fail");
    var pass = document.getElementById("pass");
    var great = document.getElementById("great");
    var excelent = document.getElementById("excelent");

    // GET TRYAGAIN AND END BTN
    var tryAgainBtn = document.getElementById("tryAgainBtn");
    var endQuizBtn = document.getElementById("endQuizBtn");




    // CONDITION FOR RESULT PERCNTAGE
    if (num1 < 69) {
        var failValue = fail.textContent;
        fail.className = "show";
        tryAgainBtn.className = "show";
        fail.innerHTML = failValue;
        console.log(failValue);
    } else if (num1 < 79) {
        var passValue = pass.textContent;
        fail.className = "hide";
        pass.className = "show";
        endQuizBtn.className = "show";
        pass.innerHTML = passValue;
        console.log(passValue);
    } else if (num1 < 89) {
        var greatValue = great.textContent;
        pass.className = "hide";
        great.className = "show";
        tryAgainBtn.className = "show"
        endQuizBtn.className = "show";
        great.innerHTML = greatValue;
        console.log(greatValue);
    } else if (num1 <= 100) {
        var excelentValue = excelent.textContent;
        great.className = "hide";
        excelent.className = "show";
        tryAgainBtn.className = "hide"
        endQuizBtn.className = "show";
        excelent.innerHTML = excelentValue;
        console.log(excelentValue);
    } else {
        fail.innerHTML = "YOU NEED MORE PRACTICE!";
    }
}



// FUNCTION FOR RELSULT CONTAINER
function checkResult() {
    quiz.className = "hide";
    resultDiv.className = "resultContainer";
}




var endQuizBtn = document.getElementById("endQuizBtn")

function tryAgain(){
    resultDiv.className = "hide";
    signupForm.className = "hide";

    quizStartButton()
}

function end() {
    resultDiv.className = "hide";
    signupForm.className = "form";

};


