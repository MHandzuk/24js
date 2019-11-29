// Зациклить калькулятор. Запросить у пользователя 2 числа и знак, решить пример, вывести результат и спросить, хочет ли он решить еще один пример. И так до тех пор, пока пользователь не откажется.
function plus() {
  let num1, num2, result;
  num1 = document.getElementById("n1").value;
  num1 = parseInt(num1);
  num2 = document.getElementById("n2").value;
  num2 = parseInt(num2);
  result = num1 + num2;
  document.getElementById("out").innerHTML = result;
}

function minus() {
  let num1, num2, result;
  num1 = document.getElementById("n1").value;
  num1 = parseInt(num1);
  num2 = document.getElementById("n2").value;
  num2 = parseInt(num2);
  result = num1 - num2;
  document.getElementById("out").innerHTML = result;
}
function add() {
  let num1, num2, result;
  num1 = document.getElementById("n1").value;
  num1 = parseInt(num1);
  num2 = document.getElementById("n2").value;
  num2 = parseInt(num2);
  result = num1 * num2;
  document.getElementById("out").innerHTML = result;
}

function dda() {
  let num1, num2, result;
  num1 = document.getElementById("n1").value;
  num1 = parseInt(num1);
  num2 = document.getElementById("n2").value;
  num2 = parseInt(num2);
  result = num1 / num2;
  document.getElementById("out").innerHTML = result;
}
