let usuarios = []

const addCadastro = () => {
    let email = document.getElementById('email').value
    let usuario = document.getElementById('usuario').value
    let senha = senha.getElementById('senha').value
    let divErro = document.querySelector('.div-erro')

    if (nome == "" || email == "" || senha == ""){
        divErro.style.display.display = 'block'

    } else {
        divErro.style.display.display = 'none'
    }

    if (localStorage.getItem('usuario') !=null){
        usuario = JSON.parse(localStorage.getItem('usuario'))
        console.log(usuarios)
    }

    usuarios.push9([nome, email, senha])
    localStorage.setItem('usuario', JSON.stringify(usuarios))
    document.getElementById('none').value =""
    document.getElementById('email').value =""
    document.getElementById('senha').value =""
}