
function getDbJason(){
    let userLogado=JSON.parse(localStorage.getItem('userLogado'));
    return userLogado;
}

function myfunction(){
    let userLogado = getDbJason();
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
    localStorage.removeItem('userLogado');
    window.location.href = "../login/login.html";

}
