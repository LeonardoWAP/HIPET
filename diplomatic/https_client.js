const baseUrl ='https://hipet-server.onrender.com/api/';

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
            "name": "Daiane Pereira",
            "nickname": "Laide Daini",
            "email": "daianehipet@gmail.com",
            "type": "PF"
          }
        };

        setTimeout(function() {
            resolve(dados);
          }, 1000);
        });  
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

  // return new Promise(function(resolve, reject) {
  //   let dados = {
  //     "status": "SUCCESS",
  //     "user": {
  //       "id": "123",
  //       "name": "Daiane da Silva Urias",
  //       "nickname": "Laide Daini",
  //       "email": "daianedasilva@example.com",
  //       "type": "PF"
  //     }
  //   };

  //   setTimeout(function() {
  //       resolve(dados);
  //     }, 1000);
  //   });  
      
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

// return new Promise(function(resolve, reject) {
//   let dados ={"status": "SUCCESS",
//   "posts":[ {
//     "id": "123",
//     "user": "Daiane da Silva Urias",
//     "animal": {"name" : "Sultao",
//                 "age": 2,
//                 "sex": "Macho",
//                 "type": "dog",
//                 "race": "Yourk Shire"},
//     "picture": "../../src/sultao.jpg"},
//     {"id": "123",
//       "user": "Daiane da Silva Urias",
//       "animal": {"name" : "Leia",
//                 "age": 5,
//                 "sex": "Fêmea",
//                 "type": "cat",
//                 "race": "Não definido"},
//       "picture": "../../src/cat-leia.png"},
//       {
//         "id": "123",
//         "user": "Daiane da Silva Urias",
//         "animal": {"name" : "Sultao",
//                     "age": 2,
//                     "sex": "Macho",
//                     "type": "dog",
//                     "race": "Yourk Shire"},
//         "picture": "../../src/sultao.jpg"},
//         {"id": "123",
//           "user": "Daiane da Silva Urias",
//           "animal": {"name" : "Leia",
//                     "age": 5,
//                     "sex": "Fêmea",
//                     "type": "cat",
//                     "race": "Não definido"},
//           "picture": "../../src/cat-leia.png"},
//           {
//             "id": "123",
//             "user": "Daiane da Silva Urias",
//             "animal": {"name" : "Sultao",
//                         "age": 2,
//                         "sex": "Macho",
//                         "type": "dog",
//                         "race": "Yourk Shire"},
//             "picture": "../../src/sultao.jpg"},
//             {"id": "123",
//               "user": "Daiane da Silva Urias",
//               "animal": {"name" : "Leia",
//                         "age": 5,
//                         "sex": "Fêmea",
//                         "type": "cat",
//                         "race": "Não definido"},
//               "picture": "../../src/cat-leia.png"},
//               {
//                 "id": "123",
//                 "user": "Daiane da Silva Urias",
//                 "animal": {"name" : "Sultao",
//                             "age": 2,
//                             "sex": "Macho",
//                             "type": "dog",
//                             "race": "Yourk Shire"},
//                 "picture": "../../src/sultao.jpg"},
//                 {"id": "123",
//                   "user": "Daiane da Silva Urias",
//                   "animal": {"name" : "Leia",
//                             "age": 5,
//                             "sex": "Fêmea",
//                             "type": "cat",
//                             "race": "Não definido"},
//                   "picture": "../../src/cat-leia.png"},
//                   {
//                     "id": "123",
//                     "user": "Daiane da Silva Urias",
//                     "animal": {"name" : "Sultao",
//                                 "age": 2,
//                                 "sex": "Macho",
//                                 "type": "dog",
//                                 "race": "Yourk Shire"},
//                     "picture": "../../src/sultao.jpg"},
//                     {"id": "123",
//                       "user": "Daiane da Silva Urias",
//                       "animal": {"name" : "Leia",
//                                 "age": 5,
//                                 "sex": "Fêmea",
//                                 "type": "cat",
//                                 "race": "Não definido"},
//                       "picture": "../../src/cat-leia.png"},
//                       {
//                         "id": "123",
//                         "user": "Daiane da Silva Urias",
//                         "animal": {"name" : "Sultao",
//                                     "age": 2,
//                                     "sex": "Macho",
//                                     "type": "dog",
//                                     "race": "Yourk Shire"},
//                         "picture": "../../src/sultao.jpg"},
//                         {"id": "123",
//                           "user": "Daiane da Silva Urias",
//                           "animal": {"name" : "Leia",
//                                     "age": 5,
//                                     "sex": "Fêmea",
//                                     "type": "cat",
//                                     "race": "Não definido"},
//                           "picture": "../../src/cat-leia.png"},
//                           {
//                             "id": "123",
//                             "user": "Daiane da Silva Urias",
//                             "animal": {"name" : "Sultao",
//                                         "age": 2,
//                                         "sex": "Macho",
//                                         "type": "dog",
//                                         "race": "Yourk Shire"},
//                             "picture": "../../src/sultao.jpg"},
//                             {"id": "123",
//                               "user": "Daiane da Silva Urias",
//                               "animal": {"name" : "Leia",
//                                         "age": 5,
//                                         "sex": "Fêmea",
//                                         "type": "cat",
//                                         "race": "Não definido"},
//                               "picture": "../../src/cat-leia.png"}]};

}
