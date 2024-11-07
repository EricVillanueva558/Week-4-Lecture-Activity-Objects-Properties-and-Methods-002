let numbers = [10, 20, 30, 40, 50];

console.log(numbers[0]); 

console.log(numbers[numbers.length - 1]); 

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

numbers.push(60, 70, 80, 90, 100);


console.log(numbers);

numbers.pop();
numbers.pop();
numbers.pop();


console.log(numbers); 


let myString = "Learning JavaScript arrays!";

console.log(myString.length); 
