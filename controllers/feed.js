
import { listPosts } from '../diplomatic/https_client.js'


export function verify_login(){
    if (localStorage.getItem('deslogado') == "sim"){
       window.location.href = "../login/login.html";
    }
}

export function set_nickname(){
    let user_name = document.getElementById("feed-nickname")
    
    user_name.innerHTML =  localStorage.getItem('nickname');
            
}


export function render_animal_cards(){

    let card_container = document.getElementById("card-container")

    let data = listPosts()

    data.then(data =>{

        if(data['status'] == "SUCCESS"){

            let posts = data['posts'] 
                

            for (let  i = 0; i < posts.length; i++){
       
                let ulrPicture = posts[i].picture
                let name = posts[i].animal.name
                let race = posts[i].animal.race
                let sex = posts[i].animal.sex
                //let age = posts[i].animal.age                
            
                let card = ` 
                <article class="card-animal">
                    <div class="card-animal-img">
                        <img src='../../src/sultao.jpg'> 
                    </div>
                    
                    <div class="card-animal-info">
                        <p class="title">${name} <span class="thin-subtitle">(${race})</span></p>
                        <div class="card-animal-info-animal"> 
                            <p class="title">${sex}, ${sex} anos</p> 
                        </div>
                    </div>

                 </article>`;
           
                 card_container.innerHTML += card;
            }
            
        }else{
            console.log(data)
        }
    })
}

export function filter_by_animal_type(animal_type){

    let card_container = document.getElementById("card-container")

    let data = listPosts()

    data.then(data =>{

        if(data['status'] == "SUCCESS"){

            let posts = data['posts']
            
            card_container.innerHTML = "";
                
            for (let  i = 0; i < posts.length; i++){
    
                let type = posts[i].animal.type
                console.log(type)

                if (type == animal_type.toString()){
                    
                    let ulrPicture = posts[i].picture
                    let name = posts[i].animal.name
                    let race = posts[i].animal.race
                    let sex = posts[i].animal.sex
                    let age = posts[i].animal.age 
                    let card = ` 
                    <article class="card-animal">
                        <div class="card-animal-img">
                            <img src=${ulrPicture}> 
                        </div>
                        
                        <div class="card-animal-info">
                            <p class="title">${name} <span class="thin-subtitle">(${race})</span></p>
                            <div class="card-animal-info-animal"> 
                                <p class="title">${sex}, ${age} anos</p> 
                            </div>
                        </div>

                    </article>`;
            
                    card_container.innerHTML += card;
                }
            }
            
        }else{
            console.log(data)
        }
    })
}
