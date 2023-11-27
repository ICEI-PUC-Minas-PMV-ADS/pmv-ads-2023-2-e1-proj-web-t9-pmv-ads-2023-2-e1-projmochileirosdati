function readDadosUsuarioLogado(){
    return JSON.parse(localStorage.getItem('DadosUsuarioLogado')) || [];
}

let usuario = readDadosUsuarioLogado();

export{
    usuario
}



