const baseUrl ='https://hipet-server.onrender.com/api/';

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

export function updateUser(userRequest){
  
  return fetch(baseUrl+'user/update/'+userRequest.userId,{
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

