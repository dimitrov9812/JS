//normal string - acts as an array
var car = 'renault';
//editing a string to be on two lines
var cars= 'renault\nclio';
//printing the string on the console
console.log(car);
//prints the length of the string - doesn't start from zero
console.log(car.length);
//print the index of the the letter you entered in the brackets or the first letter of a word you entered in but starts from zero
console.log(car.indexOf('a'));
//slice is used for slising a word from index to index
console.log(car.slice(2,4));
//replace is used for replacing part of the word with something else
console.log(car.replace('ren','clean'));
//toUpperCase and toLowerCase transform the word 
console.log(car.toLowerCase());
console.log(car.toUpperCase());
//charAt(index) return the char at the current index
console.log(car.charAt(6));
console.log(car[6]);    //can also be done this way


//Splitting a long string by something
var longString = 'renault,bmw,mercedes,opel';
var longStringArray = longString.split(',');
for (const key of longStringArray) {
        console.log(key);
    }
 
