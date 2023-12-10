function runCode(){
    var userString = document.getElementById('inputCode').value;
    
    var stringCorreta = 'var A = 1, B = 2, C = A + B;'

    if (userString === stringCorreta){
        alert("Parabéns! Você digitou o código corretamente.");
    } else{
        alert("A código não foi digitado corretamente. Tente novamente.");
    }
}
