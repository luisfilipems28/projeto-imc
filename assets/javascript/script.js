function calcular() {
    let nome = document.getElementById("txtn").value;
    let altura = document.getElementById("txta").value;
    let peso = document.getElementById("txtp").value;
    let resultado = document.getElementById("res");

    if (nome !== "" && altura !== "" && peso !== "") {
        //nome.value é posível ser utilizado diretamente na declaração da variável como por exemplo: getElementById("txtn").value;
        let valorIMC = (peso / (altura * altura)).toFixed(2);

        let classificação = "";

        if (valorIMC < 18.5) {
            classificação = "abaixo do peso.";
        } else if (valorIMC < 25) {
            classificação = "com seu peso ideal. Parábens!";
        } else if (valorIMC < 30) {
            classificação = "levemente acima do peso";
        } else if (valorIMC < 35) {
            classificação = "com obesidade grau I";
        } else if (valorIMC < 40) {
            classificação = "com obesidade grau II";
        } else {
            classificação = "com obesidade grau III. Cuidado";
        }

        resultado.textContent = `${nome},seu IMC é ${valorIMC}, você está ${classificação}!`;
    } else {
        resultado.textContent = "Preencha todos os campos!!";
    }
}
