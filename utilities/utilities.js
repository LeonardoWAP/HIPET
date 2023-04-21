
export const modalRegisteFailed = `
        <div class="modal-header">
            <h5 class="modal-title" id="popUpCadastroLabel">Usuário Não Criado!</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
            Seu usuário não pode ser criado verifique as informações :(
        </div>
        <div class="modal-footer">
            
        <button type="button" class="modal-button-purple" data-bs-dismiss="modal">Tentar novamente</button>
        </div>
        `

export const modalPostCreate = `
            <div class="modal-header">
                <h5 class="modal-title" id="popUpCadastroLabel">Post Criado com Sucesso!</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                Seu post foi publicado, clique no botão abaixo para visualizá-lo :)
            </div>
            <div class="modal-footer">
                
            <button type="button" class="modal-button-purple" data-bs-dismiss="modal">Visualizar Post</button>
            </div>
            `

function formatTextAbout(text){
    const limite = Math.floor(text.length * 0.36);
    const parte1 = text.substring(0, limite);
    return parte1
    
}

export function formatText(title){
    return title.charAt(0).toUpperCase() + title.slice(1).toLowerCase();
}


export function buildPost(post){

    let postId = post.id
    let picture = post.picture
    let description = post.description
    let animalName = post.animal.name
    let sex = post.animal.sex
    let age = (post.animal.age != undefined) ? post.animal.age : "?"   
    let type = post.animal.type   

   return ` <a class="post-animal-link" href="post_details.html?postId=${postId}">
                <article class="post-animal">
                    <div class="post-animal-user">
                        <img class="post-animal-user-img" src="../../src/user-img.jpg">
                        <p class="post-animal-user-nickname">Diandria</p>
                        <img src="../../src/maps-and-flags.svg">
                        <p class="post-animal-user-localization">SP</p>
                    </div>

                    <div class="post-animal-img">
                        <img id="img-animal" src='data:image/png;base64,${picture}'> 
                    </div>
                    
                    <div class="post-animal-info">
                        <p class="title">${animalName} </p>
                       <div class="post-animal-info-about">
                        <p id="post-animal-info-about-text" class="subtitle"> ${formatTextAbout(description)}
                        </p>
                       </div> 
                        <div class="post-animal-info-animal-tag">
                            <div class="animal-tag dog">  ${formatText(type)} </div>
                            <div class="animal-tag sex"> ${formatText(sex)} </div>
                            <div class="animal-tag age"> ${age} anos </div>
                        </div>
                    </div>

                </article> 
             </a> `
}

