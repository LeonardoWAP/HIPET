
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
        "phone_number": user_phoneNumber,
        "document": user_document,
        "nickname": user_nickName,
        "type": "PERSON"
    }
    
    let data = createUser(_userRequest);

    data.then(data =>{

        if(data['status'] == "SUCCESS"){
            localStorage.setItem('deslogado', 'sim'); 
            window.location.href = "../login/register_created.html";
  
        }else{
           // tratativa de erro
           console.log(data)
            let divPopUp = document.querySelector('.modal-content')
            divPopUp.innerHTML = modalRegisteFailed
        }
    })
}

export function register_new_ong(){
    let user_name = document.getElementById("inputName").value;
    let user_nickName = document.getElementById("inputNickName").value;
    let user_email = document.getElementById("inputEmail").value;
    let user_phoneNumber = document.getElementById("inputPhoneNumber").value;
    let user_password = document.getElementById("inputPassword").value;
    let user_url_vakinha = document.getElementById("inputUrlVakinha").value;

    let _userRequest = {
        "type": "ONG", 
        "name": user_name,
        "nickname": user_nickName,
        "email": user_email,
        "phone_number": user_phoneNumber,
        "password": user_password,
        "donation_link": user_url_vakinha
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

