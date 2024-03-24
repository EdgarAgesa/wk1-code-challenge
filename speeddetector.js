// If the speed is less than 70, it should print “Ok”
// for every 5 km/s above the speed limit (70), it should give the driver one demerit point
// print the total number of demerit points.
// If the driver gets more than 12 points, the function should print: “License suspended”.


function speedDector(speedInput){
    let response = "";
    let demerits;

    if (speedInput < 0){
        response = "Null";
    }else if(speedInput >= 0 && speedInput <=70){
        response = "Ok";
    }else{
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