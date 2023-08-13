var buttons = document.getElementsByClassName('button');
var display = document.getElementById('display');

var x = 0;
var operator = null;
var y = null;

for (var i = 0; i < buttons.length; i++) {

  buttons[i].addEventListener('click', function () {
    var value = this.getAttribute('key_value');

    if (value == '/' || value == '*' || value == '-' || value == '+') {

      if (display.textContent === '') {
        operator = value;
      } else if (operator != null) {
        operator = value;

      } else {
        x = parseFloat(display.textContent);
        operator = value;
        display.innerHTML = null;
      }


    } else if (value == '=') {
      if (operator === null) {

        return;

      } else if (display.textContent === '' && operator !== null) {

        display.innerHTML = x;

      } else if (display.textContent == '' && x === 0) {

        display.innerHTML = 0;

      } else {

        y = parseFloat(display.textContent);

        if (x === 0 && operator === '/' && y === 0) {
          display.innerHTML = 'ERROR';

        } else {
          display.innerHTML = parseFloat(eval(x + " " + operator + " " + y).toFixed(7));
        }

        x = 0;
        operator = null;
        y = null;

      }


    } else if (value == 'ac') {
      x = 0;
      display.innerHTML = '';
      operator = null;
      y = null;



    } else if (value == 'x') {

      var temp = display.innerHTML;
      display.innerHTML = temp.substring(0, (temp.length - 1));



    } else if (value == '%') {

      var temp = display.innerHTML;
      display.innerHTML = parseFloat(eval(temp * 0.01).toFixed(7));



    } else {
      display.innerHTML += value;
    }

  });
};
