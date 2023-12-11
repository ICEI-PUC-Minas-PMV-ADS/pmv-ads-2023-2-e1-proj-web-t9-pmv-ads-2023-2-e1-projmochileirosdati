
//PEGA OBJETO SALVO NO LOCAL STORAGE
export function getObJason(objeto){
    let userLogado=JSON.parse(localStorage.getItem(objeto));
    return userLogado;
}

//ATUALIZA O OBJETO userLogado NO DB WEB JASON 
export function upObJason(objetoWeb, objeto){
    localStorage.setItem(objetoWeb, JSON.stringify(objeto));
}


export function listaUsuarios(){
    let lista = getObJason('listaUser');
    let usuario = getObJason('userLogado');
    lista.forEach((element) => {
        if(usuario.id == element.idUser){
            element.coment.push(usuario.comentario);
            element.ultimo_Id_Coment.push(usuario.ultimo_Id_Comentario);
            console.log(lista);
            console.log(element.email);
            alert('DADOS DO USUARIO SALVO NA LISTA');
            upObJason('listaUser', lista);
        }
        else{console.log('ERRO LASCOU!!');}
           
    });
}