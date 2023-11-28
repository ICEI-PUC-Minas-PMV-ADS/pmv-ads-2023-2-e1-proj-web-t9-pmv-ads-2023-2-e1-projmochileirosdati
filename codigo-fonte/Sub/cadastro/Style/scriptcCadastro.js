function cadastrar() {
 
    if (nome.value == "" || nome.value.length < 4) {
      alert("Preencha o formulário corretamente!");
      nome.focus();
      return;
    }
    if (email.value == "") {
      alert("Preencha o formulário corretamente!");
      email.focus();
      return;
    }
    if (senha.value == "" || senha.value.length < 6) {
      alert("Preencha o formulário corretamente!");
      Senha.focus();
      return;
    }
    if (confSenha.value == "") {
      alert("Preencha o formulário corretamente!");
      ConfirmeSenha.focus();
      return;
    }
  
    if (senha.value != confSenha.value) {
      alert("As senhas não correspondem!");
      ConfirmeSenha.focus();
      return;
    }
  
    let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')
    let contadorUsers = listaUser.length;
    console.log(listaUser);
  
    listaUser.push(
      {
        idUser: contadorUsers + 1,
        nomeUser: formulario.nome.value,
        emailUser: formulario.email.value,
        SenhaUser: formulario.senha.value,
        ConfirmeSenhaUser: formulario.confSenha.value
      });

    
    localStorage.setItem("Contador", JSON.stringify(contadorUsers + 1));
    localStorage.setItem("listaUser", JSON.stringify(listaUser));
  
    alert("Usuário cadastrado com sucesso!");
    window.location.href = "../../Sub/login/login.html";
  }