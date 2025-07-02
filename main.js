let numbers = [1, 2, 3, 4, 5];
numbers.forEach((number, index, array) => {
    console.log(`Element ${number} is at index ${index} in array ${array}`);
});


function eksekusi(arr, operation) {
    let result = [];
    for(let i = 0; i < arr.length; i++) {
        result.push(operation(arr[i]))
    }
    return result;
}

function double(x) {
    return x * 2;
}

let number = [1, 3, 4, 6, 7, 10]
let doubledNumber = eksekusi(number, double);
console.log(doubledNumber)