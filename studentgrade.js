// A > 79, B - 60 to 79, C -  49 to 59, D - 40 to 49, E - less 40.
function userGrade(userInput) {
    let finalGrade = 'E';
    if (userInput>=0 && userInput <40) {
        finalGrade = 'E';
    } else if (userInput >= 40 && userInput < 49) {
        finalGrade = 'D';
    } else if (userInput >= 49 && userInput <= 59){
        finalGrade = 'C';
    } else if (userInput >= 60 && userInput <= 79){
        finalGrade = 'B';
    } else if (userInput > 79 && userInput <= 100){
        finalGrade = 'A';
    }
    return finalGrade;
}
console.log(userGrade(9));