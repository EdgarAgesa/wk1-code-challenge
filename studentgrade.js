const marks= prompt("Enter your grade: ")
userGrade(marks)

//The code should print the grades according to the following scores.
// A > 79, B - 60 to 79, C -  49 to 59, D - 40 to 49, E - less 40.
function userGrade(userInput) {
    let finalGrade = 'E';
    if (userInput>=0 && userInput <40) {//Checks if user input is greater than 0 but less than 40.
        finalGrade = 'E';
    } else if (userInput >= 40 && userInput < 49) {//Checks if user input is greater than 40 and less than 49.
        finalGrade = 'D';
    } else if (userInput >= 49 && userInput <= 59){//Checks if user input is greater than 49 and less than 59.
        finalGrade = 'C';
    } else if (userInput >= 60 && userInput <= 79){//Checks if user input is greater than 60 and less than 79.
        finalGrade = 'B';
    } else if (userInput > 79 && userInput <= 100){//Checks if user input is greater than 79 and less than 100.
        finalGrade = 'A';
    }
    return finalGrade;
}
console.log(userGrade(90));
document.getElementById("response").innerHTML =finalGrade;