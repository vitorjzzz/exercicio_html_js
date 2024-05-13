
function validarFormulario() {
    var campoA = document.getElementById("campoA").value;
    var campoB = document.getElementById("campoB").value;

    // Convertendo os valores para números
    campoA = parseFloat(campoA);
    campoB = parseFloat(campoB);

    // Verificando se campo B é maior que campo A caso não seja passa pelo else
    if (campoB > campoA) {
        document.getElementById("mensagem").innerHTML = "Formulário válido!";
    } else {
        document.getElementById("mensagem").innerHTML = "Formulário inválido! O número B deve ser maior que o número A.";
    }

    // Evitando o envio do formulário
    return false;
}
