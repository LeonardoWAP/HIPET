import { loginUser, findUserById } from '../diplomatic/https_client.js'
import { showLoading, hideLoading, setImg } from '../utilities/utilities.js'


export function verify_login() {

    if (localStorage.getItem('deslogado') != "nao") {
        window.location.href = "../login/login.html";
    }
}

export function login() {
    let email = document.getElementById("loginFormEmail").value;
    let password = document.getElementById("loginFormSenha").value;

    let loading = document.getElementById("loading-login");
    loading.innerHTML = ""
    showLoading(loading)

    let _userLoginRequest = {
        "email": email,
        "password": password,
    }

    let data = loginUser(_userLoginRequest)
    data.then(data => {

        if (data['status'] == "SUCCESS") {
            hideLoading();

            localStorage.setItem('deslogado', 'nao');
            localStorage.setItem('email', data['user']['email']);
            localStorage.setItem('user-id', data['user']['id']);
            localStorage.setItem('nickname', data['user']['nickname']);
            localStorage.setItem('user_type', data['user']['type']);
            localStorage.setItem('user_img', setImg(data['user']['picture']));

            window.location.href = "../post/feed.html";

        } else {
            console.log(data);
            hideLoading();
            var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
            popoverTriggerList.map(function (popoverTriggerEl) {
                return new bootstrap.Popover(popoverTriggerEl)
            })
        }
    })
}

