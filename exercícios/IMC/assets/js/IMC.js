document.getElementById('formulario').addEventListener('submit', function(event){
    event.preventDefault();
    let peso = document.getElementById('peso').value;
    let altura = document.getElementById('altura').value;
    
    let imc = peso / (altura * altura);
    let resultado;
    if(imc < 19){
        resultado = 'Abaixo do peso!';
    } else if (imc < 25) {
        resultado = 'Peso normal!';
    } else if(imc < 30) {
        resultado = 'Sobrepeso';
    } else if(imc < 35){
        resultado = 'Obesidade grau 1';
    } else if(imc < 40){
        resultado = 'Obesidade grau 2';
    } else{
        resultado = 'Obesidade grau 3';
    }
    document.getElementById('resultado').innerHTML = "O resultado do seu IMC é: " + resultado;
})