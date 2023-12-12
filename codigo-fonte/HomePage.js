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
        fotoUsuario.src = userLogado.imgPerfil;
    }
    
}
naveUsuario.onclick = function(){
    window.location.href = "./Sub/area_do_usuario/areaUsuario.html";
}


//INTERAÇÃO PARA OS CARDS
let comentarios = getObJason('Comentario');
let listaUsuarios = getObJason('listaUser');

let nomeUsuario;
let userId;
function existencia(objeto){
    if(comentarios[objeto].usuarioId != undefined){
        if(objeto == 0){
            listaUsuarios.forEach(element => {
                if(element.idUser == comentarios[0].usuarioId){
                    nomeUsuario = element.nomeUser + " " + element.sobrenomeUser;
                    txtCardA.innerHTML = nomeUsuario;
                    assuntoCardA1.innerHTML = comentarios[0].comentario.cmtTitulo;
                    assuntoCardA.innerHTML = comentarios[0].comentario.cmtTitulo;
                    sobreA.innerHTML = comentarios[0].comentario.cmt;
                };
        })}

        if(objeto == 1){
            listaUsuarios.forEach(element => {
                if(element.idUser == comentarios[1].usuarioId){
                    nomeUsuario = element.nomeUser + " " + element.sobrenomeUser;
                    txtCardB.innerHTML = nomeUsuario;
                    assuntoCardB2.innerHTML = comentarios[1].comentario.cmtTitulo;
                    assuntoCardB.innerHTML = comentarios[1].comentario.cmtTitulo;
                    sobreB.innerHTML = comentarios[1].comentario.cmt;
                };
        })}
        
        
        if(objeto == 2){
            listaUsuarios.forEach(element => {
            if(element.idUser == comentarios[2].usuarioId){
                nomeUsuario = element.nomeUser + " " + element.sobrenomeUser;
                txtCardC.innerHTML = nomeUsuario;
                assuntoCardC3.innerHTML = comentarios[2].comentario.cmtTitulo;
                assuntoCardC.innerHTML = comentarios[2].comentario.cmtTitulo;
                sobreC.innerHTML = comentarios[2].comentario.cmt;
            };
            
        })}
    };
}

existencia(0);
existencia(1);
existencia(2);
