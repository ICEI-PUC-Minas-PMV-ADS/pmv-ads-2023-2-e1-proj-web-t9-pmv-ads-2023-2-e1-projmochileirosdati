import { getObJason, delObJason, upObJason, createObIdComentario } from '../area_do_usuario/crudDBareaUsuario.js';



body.onload = function(){
let userLogado = getObJason();
document.getElementById('demo').innerHTML= 'Olá, '+ userLogado.nome;
document.getElementById('infnome').innerHTML= userLogado.nome;
document.getElementById('infemail').innerHTML= userLogado.email;
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

sair.onclick = function(){
    delObJason('userLogado');
    window.location.href = "../login/login.html";

}

btCompartilhar.onclick = function(){
    let comentario = txtArea.value
    if(comentario != null && comentario != ''){
        let usuariologado = getObJason();
        let idComentario = parseInt(createObIdComentario());
        if(idComentario == 0){
            usuariologado.comentario = [{
                id: idComentario + 1,
                cmt: comentario
            }];
            console.log('true');
        }
        else {
            usuariologado.comentario [idComentario] = {
                id: idComentario + 1,
                cmt: comentario
            }
        }
        usuariologado.ultimo_Id_Comentario = [idComentario + 1];
        upObJason(usuariologado);
        txtArea.value = '';
        alert('COMENTARIO GUARDADO');
    }
    else{
        alert("COMENTARIO INVÁLIDO");
    }
}
