
import { createUser } from '../diplomatic/https_client.js'
import { modalRegisteFailed } from '../utilities/utilities.js'


export function register_new_pf(){
    let user_name = document.getElementById("inputName").value;
    let user_nickName = document.getElementById("inputNickName").value;
    let user_email = document.getElementById("inputEmail").value;
    let user_phoneNumber = document.getElementById("inputPhoneNumber").value;
    let user_document = document.getElementById("inputDocument").value;
    let user_password = document.getElementById("inputPassword").value;

    let _userRequest = {
        "email": user_email,
        "password": user_password,
        "name": user_name,
        "phoneNumber": user_phoneNumber,
        "document": user_document,
        "nickName": user_nickName
    }

    let data = createUser(_userRequest);

    data.then(data =>{

        if(data['status'] == "SUCCESS"){
            localStorage.setItem('deslogado', 'sim'); 
            window.location.href = "../login/register_created.html";
  
        }else{
           // tratativa de erro
            let divPopUp = document.querySelector('.modal-content')
            divPopUp.innerHTML = modalRegisteFailed
        }
    })
}

export function register_new_ong(){
    console.log("ok")
    let user_name = document.getElementById("inputName").value;
    let user_nickName = document.getElementById("inputNickName").value;
    let user_email = document.getElementById("inputEmail").value;
    let user_phoneNumber = document.getElementById("inputPhoneNumber").value;
    let user_password = document.getElementById("inputPassword").value;
    let user_url_vakinha = document.getElementById("inputUrlVakinha").value;

    let _userRequest = {
        "name": user_name,
        "nickName": user_nickName,
        "email": user_email,
        "phoneNumber": user_phoneNumber,
        "password": user_password,
        "url_vakinha": user_url_vakinha
    }

    let data = createUser(_userRequest);

    data.then(data =>{
        
        if(data['status'] == "SUCCESS"){

            localStorage.setItem('deslogado', 'sim'); 
            window.location.href = "../login/register_created.html";
  
        }else{
           // tratativa de erro
            let divPopUp = document.querySelector('.modal-content')
            divPopUp.innerHTML = modalRegisteFailed
        }
    })
}

