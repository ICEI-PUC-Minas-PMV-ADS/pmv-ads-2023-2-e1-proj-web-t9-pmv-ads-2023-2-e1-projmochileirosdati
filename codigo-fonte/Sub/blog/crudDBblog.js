export function readDadosUsuarioLogado(){
    let usuario =  JSON.parse(localStorage.getItem('DadosUsuarioLogado')) || [];
    return usuario;
}


//FUNCOES PARA CONTROLE DE OBJETOS
export function getObJason(objeto){
    let userLogado=JSON.parse(localStorage.getItem(objeto)) || [];
    console.log(userLogado);
    return userLogado;
}

//ATUALIZA O OBJETO userLogado NO DB WEB JASON 
export function upObJason(objetoWeb, objeto){
    localStorage.setItem(objetoWeb, JSON.stringify(objeto));
}

