function cadastrar() {
 
    if (nome.value == "" || nome.value.length < 3) {
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
    let x=y;
    listaUser.push(
      {
        idUser: contadorUsers + 1,
        nomeUser: formulario.nome.value,
        emailUser: formulario.email.value,
        SenhaUser: formulario.senha.value,
        ConfirmeSenhaUser: formulario.confSenha.value,
       imgPerfil:x
      });

    
    localStorage.setItem("Contador", JSON.stringify(contadorUsers + 1));
    localStorage.setItem("listaUser", JSON.stringify(listaUser));
  
    alert("Usuário cadastrado com sucesso!");
    window.location.href = "../../Sub/login/login.html";
  }
 function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }


  document.getElementById("fundo").onmouseover = function() {mouseOver()};
  document.getElementById("fundo").onmouseout = function() {mouseOut()}; 
  function mouseOver() {
  document.getElementById("fundo").style.color= "rgba(0,0,0,0.5)";
  }

  function mouseOut() {
  document.getElementById("fundo").style.color= "rgba(0,0,0,0.0)";
  }



  function mudarimagem(a){
    let x=a
    if (x==0){
      document.getElementById("fundo").style.backgroundImage="url('/codigo-fonte/Sub/cadastro/img/Captura de tela 2023-12-10 020229.png')";
    return  y ="/codigo-fonte/Sub/cadastro/img/Captura de tela 2023-12-10 020229.png";
    }

    if (x==1){
      document.getElementById("fundo").style.backgroundImage="url('./img/Captura de tela 2023-12-09 194243.png')"; 
      return  y ="/codigo-fonte/Sub/cadastro/img/Captura de tela 2023-12-09 194243.png"; 
    }
    if (x==2){
      document.getElementById("fundo").style.backgroundImage="url('./img/Captura de tela 2023-12-09 194303.png')"; 
      return  y ="/codigo-fonte/Sub/cadastro/img/Captura de tela 2023-12-09 194303.png";     
    }
    if (x==3){
      document.getElementById("fundo").style.backgroundImage="url('./img/Captura de tela 2023-12-09 194339.png')"; 
      return  y ="/codigo-fonte/Sub/cadastro/img/Captura de tela 2023-12-09 194339.png"; 
    }
    if (x==4){
      document.getElementById("fundo").style.backgroundImage="url('./img/Captura de tela 2023-12-09 194437.png')"; 
      return  y ="/codigo-fonte/Sub/cadastro/img/Captura de tela 2023-12-09 194437.png"; 
    }
  }
