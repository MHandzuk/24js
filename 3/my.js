let n = prompt("Введіть число!");
(divisor = []), (i = 1);

while (i < n) {
  if (n % i == 0) divisor.push(i);

  i = i + 1;
}

alert(divisor);
