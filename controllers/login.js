import { loginUser} from '../diplomatic/https_client.js'

document.querySelector("#loginButton").addEventListener('click', login)

function login(){
    let email = document.getElementById("loginFormEmail").value;
    let password = document.getElementById("loginFormSenha").value;

    let _userLoginRequest = {
        "email": email,
        "password": password,
    }

    let data = loginUser(_userLoginRequest)

    data.then(data =>{

        if(data['status'] == "SUCCESS"){
            console.log('sucesso')

            localStorage.setItem('deslogado', 'nao');
            localStorage.setItem('email', data['user']['email']);
            localStorage.setItem('nickname', data['user']['nickname']);
            localStorage.setItem('user_type', data['user']['type']);

            
            window.location.href = "../post/feed.html";
        
        }else{            
            var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
            popoverTriggerList.map(function (popoverTriggerEl) {
                return new bootstrap.Popover(popoverTriggerEl)
            })
        }  
    })
}

