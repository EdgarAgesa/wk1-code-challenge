// If the speed is less than 70, it should print “Ok”
// for every 5 km/s above the speed limit (70), it should give the driver one demerit point
// print the total number of demerit points.
// If the driver gets more than 12 points, the function should print: “License suspended”.


function speedDector(speedInput){
    let response = "";
    let demerits;
    //Checks if speedInput is less than zero.
    if (speedInput < 0){
        response = "Null";
    }
   //Checks if speedInput is greater than zero but less than 70. 
    else if(speedInput >= 0 && speedInput <=70){
        response = "Ok";
    }
    //Calculate the number of demerit points for every 5km/s above the speed limit 70.
    else{
        let perPoint = 5;
        let diff = speedInput - 70;
        demerits = Math.floor(diff / perPoint);
        response = "Points: " + demerits;
        if (demerits > 12){
            response = "License suspended" + demerits;
        }
    }
    return response;
}
console.log(speedDector(35));