document.getElementById('formulario').addEventListener('submit', function(event){
    event.preventDefault();
    const peso = Number(event.target.querySelector('#peso').value);
    const altura = Number(event.target.querySelector('#altura').value);
    if(!peso){
        document.getElementById('resultado').innerHTML = "Peso inválido";
        return;
    }
    if(!altura){
        document.getElementById('resultado').innerHTML = "Peso inválido";
        return;
    }
    const imc = peso / (altura * altura);
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
    } else if(imc >= 40){
        resultado = 'Obesidade grau 3';
    }
    document.getElementById('resultado').innerHTML = "O resultado do seu IMC é: " + resultado;
})