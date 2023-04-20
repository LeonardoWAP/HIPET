import {findPostById, findUserById } from '../diplomatic/https_client.js'

export function info_elements(userId){

    let data = findUserById(userId);
    
    data.then(data => {
        let formContainer = document.getElementById("register-form")

        var name = data.user.name
        var nickname = data.user.nickname
        var email = data.user.email
        var phoneNumber = data.user.phone_number
        var cpf = data.user.document

        console.log(formContainer)

        // formName.innerHTML += name
        // formNickname.innerHTML += nickname
        // formEmail.innerHTML += email
        // formPhoneNumber.innerHTML += phoneNumber
        // formCpf.innerHTML += cpf

        let qualquercoisa= ` 
            <div class="create-post-form-input form-floating register-form" id="Name">
                <input type="text" class="form-control title" id="floatingInputGroup1 " placeholder="Nome" value="${name}" > 
                <label for="floatingInputGroup1">Nome </label>
            </div>

			<div class="create-post-form-input form-floating register-form" id="UserName">
                <input type="text" class="form-control" id="floatingInputGroup1 " placeholder="Nome de Usuário" value="${nickname}" disabled readonly>
                <label for="floatingInputGroup1">Nickname</label>
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

			<button class="button-purple" type="submit">Salvar alterações</button>`

            formContainer.innerHTML += qualquercoisa;
            
    })



    
}