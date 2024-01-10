let inputs = document.querySelectorAll('.input')

let mensagemCampoObrigatorio = document.getElementsByClassName('mensagem-campo-obrigatorio')

let botaoEnviar = document.querySelector('button')

let formulario = document.getElementById('formulario')

function verificarInputs(retorno) {
    for (i = 0; i < inputs.length; i++) {
        if (inputs[i].value == '') {
            inputs[i].classList.remove('ajustar-gap')
            mensagemCampoObrigatorio[i].hidden = false;
            inputs[i].classList.add('borda-vermelha-input')
            inputs[i].classList.remove('borda-verde-input')
        } else if (inputs[i].value != '') {
            mensagemCampoObrigatorio[i].hidden = true;
            inputs[i].classList.remove('borda-vermelha-input')
            inputs[i].classList.add('ajustar-gap')
            retorno = true
        }
    }
}

function esconderMensagemCampoObrigatorio(input1, input2, input3, input4){

}

botaoEnviar.addEventListener('click', () => {
    verificarInputs()
})

function verificarSeFoiDigitado() {
    for (i = 0; i < inputs.length; i++) {
        if (inputs[i].value.trim) {
            inputs[i].classList.remove('ajustar-gap')
            mensagemCampoObrigatorio[i].hidden = false;
            inputs[i].classList.add('borda-vermelha-input')
        }
    }
}

inputs.forEach(function (input) {
    input.addEventListener('input', () => {
        if (input.value.trim !== "") {
            input.classList.add('borda-verde-input')
            console.log(inputs.nextElement)
        } else {
            input.classList.remove('borda-verde-input')
        }
    })
})

Array.from(inputs).forEach((elemento, indice) =>{
    
})
