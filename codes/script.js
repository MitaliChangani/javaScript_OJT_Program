// print numbers form 1 to 100
for(let i=1; i<=100; i++){
    console.log(i);
}

//  check if a number is even or odd

let number = parseInt(prompt("Enter a number:"));

if(isNaN(number)) {  // isNaN() checks whethere the input is NaN or not
    console.log("Invalid Input. Please enter a valid number.");
}
else if (number % 2 === 0) {
    console.log(`${number} is even.`);
    // console.log("number"+number+"is even");  we can also print the input like this
}else{
    console.log(`${number} is odd.`);
}

// Reverse string 
let str = "Mitali";
let revstr;

for(let s=str.length; s>=0; s--){
    revstr += str[s];
}
console.log("Reverse String is:"+revstr)

//  count vowels in string


function countVowel(){
    let vowels = "aeiouAEIOU";
    let str = prompt("Enter a string:");    
    let count = 0;
    for(let i=0; i<str.length; i++){
        if(vowels.includes(str[i])){
            count++;
        }
    }
    console.log("Number of vowels in the string is: " + count);

}
countVowel();


//  find the largest number in array

let arr = [1, 2, 3, 4, 55, 6, 7, 8, 9, 10];
function findLargest(arr) {
    let largest = arr[0];
    for(let i=1; i<arr.length; i++){
        if(arr[i] > largest){
            largest = arr[i];
        }
    }
    console.log("largest number in array is:"+largest);
}
findLargest(arr);


//  check whether string is palindrome oe not

function isPalindrome(str) {
    let reversedStr = str.split('').reverse().join('');
    console.log("Reversed String is: " + reversedStr);
    if (str === reversedStr) {
        console.log(`${str} is a palindrome.`);
    } else {
        console.log(`${str} is not a palindrome.`);
    }
    
}
let inputStr = prompt("Enter a string to check if it's a palindrome:");
isPalindrome(inputStr);


// take two input by prompt and print with alert

let n1 = parseInt(prompt("Enter first number:"));
let n2 = parseInt(prompt("Enter second number:"));

let result = n1 + n2;
alert("The sum of " + n1 + " and " + n2 + " is: " + result);