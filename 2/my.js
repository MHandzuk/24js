// Запросить 2 числа и найти только наибольший общий делитель.
let a = parseInt(prompt("Введіть перше число"));
let b = parseInt(prompt("Введіть друге число"));

let c = Math.min(a, b);
for (; c >= 1; c--) {
  if (a % c == 0 && b % c == 0) {
    console.log("C = ", c);
    break;
  }
}
alert(`'Найбільший спільний дільник': ${c}"`);
