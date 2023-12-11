export function getObJason(objeto){
    let userLogado=JSON.parse(localStorage.getItem(objeto) || 0);
    return userLogado;
}

//ATUALIZA O OBJETO userLogado NO DB WEB JASON 
export function upObJason(objetoWeb, objeto){
    localStorage.setItem(objetoWeb, JSON.stringify(objeto));
}

