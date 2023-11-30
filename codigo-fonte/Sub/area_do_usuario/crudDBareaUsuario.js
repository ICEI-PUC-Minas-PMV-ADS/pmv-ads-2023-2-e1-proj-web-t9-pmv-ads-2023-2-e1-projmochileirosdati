
//FUNCOES PARA CONTROLE DE OBJETOS
export function getObJason(){
    let userLogado=JSON.parse(localStorage.getItem('userLogado'));
    return userLogado;
}

export function delObJason(objeto){
    localStorage.removeItem(objeto)
}

//CRIA A ARRAY DOS COMENTARIOS DENTRO DO OBJETO userLogado
export function createObIdComentario(){
    let userLogado = getObJason();
    let ultimoIdComentario = userLogado.ultimo_Id_Comentario || 0;
    return ultimoIdComentario; 
    
}

//ATUALIZA O OBJETO userLogado NO DB WEB JASON 
export function upObJason(objeto){
    localStorage.setItem('userLogado', JSON.stringify(objeto));
}


//FUNCAO PARA CRIACAO DE NOVA ARRAY




//FUNCAO PARA CRIACAO 
