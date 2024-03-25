
function isPalindrome(str) {
    let reversedStr = reverseString(str);
        if ( str === reversedStr){
            return "It is a Palindrome"
        }
        else {
            return "It is Not palindrome"
        }
}
function reverseString(str) {
    let reversedStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversedStr += str[i];
    }
    return reversedStr;
}

console.log(isPalindrome('madam'));
console.log(isPalindrome('hello')); 