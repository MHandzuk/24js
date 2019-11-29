var a = prompt("введіть початок діапазону", "");
var n = prompt("введіть кінець діапазону", "");
var sum = 0;

while (a < n) {
  a++;
  sum += a;
}

alert(sum);
