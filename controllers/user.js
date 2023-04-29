import {findPostById, findUserById , updateUser } from '../diplomatic/https_client.js'
import { buildPost, formatText, donationTag } from '../utilities/utilities.js'

export function info_elements(userId){

    let data = findUserById(userId);
    
    data.then(data => {
        let formContainer = document.getElementById("register-form")

        var name = data.user.name
        var nickname = data.user.nickname
        var email = data.user.email
        var phoneNumber = data.user.phone_number
        var cpf = data.user.document
        var password = data.user.password

        let qualquercoisa= ` 
            <div class="create-post-form-input form-floating register-form">
                <input type="text" class="form-control title" id="name" placeholder="Nome" value="${name}" > 
                <label for="name">Nome</label>
            </div>

			<div class="create-post-form-input form-floating register-form" >
                <input type="text" class="form-control" id="userName" placeholder="Nome de Usuário" value="${nickname}" disabled readonly>
                <label for="userName">Nickname</label>
            </div>

			<div class="create-post-form-input form-floating register-form-input input-large" >
                <input type="email" class="form-control "  id="email" placeholder="Email" value= ${email}>
                <label for="email">Email</label>
            </div>

			<div class="create-post-form-input form-floating register-form-input" >
                <input type="text" name="celular" class="form-control" id="phoneNumber" placeholder="telefone" value= ${phoneNumber}>
                <label for="phoneNumber">Número de Ceular </label>
            </div>

			<div class="create-post-form-input form-floating register-form-input" >
                <input type="text" id="cpf" name="cpf" class="form-control" placeholder="cpf" disabled readonly value= ${cpf}>
                <label for="cpf">CPF</label>
            </div>

            <div class="create-post-form-input form-floating register-form-input input-large">
                <input type="password" class="form-control" id="currentPassword" placeholder="password">
                <label for="currentPassword">Senha atual</label>
            </div>

			<div class="create-post-form-input form-floating register-form-input input-large" >
                <input type="password" class="form-control"  id="newPassword" placeholder="password" >
                <label for="newPassword">Nova senha</label>
            </div>
            `
            formContainer.innerHTML += qualquercoisa;
    }) 
}

export function editUser(){
  
    var name = document.getElementById("name").value
    var email = document.getElementById("email").value
    var phoneNumber = document.getElementById("phoneNumber").value
    var currentPassword = document.getElementById("currentPassword").value
    var newPassword = document.getElementById("newPassword").value
    var type = localStorage.getItem("user_type")

    console.log(name)
    console.log(email)
    console.log(phoneNumber)
    // console.log(currentPassword)
    // console.log(newPassword)
    console.log(type)


    let userRequest = {
        "type" : type,
        "name": name,
        "phone_number" :phoneNumber,
        "email" : email
    }

    console.log(userRequest)

    let data = updateUser(userRequest , localStorage.getItem('user-id'))

    data.then(data =>{
    
        if(data['status'] == "SUCCESS"){

            let divPopUp = document.querySelector('.modal-content')
            divPopUp.innerHTML = `
                        <div class="modal-header">
                            <h5 class="modal-title" id="popUpCadastroLabel">Usuario Editado com Sucesso</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            Seu perfil foi editado, clique no botão abaixo para visualizá-lo :)
                        </div>
                        <div class="modal-footer">
                            
                       <a href='/screens/user/user_perfil.html' > <button type="button" class="modal-button-purple" data-bs-dismiss="modal">Aplicar</button>
                       </a>
                        </div>`
        }else{            
            var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
            popoverTriggerList.map(function (popoverTriggerEl) {
                return new bootstrap.Popover(popoverTriggerEl)
            })}})

}

export function setNickname(nickname){
    let user_name = document.getElementById("feed-nickname")
    
    user_name.innerHTML =  nickname;         
}

export function copiarUrl() {
    const url = window.location.href;
  
    navigator.clipboard.writeText(url)
      .then(() => {
        alert('URL copiada para a área de transferência!');
      })
      .catch(() => {
        alert('Não foi possível copiar a URL');
      });
  
    const copyUrlButton = document.getElementById('copy-url-button');
    copyUrlButton.removeEventListener('click', copiarUrl);
  }
  
export function setUserImg(img){
    let userImg = document.getElementById("user-img")
    userImg.src = ( img != undefined) ? `data:image/png;base64,${localStorage.getItem('user_img')}` : "../../src/user.svg"
}
  
function setOngTag(){
    let tags = document.getElementById("tags")
    tags.innerHTML += donationTag

    console.log(tags)

}

export function setUserData(){

    const urlParams = new URLSearchParams(window.location.search);
    const userPramsId = urlParams.get('userId');
    const localUserid = localStorage.getItem('user-id')

    if(userPramsId != localUserid){

        let data = findUserById(userPramsId);
        data.then(data =>{
            setNickname(data.user.nickname)
            setUserImg(data.user.pickture)    
            if(data.user.type == 'ONG'){
                setOngTag()
            }        
        })
    }else{
        setNickname(localStorage.getItem('nickname'))
        setUserImg(localStorage.getItem('user_img'))
        if(localStorage.getItem('user_type') == "ONG"){
            setOngTag()
        } 
    }

}