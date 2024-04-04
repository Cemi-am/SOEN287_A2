function addNumbers(numbers) {
    let sum = 0;
    for (i = 0; i<numbers.length; i++) {
        sum += numbers[i]
    }
    return sum;
}

function findMaxNumber() {
    let max = arguments[0];
    for(i = 0; i<arguments.length; i++) {
        if(arguments[i] > max) {
            max = arguments[i];
        }
    }
    return max;
}

function addOnlyNumbers(mixedArray) {
    let sum = 0;
    for(i = 0; i<mixedArray.length; i++) {
        if (!isNaN(parseFloat(mixedArray[i]))) {
            sum += parseFloat(mixedArray[i]);
        }
        
    }
    return sum;
}

function getDigits(s) {
    let digitString = "";
    for(i = 0; i<s.length; i++) {
        if (!s[i].isNaN && s[i] >= 0 && s[i] <= 9) {
            digitString += s[i];
        }
    }
    return digitString;
}

function reverseString(s1) {
    let s2 = "";
    for(i = s1.length-1; i>=0; i--) {
        s2 += s1[i];
    }
    return s2;
}

function getCurrentDate() {
    let currentDate = new Date();
    const dayNames = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const monthNames = ["Jan","Feb","Mar","Apr","Jun","Jul","Aug","Sept","Oct","Nov","Dec"];
    return (dayNames[currentDate.getDay()] + ", " + monthNames[currentDate.getMonth()] +
    " " + currentDate.getDay() + ", " + currentDate.getFullYear());
}