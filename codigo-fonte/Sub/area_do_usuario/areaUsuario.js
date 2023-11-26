function myfunction(){
    let userLogado=JSON.parse(localStorage.getItem('userLogado'));
    document.getElementById('demo').innerHTML= 'Olá, '+ userLogado.nome;
    document.getElementById('infnome').innerHTML= userLogado.nome;
    document.getElementById('infemail').innerHTML= userLogado.email;
}
