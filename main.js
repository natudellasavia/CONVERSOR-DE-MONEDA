let convert = document.getElementById("convert");
let ingresado = document.getElementById("ingresado");
let divisaUno = document.getElementById("divisaUno");
let divisaDos = document.getElementById("divisaDos");
let txResultado = document.getElementById("txResultado");
let resultado = document.getElementById("resultado");
let pic = document.getElementById("pic");

let calculo = () => {
  let valor = 0;

  if (
    // Condicional para chequear que se haya ingresado un valor y que sea mayor a 0
    (ingresado.checkValidity() == false && ingresado.required) ||
    ingresado.value <= 0
  ) {
    // Alerta porque no se cumple ingreso de valor y que sea mayor a 0
    resultado.value = "ERROR";
    resultado.style.color = "#8B0000";
    pic.src = "/RETO 01/img/alert.png";
    txResultado.innerHTML = "Debe ingresar un valor mayor a 0";
    txResultado.style.color = "black";
  } else {
    if (divisaDos.value == "ARS") {
      //---------- CAMBIA A PESOS ARGENTINOS ----------//
      if (divisaUno.value == "ARS") {
        // No se puede entre dos divisas iguales
        resultado.value = "ERROR";
        resultado.style.color = "#8B0000";
        pic.src = "/RETO 01/img/alert.png";
        txResultado.innerHTML = "Las divisas deben ser diferentes";
        txResultado.style.color = "black";
      } else {
        if (divisaUno.value == "USD") {
          // Va segun el tipo de divisa seleccionado
          valor = 1043; // Valor del tipo de cambio contra peso argentino
          tDivisa = "USD"; // Para imprimir el tipo de divisa en el mensaje
          txResultado.style.color = "#2c5545"; // Cambia el color del texto
          pic.src = "/RETO 01/img/usd.png"; // Cambia la imagen
        } else if (divisaUno.value == "EUR") {
          valor = 1073;
          tDivisa = "EUR";
          txResultado.style.color = "#20214f";
          pic.src = "/RETO 01/img/euro.png";
        }

        let cantidadIngresada = parseInt(ingresado.value); // cantidadIngresada es una variable local para guardar en entero el valor ingresado
        let result = cantidadIngresada * valor; // Multiplico la variable local por el valor segun el tipo de divisa
        // Muesto en pantalla imagen y texto
        txResultado.innerHTML =
          cantidadIngresada + " " + tDivisa + " son " + result + " ARS";
        // Muestro en el recuadro el monto
        resultado.style.color = "#212121";
        resultado.value = result;
      }
    } else if (divisaDos.value == "EUR") {
      //---------- CAMBIA A EUROS ----------//
      if (divisaUno.value == "EUR") {
        // No se puede entre dos divisas iguales
        resultado.value = "ERROR";
        resultado.style.color = "#8B0000";
        pic.src = "/RETO 01/img/alert.png";
        txResultado.innerHTML = "Las divisas deben ser diferentes";
        txResultado.style.color = "black";
      } else {
        if (divisaUno.value == "USD") {
          // Va segun el tipo de divisa seleccionado
          valor = 0.97; // Valor del tipo de cambio contra euro
          tDivisa = "USD"; // Para imprimir el tipo de divisa en el mensaje
          txResultado.style.color = "#2c5545"; // Cambia el color del texto
          pic.src = "/RETO 01/img/usd.png"; // Cambia la imagen
        } else if (divisaUno.value == "ARS") {
          valor = 0.00093;
          tDivisa = "ARS";
          txResultado.style.color = "#20214f";
          pic.src = "/RETO 01/img/ars.png";
        }

        let cantidadIngresada = parseInt(ingresado.value); // cantidadIngresada es una variable local para guardar en entero el valor ingresado
        let result = cantidadIngresada * valor; // Multiplico la variable local por el valor segun el tipo de divisa
        // Muesto en pantalla imagen y texto
        txResultado.innerHTML =
          cantidadIngresada + " " + tDivisa + " son " + result + " EUR";
        // Muestro en el recuadro el monto
        resultado.style.color = "#212121";
        resultado.value = result;
      }
    } else if (divisaDos.value == "USD") {
      //---------- CAMBIA A DOLAR ----------//
      if (divisaUno.value == "USD") {
        // No se puede entre dos divisas iguales
        resultado.value = "ERROR";
        resultado.style.color = "#8B0000";
        pic.src = "/RETO 01/img/alert.png";
        txResultado.innerHTML = "Las divisas deben ser diferentes";
        txResultado.style.color = "black";
      } else {
        if (divisaUno.value == "EUR") {
          // Va segun el tipo de divisa seleccionado
          valor = 1.03; // Valor del tipo de cambio contra euro
          tDivisa = "EUR"; // Para imprimir el tipo de divisa en el mensaje
          txResultado.style.color = "#2c5545"; // Cambia el color del texto
          pic.src = "/RETO 01/img/euro.png"; // Cambia la imagen
        } else if (divisaUno.value == "ARS") {
          valor = 0.00096;
          tDivisa = "ARS";
          txResultado.style.color = "#20214f";
          pic.src = "/RETO 01/img/ars.png";
        }

        let cantidadIngresada = parseInt(ingresado.value); // cantidadIngresada es una variable local para guardar en entero el valor ingresado
        let result = cantidadIngresada * valor; // Multiplico la variable local por el valor segun el tipo de divisa
        // Muesto en pantalla imagen y texto
        txResultado.innerHTML =
          cantidadIngresada + " " + tDivisa + " son " + result + " USD";
        // Muestro en el recuadro el monto
        resultado.style.color = "#212121";
        resultado.value = result;
      }
    }
  }
};

convert.addEventListener("click", calculo);
