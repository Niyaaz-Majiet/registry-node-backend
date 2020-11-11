const axios = require("axios");

module.exports = {
    Mutation : {
        register(_,
            {registerInput : {username,email,password,confirmedPassword}}
            ,context,info){
                const registerUser = async () => {
                  let register =  await axios
                  .post('http://localhost:1337/auth/local/register', {
                          username: email,
                          email,
                          password,
                    });
                 
                    let user = {
                        id: register.data.user.id,
                        email: register.data.user.email,
                        token: register.data.jwt,
                        username: register.data.user.username,
                        created_at: register.data.user.created_at
                     }
                   return user;
                }  

                return registerUser();
        },
        login(_,
            {email,password}
            ,context,info){
                const loginUser = async () => {
                    let login =  await axios
                    .post('http://localhost:1337/auth/local/', {
                        identifier: email,
                        password,
                      });
                   
                      let user = {
                          id: login.data.user.id,
                          email: login.data.user.email,
                          token: login.data.jwt,
                          username: login.data.user.username,
                          created_at: login.data.user.created_at
                       }
                     return user;
                  }  
  
                  return loginUser();
            }
    }
}