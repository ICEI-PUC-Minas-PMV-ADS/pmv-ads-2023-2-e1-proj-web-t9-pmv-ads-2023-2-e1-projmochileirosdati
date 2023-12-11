import { getObJason, upObJason } from "./crudDBlogin.js";

btnEntrar.onclick = function(){
    let email_log = email_login.value;
    let senha_log = senha_login.value;
    
    let listaUser = [];
    let userValid;
    listaUser = getObJason("listaUser");
    listaUser.forEach((item) => { 
    if(email_log == item.emailUser && senha_log == item.senhaUser){
        userValid = item;
        console.log(userValid);
        upObJason('userLogado', userValid);
        window.location.href="../area_do_usuario/areaUsuario.html";   
    }
    else{
      dadosIncorretos.setAttribute('style', 'display: inline');
      dadosIncorretos.innerHTML = "Usuário ou senha incorretos";
    }
  })
}