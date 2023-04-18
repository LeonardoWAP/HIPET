import { findPostByUserId} from '../diplomatic/https_client.js'

export function getUserPosts(){

    let userId = localStorage.getItem('user-id');

    let data = findPostByUserId(userId);

    let card_container = document.getElementById("card-container")


    data.then(data => {
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
