let profits = [12500, 30000, 20000, 18000, 32000, 45000, 26000];
// Task a

let totalProfit = 0;

for(let i =0; i < profits.length ; i++){
    totalProfit += profits[i];
}

let numberoOfProfits = profits.length;

let averageProfit  = totalProfit/numberoOfProfits;

console.log(averageProfit);



//Task b

let daysAbove30k = profits.filter((profit) =>{
    return profit > 30000;
})

let countDaysAbove30k = daysAbove30k.length;

console.log("Total days where profit is above 30k is " + countDaysAbove30k);



//Task c

let maxProfit = Math.max.apply(null, profits);
console.log(maxProfit);


//Task d
let minProfit = Math.min.apply(null, profits);
let minProfitIndex = profits.indexOf(minProfit);

let minProfitDay = minProfitIndex+1;
console.log(minProfitDay);


// Task e

let indexOfProfit_18k = profits.indexOf(18000);

let isProfit_18k = false;
let dayOfProfit_18k;
if(indexOfProfit_18k !== -1){
    isProfit_18k = true;
     dayOfProfit_18k = indexOfProfit_18k + 1

}

console.log(isProfit_18k);

// Task f

let isProfitGeater_10k = false;

for(let i = 0 ; i < profits.length-1; i++){
    if(Math.abs(profits[i+1] - profits[i]) >= 10000 ){
        isProfitGeater_10k = true;
        break;
    }
    
}

console.log(isProfitGeater_10k);


// Task g

let longestCount = 0;
let currentCount = 0;

for(let i = 0 ; i <  profits.length; i++ ){
    if(profits[i] > 20000){
            currentCount++;

    }

    else{
        longestCount = Math.max(longestCount, currentCount);
        currentCount = 0;
        
    }
}
longestCount = Math.max(longestCount, currentCount);

console.log(longestCount);

