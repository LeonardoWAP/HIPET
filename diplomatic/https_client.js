const baseUrl ='https://hipet-server.onrender.com/api/version';

export function loginUser(userRequest){

    // return fetch(baseUrl+'user/login',{
    //     method: "POST",
    //     body: JSON.stringify(userRequest),
    //     headers: {"Content-type": "application/json; charset=UTF-8"}
    //   })
    // .then(response =>{
    //         if(response.status === 200){
    //             return response.json()
    //         }else{
    //             throw new Error(response.status)
    //         }

    //     }) 
    // .then(json => {return json})
    // .catch(err => {return err})

    return new Promise(function(resolve, reject) {
        let dados = {
          "status": "SUCCESS",
          "user": {
            "id": "123",
            "name": "John Doe",
            "email": "johndoe@example.com",
            "type": "PF"
          }
        };

        setTimeout(function() {
            resolve(dados);
          }, 1000);
        });  
}

export function createUser(userRequest){
    
  // return fetch(baseUrl+'user/create',{
  //     method: "POST",
  //     body: JSON.stringify(userRequest),
  //     headers: {"Content-type": "application/json; charset=UTF-8"}
  //   })
  // .then(response =>{
  //     if(response.status === 200){
  //         return response.json()
  //     }else{
  //         throw new Error(response.status)
  //     }
  // }) 
  // .then(json => {return json})
  // .catch(err => {return err})

  return new Promise(function(resolve, reject) {
    let dados = {
      "status": "SUCCESS",
      "user": {
        "id": "123",
        "name": "Daiane da Silva Urias",
        "nickname": "Laide Daini",
        "email": "daianedasilva@example.com",
        "type": "PF"
      }
    };

    setTimeout(function() {
        resolve(dados);
      }, 1000);
    });  
      
}
