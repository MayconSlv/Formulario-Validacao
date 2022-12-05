const form = document.getElementById('form')

form.addEventListener("submit", (event) => {
    event.preventDefault()

    inputValidate()
})


var smalls = document.querySelectorAll('.error')
var campos = document.querySelectorAll('.form__campo input')

function setError(index, message) {
    smalls[index].style.display = 'block'
    smalls[index].innerHTML = message
    campos[index].style.border = '1px solid #e83131'
}

function validateError(index) {
    smalls[index].style.display = 'none'
    campos[index].style.border = '1px solid white'
}


function inputValidate() {
    const campos = document.querySelectorAll('.form__campo input')
    const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

    //validando nome
    if(campos[0].value.length <= 8) {
        setError(0, 'O nome precisa ter 8 caracteres')
    } else {
        validateError(0)
    }

    //validando email
    if(emailRegex.test(campos[1].value)) {
        validateError(1)
    } else {
        setError(1, 'Digite um email válido')
    }

    //validando senha
    if(campos[2].value.length <= 10) {
        setError(2, 'A senha precisa ter 10 caracteres')
    } else {
        validateError(2)
    }

    // validando confirmação de senha
    if(campos[2].value != campos[3].value || campos[3].value.length <= 10) {
        setError(3, 'A senha está incorreta')
    } else {
        validateError(3)
    }
}