function calcular(){
    var resultado = document.getElementById("resultado");
    var numero = document.getElementById("numero").value;
    var backButton = document.getElementById("backButton")
    if(numero == "" || numero==null){
        alert("Digite Um Número 1 a 1000.");
        return false;
    }

    resultado.innerHTML = '';
    for(let i = 1; i < 11; i++){
        resultado.innerHTML +=  numero + " / " + i + " = " + Math.round(numero/i) + "<br>"
    }

    backButton.style.display = "inline-block";

}