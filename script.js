let name = prompt("Введите ваше имя:", "Гость");

if (name == null || name == "") {
  name = "Гость";
}

alert("Welcome, " + name + "!");