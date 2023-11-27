function runCode() {
    const inputCode = document.getElementById('inputCode').value;
    try {
        const compiledCode = Babel.transform(inputCode, {presets: ['@babel/preset-env']}).code;
        eval(compiledCode);
        document.getElementById('output').textContent = 'Código executado com sucesso!';
    } catch (error) {
        document.getElementById('output').textContent = 'Erro ao executar o código: ' + error.message;
    }
}