
//memoization and tabulation are two different flavor of dynamic-programming

//memoization
//it still be not optimal cuz sometime it will face maximum callstack size if number is 10000
const fibonaciWithMemoization = (number, memo = []) => {
 if (!Number.isInteger(number) || number < 0) throw new Error("Invalid input");
 if (number === 1 || number === 2) return 1;
 if (memo[number]) return memo[number];
 const result = fibonaciWithMemoization(number - 1, memo) + fibonaciWithMemoization(number - 2, memo);
 memo[number] = result;
 return result;
}

//new solution
//tabulation
const tabulatedFibonaci = number => {
 if (!Number.isInteger(number) || number < 0) throw new Error("Invalid input");
 if (number === 1 || number === 2) return 1;
 const fibNums = [0, 1, 1];
 for (let i = 3; i <= number; i++) {
  fibNums[i] = fibNums[i - 1] + fibNums[i - 2];
 }
 return fibNums[number];
}

// console.log(fibonaciWithMemoization(4));
console.log(tabulatedFibonaci(500));