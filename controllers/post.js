
import { listPosts, findPostById, createPost, findPostByUserId } from '../diplomatic/https_client.js'
import { modalRegisteFailed, buildPost, formatText } from '../utilities/utilities.js'

export function set_nickname(){
    let user_name = document.getElementById("feed-nickname")
    
    user_name.innerHTML =  localStorage.getItem('nickname');         
}

export function imgCorreta(){
  let preview= document.querySelector("#preview") 
  preview.enable

}

export function render_animal_cards(){

    let card_container = document.getElementById("card-container")

    let data = listPosts()
    data.then(data =>{

        if(data['status'] == "SUCCESS"){

            let posts = data['posts'] 

            for (let  i = 0; i < posts.length; i++){
                let post = buildPost(posts[i])           
                card_container.innerHTML += post;
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

                    let post = buildPost(posts[i])
                        
                    card_container.innerHTML += post;
                }
            }
            
        }else{
            console.log(data)
        }
    })
}

export function getPostDetails(){

    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get('postId');

    let data = findPostById(postId)

    let post_header = document.getElementById("post-details-card-info-header")
    let post_tags = document.getElementById("post-details-card-info-tags")
    let post_details = document.getElementById("post-details-card-info-resume")
    let post_img = document.getElementById("post-details-card-img")
    data.then(data =>{

        if(data['status'] == "SUCCESS"){

            let post = data['post'];
            let animalName = post.animal.name
            let animalSex = post.animal.sex
            let animalAge = (post.animal.age != undefined) ? post.animal.age : "?"   
            let animalState = post.state
            let picture = post.picture
            animalSex = formatText(animalSex);

           post_img.innerHTML = `<img src="data:image/png;base64,${picture}">`
            
            post_header.innerHTML = `<h1 class="title"> ${animalName}</h1>
                                    <p class="subtitle"> ${animalSex}, ${animalAge} anos </p>
                                    <img src="../../src/maps-and-flags.svg">
                                    <p class="subtitle"> ${animalState}</p>`;

            post_details.innerHTML +=  `<p class="subtitle">${post.description}</p> `

            let animalColor = post.animal.color
            let animalCastreated = post.animal.health_info.castreated
            let animalVacinneted = post.animal.health_info.vaccinated
            let animalSpacialCare = post.animal.health_info.special_care
            let animalSize = post.animal.size

            post_tags.innerHTML += `<div class="animal-tag animal-color"> 
                                    <img src="../../src/icon-color.svg"> 
                                    <p>${formatText(animalColor)}</p>
                                    </div>` ;

            post_tags.innerHTML += `<div class="animal-tag animal-size"> 
                                        <img src="../../src/icon-size.svg"> 
                                        <p>${formatText(animalSize)}</p>
                                    </div>`

            if(animalSpacialCare) {
                post_tags.innerHTML += `<div class="animal-tag animal-health"> 
                                        <img src="../../src/icon-health.svg"> 
                                        <p>Requer cuiodados especiais</p>
                                    </div>`
            }

            if(animalVacinneted){
                post_tags.innerHTML += ` <div class="animal-tag animal-vaccine"> 
                                            <img src="../../src/icon-vaccine.svg"> 
                                            <p>Vacinado</p>
                                        </div>`;
            }

            if (animalCastreated) {
                post_tags.innerHTML += ` <div class="animal-tag animal-castrated"> 
                                            <img src="../../src/icon-castrated.svg"> 
                                            <p>Castrado</p>
                                        </div>`
            }


        }else{
            console.log(data)
        }
    })
}

export function createNewPost(){

    let animalTypeDog = document.getElementById("checkAnimalTypeDog").firstElementChild.checked ;
    let animalSexFemea = document.getElementById("checkAnimalSexFemea").firstElementChild.checked ;
    let animalName = document.getElementById("animalName").firstElementChild.value;
    let animalAge = document.getElementById("animalAge").firstElementChild.value;
    let animalColor = document.getElementById("animalColor").firstElementChild.value;
    let animalSize = document.getElementById("animalSize").firstElementChild.value;
    let castreated = document.getElementById("checkbox-info-castreated").firstElementChild.checked;
    let vacinnated = document.getElementById("checkbox-info-vacinnated").firstElementChild.checked ;
    let spacialCare = document.getElementById("checkbox-info-spacial-care").firstElementChild.checked ;

    let about = document.getElementById("aboutAnimal").firstElementChild.value;
    let state = document.getElementById("state").firstElementChild.value;

    let userId = localStorage.getItem('user-id')

    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => {
        const base64Image = reader.result.split(',')[1];
    
        let postRequest = {
            "customer_id": userId, 
            "state": state,
            "description": about,
            "picture": base64Image,
            "animal": {
                "name": animalName,
                "color": animalColor,
                "size": animalSize,
                "type": (animalTypeDog  ? "CACHORRO" : "GATO"),
                "sex": (animalSexFemea  ? "FEMEA" : "MACHO"),
                "share_url": "../../src/cat-leia.png",
                "health_info": {
                    "vaccinated": vacinnated,
                    "castreated": castreated,
                    "special_care": spacialCare
                }
            }
        }

        let data = createPost(postRequest)

        data.then(data =>{
    
            if(data['status'] == "SUCCESS"){
    
                let divPopUp = document.querySelector('.modal-content')
                divPopUp.innerHTML = `
                            <div class="modal-header">
                                <h5 class="modal-title" id="popUpCadastroLabel">Post Criado com Sucesso!</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                Seu post foi publicado, clique no botão abaixo para visualizá-lo :)
                            </div>
                            <div class="modal-footer">
                                
                           <a href='post_details.html?postId=${data['post'].id}' > <button type="button" class="modal-button-purple" data-bs-dismiss="modal">Visualizar Post</button>
                           </a>
                            </div>`
            }else{            
                var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
                popoverTriggerList.map(function (popoverTriggerEl) {
                    return new bootstrap.Popover(popoverTriggerEl)
                })}})
}}

export function getUserPosts(){

    let userId = localStorage.getItem('user-id');

    let data = findPostByUserId(userId);

    let card_container = document.getElementById("card-container")

    data.then(data => {
        if(data['status'] == "SUCCESS"){

            let posts = data['posts'] 
            
            for (let  i = 0; i < posts.length; i++){
       
                let post = buildPost(posts[i])           
                card_container.innerHTML += post;
            }
            
        }else{
            console.log(data)
        }
    })

}
