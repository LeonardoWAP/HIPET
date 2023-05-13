const baseUrl ='https://us-central1-hipet-67bd6.cloudfunctions.net/hipet/api/';

export function loginUser(userRequest){

    return fetch(baseUrl+'user/login',{
        method: "POST",
        body: JSON.stringify(userRequest),
        headers: {"Content-type": "application/json; charset=UTF-8"}
      })
    .then(response =>{
            if(response.status === 200){
                return response.json()
            }else{
                throw new Error(response.status)
            }

        }) 
    .then(json => {return json})
    .catch(err => {return err})
    
}

export function updateUser(userRequest , userId){
  return fetch(baseUrl+'user/update/'+userId,{
    method: "PUT",
    body: JSON.stringify(userRequest),
    headers: {"Content-type": "application/json; charset=UTF-8"}
  })
.then(response =>{
        if(response.status === 200){
            return response.json()
        }else{
            throw new Error(response.status)
        }

    }) 
.then(json => {return json})
.catch(err => {return err})
}

export function DeleteUser(userRequest , userId){
  return fetch(baseUrl+'user/update/'+userId,{
    method: "DELETE",
    body: JSON.stringify(userRequest),
    headers: {"Content-type": "application/json; charset=UTF-8"}
  })
.then(response =>{
        if(response.status === 200){
            return response.json()
        }else{
            throw new Error(response.status)
        }

    }) 
.then(json => {return json})
.catch(err => {return err})
}

export function createUser(userRequest){
    
  return fetch(baseUrl+'user/create',{
      method: "POST",
      body: JSON.stringify(userRequest),
      headers: {"Content-type": "application/json; charset=UTF-8"}
    })
  .then(response =>{
      if(response.status === 200){
          return response.json()
      }else{
          throw new Error(response.status)
      }
  }) 
  .then(json => {return json})
  .catch(err => {return err}) 
}

export function createReport(reportRequest){
    
  return fetch(baseUrl+'report/create',{
      method: "POST",
      body: JSON.stringify(reportRequest),
      headers: {"Content-type": "application/json; charset=UTF-8"}
    })
  .then(response =>{
      if(response.status === 200){
          return response.json()
      }else{
          throw new Error(response.status)
      }
  }) 
  .then(json => {return json})
  .catch(err => {return err}) 
}


export function createPost(postRequest){
    
  return fetch(baseUrl+'post/create',{
       method: "POST",
       body: JSON.stringify(postRequest),
       headers: {"Content-type": "application/json; charset=UTF-8"}
     })
   .then(response =>{
       if(response.status === 200){
           return response.json()
       }else{
           throw new Error(response.status)
       }
   }) 
   .then(json => {return json})
   .catch(err => {return err})    
}

export function listPosts(){
    
  return fetch(baseUrl+'post/list-all',{
      method: "GET",
      headers: {"Content-type": "application/json; charset=UTF-8"}
    })
  .then(response =>{
      if(response.status === 200){
          return response.json()
      }else{
          throw new Error(response.status)
      }
  }) 
  .then(json => {return json})
  .catch(err => {return err})
}

export function listPostsByAnimalType(animalType){
    
  return fetch(baseUrl + 'post/list-by-animal?type=' + animalType,{
      method: "GET",
      headers: {"Content-type": "application/json; charset=UTF-8"}
    })
  .then(response =>{
      if(response.status === 200){
          return response.json()
      }else{
          throw new Error(response.status)
      }
  }) 
  .then(json => {return json})
  .catch(err => {return err})
}

export function findPostByUserId(userId){

  return fetch(baseUrl+'post/list-by-user/'+userId,{
    method: "GET",
    headers: {"Content-type": "application/json; charset=UTF-8"}
  })
  .then(response =>{
      if(response.status === 200){
          return response.json()
      }else{
          throw new Error(response.status)
      }
  }) 
  .then(json => {return json})
  .catch(err => {return err})    
}

export function findPostById(postId){

  return fetch(baseUrl+'post/find-by-id/'+postId,{
    method: "GET",
    headers: {"Content-type": "application/json; charset=UTF-8"}
  })
  .then(response =>{
      if(response.status === 200){
          return response.json()
      }else{
          throw new Error(response.status)
      }
  }) 
  .then(json => {return json})
  .catch(err => {return err})    
}

export function findUserById(userId){
  return fetch (baseUrl+'user/find-by-id/'+userId,{
    method: "GET",
    headers: {"Content-type": "application/json; charset=UTF-8"}
  })
  .then(response =>{
    if(response.status === 200){
        return response.json()
    }else{
        throw new Error(response.status)
    }
}) 
.then(json => {return json})
.catch(err => {return err})    
}

export function findUserByNickname(nickname){
  return fetch (baseUrl+ 'user/find-by-nickname/'+ nickname,{
    method: "GET",
    headers: {"Content-type": "application/json; charset=UTF-8"}
  })
  .then(response =>{
    if(response.status === 200){
        return response.json()
    }else{
        throw new Error(response.status)
    }
  }) 
  .then(json => {return json})
  .catch(err => {return err})    
}

export function deletePostById(postId){
  return fetch(baseUrl+'post/'+postId,{
    method: "DELETE",
    headers: {"Content-type": "application/json; charset=UTF-8"}
  })
.then(response =>{
        if(response.status === 200){
            return response.json()
        }else{
            throw new Error(response.status)
        }

    }) 
.then(json => {return json})
.catch(err => {return err})
}
