import {findPostById, findUserById , updateUser, findUserByNickname} from '../diplomatic/https_client.js'
import { buildPost, formatText, donationTag, logout, setImg} from '../utilities/utilities.js'

export function info_elements(userId){

    let data = findUserById(userId);
    
    data.then(data => {
        let formContainer = document.getElementById("register-form")
        let vakinhaInput=""

        var name = data.user.name
        var nickname = data.user.nickname
        var email = data.user.email
        var phoneNumber = data.user.phone_number
        var cpf = data.user.document
        var password = data.user.password

        if (localStorage.getItem("user_type") == "ONG"){
             vakinhaInput =`<div class="register-form-input input-large">
                                    <label  class="title" for="inputUrlVakinha">Link do perfil na Vakinha <span class="label-subtitle"> (opcional) </span></label>
                                    <input type="text" id="inputUrlVakinha" name="inputUrlVakinha" required placeholder="Preencha para receber doações">
                                </div>`
        }

        let qualquercoisa= ` 
            <div class="form-floating  input-large-edit">
                <input type="text" class="form-control title" id="name" placeholder="Nome" value="${name}" > 
                <label for="name">Nome</label>
            </div>

			<div class=" form-floating  input-large-edit" >
                <input type="text" class="form-control" id="userName" placeholder="Nome de Usuário" value="${nickname}" disabled readonly>
                <label for="userName">Nickname</label>
            </div>

			<div class=" form-floating  input-large-edit" >
                <input type="email" class="form-control "  id="email" placeholder="Email" value= ${email}>
                <label for="email">Email</label>
            </div>


			<div class="form-floating input-short-edit" >
                <input type="text" name="celular" class="form-control" id="phoneNumber" placeholder="telefone" value= ${phoneNumber}>
                <label for="phoneNumber">Celular</label>
            </div>

			<div class=" form-floating input-short-edit" >
                <input type="text" id="cpf" name="cpf" class="form-control" placeholder="cpf" disabled readonly value= ${cpf}>
                <label for="cpf">CPF</label>
            </div>

            ${vakinhaInput}

			<div class=" form-floating  input-large-edit" >
                <input type="password" class="form-control"  id="newPassword" placeholder="password" >
                <label for="newPassword">Nova senha</label>
            </div>

            <div class="form-floating  input-large-edit" >
                <input type="password" class="form-control"  id="reapetPassword" placeholder="password" >
                <label for="reapetPassword">Repita Nova senha</label>
            </div>
            `
            formContainer.innerHTML += qualquercoisa;
    }) 
}

export function editUser(){
  
    var name = document.getElementById("name").value
    var email = document.getElementById("email").value
    var phoneNumber = document.getElementById("phoneNumber").value
    var password = document.getElementById("newPassword").value
    var repeatPassword = document.getElementById("reapetPassword").value
    var type = localStorage.getItem("user_type")


    let userRequest = {
        "type" : type,
        "name": name,
        "phone_number" :phoneNumber,
        "email" : (email == localStorage.getItem('email'))  ? null : email,
        "password" : (password == repeatPassword) ? repeatPassword : null
    } 

    let data = updateUser(userRequest , localStorage.getItem('user-id'))

    data.then(data =>{
    
        if(data['status'] == "SUCCESS" ){

            localStorage.setItem('email', email)

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

export function setUserIconFooter(footer){
    footer.innerHTML += `<a href="../user/user_perfil.html?userId=${localStorage.getItem('user-id')}"> <img src="../../src/icon-user.svg"> </a>`
}

export function shareUser() {

    const urlParams = new URLSearchParams(window.location.search);
    const userPramsId = urlParams.get('userId');

    const url = `https://leonardowap.github.io/HIPET_FrontEnd/screens/user/user_perfil.html?userId=${userPramsId}`;
  
    navigator.clipboard.writeText(url)

  
    const copyUrlButton = document.getElementById('copy-url-button');
    copyUrlButton.removeEventListener('click', copiarUrl);
}
  
export function setUserImg(img){
    let userImg = document.getElementById("user-img")
    userImg.src = ( img != undefined) ? img : "../../src/user.svg"
}
  
function setOngTag(){
    let tags = document.getElementById("tags")
    tags.innerHTML += donationTag
}

export function setUserData(){

    const urlParams = new URLSearchParams(window.location.search);
    const userPramsId = urlParams.get('userId');
    const localUserid = localStorage.getItem('user-id')


    if(userPramsId != localUserid){

        let data = findUserById(userPramsId);
        data.then(data =>{
            setNickname(data.user.nickname)
            setUserImg(data.user.picture)    
            if(data.user.type == 'ONG'){
                setOngTag()
            }        
        })
    }else{
        setNickname(localStorage.getItem('nickname'))
        setUserImg(localStorage.getItem('user_img'))

        document.getElementById('userHeader').innerHTML += logout;

        if(localStorage.getItem('user_type') == "ONG"){
            setOngTag()
        } 

    }

}

export function realizarLogout(){
    localStorage.clear();
    window.location.href = "../login/login.html";
}

function adicionarEventoDeEscuta(searchResult) {
    searchResult.addEventListener('click', (event) => {
        searchResult.parentNode.remove()
    });
}

export function searchUser(nickname){
    console.log(nickname)

   findUserByNickname(nickname.toLowerCase())
    .then(data =>{
        if(data['status'] == 'SUCCESS'){
            const user = data.user

            
        document.getElementById("user-search").innerHTML = ""
        document.getElementById("user-search").innerHTML = `  <div id="user-by-search">
                                                                <a class="user-localizated" href="../user/user_perfil.html?userId=${user.id}?">
                                                                    <img class="post-user-img" src="${setImg(user.picture)}">
                                                                    <p class="post-animal-user-nickname">${user.nickname}</p>
                                                                </a>
                                                                <img id="close-search" src="../../src/x.svg">
                                                            </div>`
   
            const  searchResult = document.getElementById('close-search');
            adicionarEventoDeEscuta(searchResult)
        }
        else{
            document.getElementById("user-search").innerHTML = ""
            document.getElementById("user-search").innerHTML = ` <div id="user-by-search">
                                                                        <div class="user-not-found">
                                                                            Este usuário não existe na nossa base de dados :(
                                                                        </div>
                                                                        <img id="close-search" src="../../src/x.svg">
                                                                    </div>`
            const searchResult = document.getElementById('close-search');
            adicionarEventoDeEscuta(searchResult)

        }

        
    })  .catch(err => console.error(err)) 

}