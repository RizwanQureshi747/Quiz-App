// DEFINE VARIBLES
var signupForm = document.getElementById("signupForm");
var quizStart = document.getElementById("quizStart");
var formSubmitBtn = document.getElementById("formSubmitBtn");
var quiz = document.getElementById("quiz");
var userName = document.getElementById("userName");
var userEmail = document.getElementById("userEmail");


// DEFINE ERRORS ELEMENTS
var errorName = document.getElementById("errorName");
var errorEmail = document.getElementById("errorEmail");
var errorID = document.getElementById("errorID");
var errorCourse = document.getElementById("errorCourse");
var errorTeacher = document.getElementById("errorTeacher");
var errorShedule = document.getElementById("errorShedule");

var course = document.getElementById("course");
var coursePopup = document.getElementById("coursePopup");
var inputParent = document.getElementById("inputParent");
var parentToChild = inputParent.firstElementChild
// parentToChild = "2313215"
parentToChild.value.textContent = course.innerHTML
console.log(parentToChild);
coursePopup.className = "hide";



function popupCourse(ele){
    // console.log(ele.parentNode.parentElement.firstElementChild);
    // var input = ele.parentNode.parentElement.firstElementChild;
    // console.log(input.value);
    // input.innerHTML = ""
    coursePopup.className = "options";

}

function selectPopup(ele){
    console.log(ele.textContent);
    parentToChild.innerHTML = ele.textContent;
    // console.log(parentToChild);
    coursePopup.className = "hide"
}



function quizStartButton() {

    coursePopup.className = "hide";


    // DEFINE VARIBLES
    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var student = document.getElementById("student");
    var course = document.getElementById("course");
    var teacher = document.getElementById("teacher");
    var shedule = document.getElementById("shedule");
    
    // DEFINE ERROR CLASS NAME HIDE
    errorName.className = "hide";
    errorEmail.className = "hide";
    errorID.className = "hide";
    errorCourse.className = "hide";
    errorTeacher.className = "hide";
    errorShedule.className = "hide";


// CUNDITIONS FOR INPUT VALUES IS EMPTY
    if (!name.value) {
        errorName.className = "errorShow";
        return
    }
    if (!email.value) {
        errorEmail.className = "errorShow";
        return
    }
    if (!student.value) {
        errorID.className = "errorShow";
        return
    }
    if (!course.value) {
        errorCourse.className = "errorShow";
        return
    }
    if (!teacher.value) {
        errorTeacher.className = "errorShow";
        return
    }
    if (!shedule.value) {
        errorShedule.className = "errorShow";
        return
    }

// FORM HIDE AND QUIZ START BTN SHOW
    signupForm.className = "hide";
    quizStart.className = "quizStartBtn";
}

