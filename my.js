let value = +prompt("nhap gia tri kiem tra")
let numbers = [-3, 5, 1, 3, 2, 10];
let flag = false
for (let i = 0; i < numbers.length; i++) {
    if (value === numbers[i]) {
        alert("Value " + numbers[i] + "found at " + i);
    }
}