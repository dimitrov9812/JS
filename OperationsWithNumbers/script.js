//Integer numberbers
var firstNum = 5;
var secondNum = 7;

document.getElementById('text').innerHTML = 'Numbers before incrementing/decrementing: ' +firstNum +' and '+ secondNum;
//incrementing number by 1 
firstNum++;
//decrementing number by 1
secondNum--;
document.getElementById('text2').innerHTML = 'Number one after incrementing is: ' +firstNum +' and number 2 after decrementing is '+ secondNum;

//divide with a remainder 
console.log('Dividing the number with a remainder = ' + (firstNum%2));

//create a function for a simple calculator
function calc() {
    var first = prompt('Choose the first number');
    var second = prompt('Choose the second number');
    var action = prompt('Divide or Multiply the two numbers');
    var result;
    switch(action){
        case 'Multiply':
            alert(first*second);
            break;
        case 'Divide':
            alert(first/second);
            break;
        default:
            alert('Invalid command');
            break;
    }
}
calc();

//Simple function for summing two numbers
function sumNums(num1,num2){
    return num1+num2;
}
var sumResult = sumNums(3,3);
console.log(sumResult);