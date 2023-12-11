import { getObJason, delObJason, upObJason, createObIdComentario, listaUsuarios } from '../area_do_usuario/crudDBareaUsuario.js';

function atualizaNComentario(){
    let userLogado = getObJason('userLogado');
    nComentarios.innerHTML = userLogado.comentario.length;
}


body.onload = function(){
    let userLogado = getObJason('userLogado');
    document.getElementById('demo').innerHTML= 'Olá, '+ userLogado.nomeUser;
    document.getElementById('infnome').innerHTML= userLogado.nomeUser +" "+userLogado.sobrenomeUser;
    document.getElementById('infemail').innerHTML= userLogado.emailUser;
    document.getElementById('toto').src=userLogado.img;
    atualizaNComentario();
    
}


foto.onmouseenter = function(){
    editar.style.transform = 'translateX(28%) translateY(0%)';
    editar.style.transition = '300ms linear';

    
    configurar.style.transform = 'translateX(-10%) translateY(0%)';
    configurar.style.transition = '300ms linear'

     
    sair.style.transform = 'translateX(28%) translateY(0%)';
    sair.style.transition = '300ms linear' 
}
fundoFoto.onmouseleave = function(){
    editar.style.transform = 'translateX(150%) translateY(150%)';
    editar.style.transition = '200ms linear';
    configurar.style.transform = 'translateX(150%)';
    configurar.style.transition = '200ms linear'
    sair.style.transform = 'translateX(150%) translateY(-150%)';
    sair.style.transition = '200ms linear' 
}

//FUNCOES DA FOTO INTERATIVA
sair.onclick = function(){ //FUNCAO SAIR
    delObJason('userLogado');
    window.location.href = "../login/login.html";

}


btCompartilhar.onclick = function(){
    let data = new Date;
    let comentario = txtArea.value;
    let titulo = tituloComentario.value;
    if(comentario != null && comentario != ''){
        let usuariologado = getObJason('userLogado');
        let idComentario = parseInt(createObIdComentario());
        if(idComentario == 0){
                usuariologado.comentario = [{
                    id: idComentario + 1,
                    cmtTitulo: titulo,
                    cmt: comentario,
                    cmtData: (data.getDate() + "/" + data.getMonth() + "/" + data.getFullYear()),
                    cmtHora: (data.getHours() + ":" + data.getMinutes() + ":" + data.getSeconds())
                }];
        }
        else {
            usuariologado.comentario [idComentario] = {
                id: idComentario + 1,
                cmtTitulo: titulo,
                cmt: comentario,
                cmtData: (data.getDate() + "/" + data.getMonth() + "/" + data.getFullYear()),
                cmtHora: (data.getHours() + ":" + data.getMinutes() + ":" + data.getSeconds())
            }
        }
        usuariologado.ultimo_Id_Comentario = [idComentario + 1];
        //SALVA COMENTARIO NA ARRAY DE COMENTARIOS
        let Comentario = getObJason('Comentario')
        Comentario.push({
            usuarioId: usuariologado.idUser,
            comentario: usuariologado.comentario[idComentario]
        });
        upObJason('userLogado', usuariologado);
        upObJason('Comentario', Comentario);
        txtArea.value = '';
        listaUsuarios();
        alert('COMENTARIO GUARDADO');
        atualizaNComentario();

    }
    else{
        alert("COMENTARIO INVÁLIDO");
    }
}
