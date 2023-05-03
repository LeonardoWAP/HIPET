import { loginUser, findUserById } from '../diplomatic/https_client.js'
import { showLoading, hideLoading } from '../utilities/utilities.js'


export function verify_login(){

    if (localStorage.getItem('deslogado') != "nao"){
       window.location.href = "../login/login.html";
    }
}

export function login(){
    let email = document.getElementById("loginFormEmail").value;
    let password = document.getElementById("loginFormSenha").value;

    let login = document.getElementById("login");
    showLoading(login)

    let _userLoginRequest = {
        "email": email,
        "password": password,
    }

    let data = loginUser(_userLoginRequest)

    data.then(data =>{

        if(data['status'] == "SUCCESS"){
            hideLoading();
            let userImg = (data['user']['picture'] != undefined) ? `data:image/png;base64,${data['user']['picture']}` : `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
            <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
          </svg>`
            localStorage.setItem('deslogado', 'nao');
            localStorage.setItem('email', data['user']['email']);
            localStorage.setItem('user-id', data['user']['id']);
            localStorage.setItem('nickname', data['user']['nickname']);
            localStorage.setItem('user_type', data['user']['type']);
            localStorage.setItem('user_img', userImg);
            

            
            window.location.href = "../post/feed.html";
            
        }else{      
            console.log(data);   
            hideLoading();
            var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
            popoverTriggerList.map(function (popoverTriggerEl) {
                return new bootstrap.Popover(popoverTriggerEl)
            })
        }  
    })
}

