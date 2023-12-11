import { getObJason } from "./crudDBblog.js";

let usuario = getObJason("userLogado");
console.log(usuario);
var nameUsuario = usuario.nomeUser + " " + usuario.sobrenomeUser;
var idUsuario = usuario.id;
if(usuario.length != 0){
    nave.style.display="none";
    naveUsuario.style.display="flex";
    var nomeDeLoginUsuario = document.getElementById("userName");
    nomeDeLoginUsuario.innerHTML = String(nameUsuario);
}
naveUsuario.onclick = function(){
    window.location.href = "../area_do_usuario/areaUsuario.html"
}

for(let s = 1; s<=5; s++){
    document.querySelectorAll(".estrela" + s).forEach(function(element){
    element.onmouseenter = function(){
        element.src = "./img/estrelaamarela.png";
        element.style.scale = '1.2';
    }
    element.onmouseleave = function(){
        element.src = "./img/estrelabranca.png";
        element.style.scale = '1';
    }
    // element.onclick = function(){
    //     for(let v = 0; v<=element; v++){
    //         v.src = "./img/estrelaamarela.png";
    
})
}
