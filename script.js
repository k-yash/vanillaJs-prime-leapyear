var textBox = document.querySelector("#inpt");
var button = document.querySelector("#btn");
var output = document.querySelector("#output");

var textBox2 = document.querySelector("#inpt2");
var button2 = document.querySelector("#btn2");
var output2 = document.querySelector("#output2");

button.addEventListener("click", function clickEventHandler() {
  var input = textBox.value;
  if (!isNaN(input) && input !== "") {
    if ((input % 4 === 0 && input % 100 !== 0) || input % 400 === 0) {
      output.innerHTML = "Year is leap year";
    } else {
      output.innerHTML = "Year is not a leap year";
    }
  } else if (input === "") {
    output.innerHTML = "";
  } else {
    output.innerHTML = "Enter a valid year";
  }
});

button2.addEventListener("click", () => {
  var input2 = textBox2.value;
  var flag = 0;
  if (!isNaN(input2) && input2 !== "") {
    for (let i = 2; i <= input2 / 2; i++) {
      if (input2 % i === 0) {
        flag = 1;
        break;
      }
    }
    if (flag === 1) {
      output2.innerHTML = "Number is not prime";
    } else {
      output2.innerHTML = "Number is prime";
    }
  } else if (input2 === "") {
    output2.innerHTML = "";
  } else {
    output2.innerHTML = "Enter a valid date";
  }
});
