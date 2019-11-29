// Запросить у пользователя 10 чисел и подсчитать, сколько он ввел положительных, отрицательных и нулей. При этом также посчитать, сколько четных и нечетных. Вывести статистику на экран. Учтите, что достаточно одной переменной (не 10) для ввода чисел пользователем.
let arr = [];
let positive = [];
let negative = [];
for (i = 0; i != 10; i++) {
  arr.push(+prompt("Числа?"));
}
for (i = 0; i < arr.length; i++) {
  if (arr[i] % 2 == 0) {
    positive.push(arr[i]);
  } else if (arr[i] % 2 != 0) {
    negative.push(arr[i]);
  }
}
document.write(positive);
document.write(negative);
