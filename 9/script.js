// Вывести таблицу умножения для всех чисел от 2 до 9. Каждое число необходимо умножить на числа от 1 до 10.
document.write("<h1>Таблиця множення</h1>");

for (j = 1; j <= 10; j++) {
  document.write("<div style='float: left; width: 70px;'>");
  for (i = 2; i <= 9; i++) {
    document.write(i + "*" + j + "=" + i * j + "<br>");
  }
  document.write("</div>");
}
