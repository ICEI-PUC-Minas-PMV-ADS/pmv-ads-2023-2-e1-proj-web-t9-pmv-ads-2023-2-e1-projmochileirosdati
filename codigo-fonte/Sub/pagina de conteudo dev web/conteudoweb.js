function runCode(){
    var userString = document.getElementById('inputString').value;
    
    var stringCorreta = 'console.log("Olá, mundo!");'

    if (userString === stringCorreta){
        alert("Parabéns! Você digitou o código corretamente.");
    } else{
        alert("A código não foi digitado corretamente. Tente novamente.");
    }
}
