import {findPostById, findUserById, findPostByUserId } from '../diplomatic/https_client.js'
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
                <input type="text" id="cpf" name="cpf" class="form-control" placeholder="cpf" disabled readonly value= ${cpf}}>
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

    let userRequest = {
        "id": localStorage.getItem('user-id'),
        "name": name,
        "email" : email,
        "phone_number" :phoneNumber
    }

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