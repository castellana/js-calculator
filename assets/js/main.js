// rstelle mit HTML, CSS und JavaScript einen Taschenrechner, der die Grundrechenarten Addition, Subtraktion, Multiplikation und Division beherrscht.

// Die Eingabe findet über die Tastatur des Taschenrechners (Buttons) statt.

const buttons = document.querySelectorAll('button');

const result = document.querySelector('#result');

// add eventListener to each button
buttons.forEach(function(button) {
  button.addEventListener('click', calculate);
});


function calculate(event) {
  
  const clickedButtonValue = event.target.value;

  if (clickedButtonValue === '=') {
    //wenn es noch nichts im Result gibt:
    if (result.value !== '') {
      result.value = eval(result.value);
    }
  } else if (clickedButtonValue === 'AC') {
    // reset
    result.value = '';
  } else {
    // in alle andere Fälle, addier zu den Ergenisse
    result.value += clickedButtonValue;
  }
}






// function getNumber(number)
// {       
//   document.getElementById("result").innerHTML += number;
// }

// function getSign(sign) {
//   document.getElementById("result").innerHTML += sign;
// }

// function reset()
// {
//   document.getElementById("result").innerHTML = "";  
// }

// //function botondel()
// ///{
// //  var aux //=document.getElementById("pantalla").innerH//TML;
//   //document.getElementById("pantalla").innerHTML = aux.substring(0,aux.lenght-1);
// //}

// function calculate() {
//   let res= eval(document.getElementById("result").innerHTML);
  
//   let a = res.toFixed(3);
//   document.getElementById("result").innerHTML = a;
// }