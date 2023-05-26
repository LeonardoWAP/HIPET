
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
        </div>`

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
            </div>`

export const donationTag = `<button id="donation-button" 
                                    type="button" 
                                    class="user-tag donation" 
                                    data-bs-toggle="modal" 
                                    data-bs-target="#donationModal">

                                    <img src="../../src/donation.svg"> 
                                    <p class="subtitle">Quero fazer uma doação</p>
                                </button>`

export const logout =  `<button id="logout-button" 
                                type="button" 
                                class="btn btn-primary" 
                                data-bs-toggle="modal" 
                                data-bs-target="#logoutModal">
                            <svg id="logout" xmlns="http://www.w3.org/2000/svg" 
                            fill="currentColor" 
                            class="bi bi-box-arrow-right" 
                            viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"/>
                            <path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
                            </svg>
                        </button>`

export   const editUserTag = `<a class="user-tag edit" 
                                href="../user/edit_user.html?userType=${localStorage.getItem('user_type')}">
                            <img src="../../src/edit-perfil.svg"> 
                            <p class="subtitle">Editar perfil</p>
                            </a>`

export  const whatasAppTag = `<button class="user-tag edit" 
                                        type="button" 
                                        data-bs-toggle="modal" 
                                        data-bs-target="#whatsappMensagemModal" >
                                    <img src="../../src/whatsapp.svg"> 
                                    <p class="subtitle">Mensagem</p>
                                </button>`
                        
export const reportWithoutReason = `<p id="report-error"> ** selecione o motivo da sua denuncia</p>`

export const  reportConfirmation =` <div id="report-confirmation"> 
                                        <p class="title"> Você tem certeza que deseja prosseguir com a denuncia? Essa ação é definitiva e não poderá ser desfeita</p>
                                        
                                    </div>
                                    <div class="modal-footer" id="buttonCreateReport">
                                        <button type="button" 
                                            class="btn btn-primary report-btn" 
                                            id="createReport"
                                        > Confirmar Denuncia</button>
                                    </div>`
export const reportSucceeded = `<div id="report-confirmation"> <p class="title"> Criado com sucesso!</p> </div>
                                    <div class="modal-footer">
                                    <button type="button" 
                                            class="btn btn-primary report-btn-success" 
                                            id="createReport"
                                        > Ok</button>
                                    </div>`

export const deletePostSucceded = `<div id="report-confirmation"> <p class="title"> Deletado com sucesso!</p> </div>
                                        <div class="modal-footer"></div>`

export const deletePostFailed = `<div id="report-confirmation"> <p class="title"> Não foi possivel deletar a postagem, tente novamente mais tarde :(</p> </div>
                                    <div class="modal-footer"></div>`

export const reportFailed = `<p class="title"> Não fpi possível criar </p>
                                <div class="modal-footer">
                                <button type="button" 
                                        class="btn btn-primary report-btn" 
                                        id="createReport"
                                    > Ok</button>
                                </div>`

export const deletePostButton = `<button 
                                    id="delete-post-button" 
                                    type="button" 
                                    data-bs-target="#deletePostModal"
                                    data-bs-toggle="modal" >
                                    <img class="delete-post" src="../../src/trash.svg">
                                    </button>`

function formatTextAbout(text){
    const limite = Math.floor(text.length * 0.36);
    const parte1 = text.substring(0, limite);
    return parte1
}

export function formatText(title){
    return title.charAt(0).toUpperCase() + title.slice(1).toLowerCase();
}

export function setImg(img){
   return (img != undefined) ? img :  `../../src/user.svg`
}

export function buildPost(post){
    let postId = post.id
    let picture = post.picture
    let description = post.description
    let animalName = post.animal.name
    let sex = post.animal.sex
    let age = (post.animal.age != undefined) ? post.animal.age : "?"   
    let type = post.animal.type   
    let localization = post.state 
    let userName = post.user.nickname

   return ` 
                <article class="post-animal">
                    <div class="post-animal-user">
                        <img class="post-user-img" src="${setImg(post.user.picture)}">
                        <p class="post-animal-user-nickname">${userName}</p>
                        <img src="../../src/maps-and-flags.svg">
                        <p class="post-localization">${localization}</p>
                    </div>

            
                    <a class="post-animal-img" 
                         href="post_details.html?postId=${postId}"
                        style = "background-image: url('${picture}')">
                    </a>    
                    
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
            `
}

export function buildPostToUser(post){
    let postId = post.id
    let picture = post.picture
    let animalName = post.animal.name

    let localUserid = localStorage.getItem('user-id')
    const urlParams = new URLSearchParams(window.location.search);
    const userPramsId = urlParams.get('userId');

    let deletePost = `<div> </div>`

    if(userPramsId == localUserid){
        deletePost = deletePostButton
    }
 
   return  `<article class="post-animal-perfil">
                    <a class="post-animal-img-perfil" href="../post/post_details.html?postId=${postId}"
                        style = "background-image: url('${picture}')">
                        
                    </a>

                    <div class="post-animal-info-perfil">
                        <p class="title">${animalName} </p> 
                        ${deletePost}
                    </div>
                </article> 
            `
}

export function showLoading(element) {
    console.log("login")

    element.innerHTML += ` <div id="loading" class="loading">
                                    <div class="spinner"></div>
                                </div>`
}

export function hideLoading() {
 let loading = document.getElementById('loading');
  loading.style.display = 'none';
} 
