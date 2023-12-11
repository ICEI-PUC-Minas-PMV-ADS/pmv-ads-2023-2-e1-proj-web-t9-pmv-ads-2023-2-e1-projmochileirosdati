import { getObJason } from "./HomePageDB.js";

body.onload = function(){
    let userLogado = getObJason('userLogado');
    console.log(userLogado);
    if(userLogado != 0){
        let nameUsuario = userLogado.nomeUser + " " + userLogado.sobrenomeUser;
        menu_h.style.display="none";
        naveUsuario.style.display="flex";
        let nomeDeLoginUsuario = document.getElementById("userName");
        nomeDeLoginUsuario.innerHTML = String(nameUsuario);
    }
    
}
naveUsuario.onclick = function(){
    window.location.href = "./Sub/area_do_usuario/areaUsuario.html";
}