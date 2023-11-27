import { usuario } from "./crudDBblog.js";

console.log(usuario);
var nameUsuario = usuario.nome + " " + usuario.sobrenome;
var idUsuario = usuario.id;
if(usuario != undefined){
    nave.style.display="none";
    naveUsuario.style.display="flex";
    var nomeDeLoginUsuario = document.getElementById("userName");
    nomeDeLoginUsuario.innerHTML = String(nameUsuario);

}
