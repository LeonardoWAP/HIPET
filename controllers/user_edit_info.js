import {findPostById, findUserById } from '../diplomatic/https_client.js'

export function info_elements(userId){

    let data = findUserById(userId);
    
    data.then(data => {
        let formContainer = document.getElementById("register-form")
        let formName = document.getElementById("Name").firstElementChild
        let formNickname = document.getElementById("UserName")
        let formEmail = document.getElementById("Email")
        let formPhoneNumber = document.getElementById("PhoneNumber")
        let formCpf = document.getElementById("Cpf")

        console.log(formName)
     
        var name = data.user.name
        var nickname = data.user.nickname
        var email = data.user.email
        var phoneNumber = data.user.phone_number
        var cpf = data.user.document

  

        // formName.innerHTML += name
        // formNickname.innerHTML += nickname
        // formEmail.innerHTML += email
        // formPhoneNumber.innerHTML += phoneNumber
        // formCpf.innerHTML += cpf

        let qualquercoisa= ` 
        <form class="register-form">
            <div class="create-post-form-input form-floating register-form" id="Name">
                <input type="text" class="form-control title" id="floatingInputGroup1 " placeholder="Nome">
                <label for="floatingInputGroup1">${name}</label>
            </div>

			<div class="create-post-form-input form-floating register-form" id="UserName">
                <input type="text" class="form-control" id="floatingInputGroup1 " placeholder="Nome de Usuário" readonly>
                <label for="floatingInputGroup1">${nickname}</label>
            </div>

			<div class="create-post-form-input form-floating register-form-input input-large" id="Email">
                <input type="email" class="form-control"  id="floatingInputGroup1 " placeholder="Email" >
                <label for="floatingInputGroup1">${email}</label>
            </div>

			<div class="create-post-form-input form-floating register-form-input" id="PhoneNumber">
                <input type="text" id="celular" name="celular" class="form-control" id="floatingInputGroup1 " placeholder="telefone">
                <label for="floatingInputGroup1">${phoneNumber}</label>
            </div>

			<div class="create-post-form-input form-floating register-form-input" id="Cpf">
                <input type="text" id="cpf" name="cpf" class="form-control" id="floatingInputGroup1 " placeholder="cpf" readonly>
                <label for="floatingInputGroup1">${cpf}</label>
            </div>

            <div class="create-post-form-input form-floating register-form-input input-large" id="CurrentPassword">
                <input type="password" class="form-control"  id="floatingInputGroup1 " placeholder="password" >
                <label for="floatingInputGroup1">Senha atual</label>
            </div>

			<div class="create-post-form-input form-floating register-form-input input-large" id="NewPassword">
                <input type="password" class="form-control"  id="floatingInputGroup1 " placeholder="password" >
                <label for="floatingInputGroup1">Nova senha</label>
            </div>

			<button class="button-purple" type="submit">Salvar alterações</button>
        </form>;`

            formContainer.innerHTML = qualquercoisa;
            
    })



    
}