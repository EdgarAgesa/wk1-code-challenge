// Write a program whose major task is to calculate an individual’s Net Salary by getting the inputs of basic salary


function tax(incomeSalary){
    
    if(incomeSalary > 0 && incomeSalary <= 24000){
        grossTax = (incomeSalary*0.10);
        amountTaxed = incomeSalary - grossTax;
    }else if (incomeSalary >= 24001 && incomeSalary <= 32333){
        rated = (incomeSalary - 24000) * 0.25;
        grossTax = 2400 + rated
        amountTaxed = incomeSalary-grossTax;
    }else if (incomeSalary >= 32334 && incomeSalary <= 500000){
        rated = (incomeSalary - 32333) * 0.30;
        grossTax = 2400 + 2083.25 + rated
        amountTaxed = incomeSalary-grossTax;
    }else if (incomeSalary >= 500001 && incomeSalary <= 800000){
        rated = (incomeSalary - 500000) * 0.325;
        grossTax = 2400 + 2083.25 + 140300.1 + rated
        amountTaxed = incomeSalary-grossTax;  
    }else if(incomeSalary > 800000){
        rated = (incomeSalary - 800000) * 0.35;
        grossTax = 2400 + 2083.25 + 140300.1 + 97500 + rated
        amountTaxed = incomeSalary-grossTax;
    }
    return amountTaxed;
}
console.log(tax(90000))