
//FUNCOES PARA CONTROLE DE OBJETOS
export function getObJason(objeto){
    let userLogado=JSON.parse(localStorage.getItem(objeto))||[];
    return userLogado;
}

export function delObJason(objeto){
    localStorage.removeItem(objeto)
}

//CRIA A ARRAY DOS COMENTARIOS DENTRO DO OBJETO userLogado
export function createObIdComentario(){
    let userLogado = getObJason('userLogado');
    let ultimoIdComentario = userLogado.ultimo_Id_Comentario || 0;
    return ultimoIdComentario; 
    
}

//ATUALIZA O OBJETO userLogado NO DB WEB JASON 
export function upObJason(objetoWeb, objeto){
    localStorage.setItem(objetoWeb, JSON.stringify(objeto));
}

//SALVA OBJETO userLogado no listaUser
export function listaUsuarios(){
    let lista = getObJason('listaUser');
    let usuario = getObJason('userLogado');
    console.log(lista);
    console.log(usuario);
    lista.forEach((element) => {
        if(usuario.idUser == element.idUser){
            element.comentario = usuario.comentario;
            element.ultimo_Id_Comentario = usuario.ultimo_Id_Comentario;
            console.log(lista);
            alert('DADOS DO USUARIO SALVOS NA LISTA');
            upObJason('listaUser', lista)
        }
        else{console.log('ERRO LASCOU!!');}
           
    });
}