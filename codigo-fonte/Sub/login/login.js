function entrar(){


    let email_login = document.querySelector("#email_login")
    let senha_login = document.querySelector("#senha_login")
    
    let listaUser = []
    let userValid = {       
        email: "",
        senha: "",
        nome: ""
       
      }

      listaUser = JSON.parse(localStorage.getItem("listaUser"))
  listaUser.forEach((item) => { 
    if(email_login.value == item.emailUser && senha_login.value == item.SenhaUser){


      userValid = {
         email: item.emailUser,
         senha: item.SenhaUser,
         nome: item.nomeUser,         
       }
      
    }
  })
  if(email_login.value == userValid.email && senha_login.value == userValid.senha && email_login.value != "" && senha_login.value != ""){
   
    
    window.location.href="/codigo-fonte/Sub/area_do_usuario/areaUsuario.html"
    
    
    //let mathRandom = Math.random().toString(16).substr(2) 
    //let token = mathRandom + mathRandom
    
    //localStorage.setItem("token", token)

    localStorage.setItem('userLogado', JSON.stringify(userValid))
    //localStorage.setItem('nome', JSON.stringify(nomeUser))
    //localStorage.setItem('telefone', JSON.stringify(telefoneUser))
    //localStorage.setItem('opcoes', JSON.stringify(opcoesUser))
    //localStorage.setItem('endereco', JSON.stringify(enderecoUser))
    //localStorage.setItem('instituicao', JSON.stringify(localUser))

    

  } else {
    dadosIncorretos.setAttribute('style', 'display: inline');
    dadosIncorretos.innerHTML = "Usuário ou senha incorretos";

  }
  
}