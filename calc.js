function somar() {

    var numberOne = document.getElementById("numberOne").value;    
    var numberTwo = document.getElementById("numberTwo").value;
    
    var valor1 = parseFloat(numberOne);
    var valor2 = parseFloat(numberTwo);
    
    var sum = valor1 + valor2;
    
    document.getElementById('resultado').textContent = 'Resultado: ' + sum;
    }