
const form = document.getElementById('form-user');

form.addEventListener('submit', function(e) {
    e.preventDefault();




let numeroA = parseFloat(document.getElementById("numeroA").value);
let numeroB = parseFloat(document.getElementById("numeroB").value);

let mensagem = document.getElementById("mensagem")


if (numeroB > numeroA) {
    mensagem.textContent = "Formulário válido! Campo B é maior que Campo A"
} 
else {
    mensagem.textContent = "Formulário inválido: Campo B deve ser maior que Campo A"
}

});
