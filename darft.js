//? Problem 1

function problem1() {
    const sum = sumArray([1, 2, 3, 4, 5]);

function sumArray(arr) {
    return arr.reduce(function(sum,num) {
        return sum+num
    },0)
}
console.log(sum);
}
problem1()

// // *******************************************************************************************
// //? Problem 2

function problem2 () {
    const maxNumber = findMaxNumber([10, 5, 8, 20, 3]);
function findMaxNumber(arr) {
    return arr.length === 0? undefined : Math.max(...arr)
}

console.log(maxNumber); 
}
problem2()

// // *******************************************************************************************
// //? Problem 3

function Problem3() {
    const oddNumbers = filterOddNumbers([1, 2, 3, 4, 5]);
function filterOddNumbers(arr) {
    return arr.filter(function(num) {
        return num % 2 !== 0
    })
}

console.log(oddNumbers); //* Output: [1, 3, 5]
}
Problem3()

// // *******************************************************************************************
// //? Problem 4

const isPalindromeResult = isPalindrome('radar');
const isNonPalindromeResult = isPalindrome('hello');

console.log(isPalindromeResult); //* Output: true
console.log(isNonPalindromeResult); //* Output: false

// // *******************************************************************************************
// //? Problem 5

function Problem5 () {
    const missingNumber = findMissingNumber([1, 2, 3, 5, 6]);
function findMissingNumber(arr) {
    const n = arr.length+1
    const expectedsum = (n*(n+1))/2
    const actualsum = arr.reduce(function(sum,num){
        return sum+num 
        },0)
    return expectedsum-actualsum
}
console.log(missingNumber); //* Output: 4
}
Problem5()

// // *******************************************************************************************
// //? Problem 6

function problem6 () {
    const duplicateNumbers = findDuplicates([1, 2, 3, 2, 4, 5, 4, 6]);

function findDuplicates(arr) {
    const seen = {}
    const duplicate = []
    for (const num of arr) {
        if (seen[num]) {
            duplicate.push(num)
        } else {
            seen[num] = true
        }
    }
    return duplicate
}
console.log(duplicateNumbers); //* Output: [2, 4]
}
problem6()
