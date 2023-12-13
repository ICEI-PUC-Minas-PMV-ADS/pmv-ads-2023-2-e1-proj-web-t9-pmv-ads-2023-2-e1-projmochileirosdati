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
        nomeUser: nome.value,
        sobrenomeUser:sobrenome.value,
        emailUser: email.value,
        senhaUser: senha.value,
        confirmeSenhaUser: confSenha.value,
        imgPerfil:x,
        sobreUsuario:text.value
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


  fundo.onmouseover = function() {mouseOver()};
  fundo.onmouseout = function() {mouseOut()}; 
  function mouseOver() {
  fundo.style.color= "rgba(0,0,0,0.5)";
  }

  function mouseOut() {
  fundo.style.color= "rgba(0,0,0,0.0)";
  }
  h



  function mudarimagem(a){
    let x=a
    if (x==0){
      fundo.style.backgroundImage="url('/pmv-ads-2023-2-e1-proj-web-t9-pmv-ads-2023-2-e1-projmochileirosdati-main/codigo-fonte/img_Users/imagem1User.png')";
      return  y ="/pmv-ads-2023-2-e1-proj-web-t9-pmv-ads-2023-2-e1-projmochileirosdati-main/codigo-fonte/img_Users/imagem1User.png";
    }

    if (x==1){
      fundo.style.backgroundImage="url('/pmv-ads-2023-2-e1-proj-web-t9-pmv-ads-2023-2-e1-projmochileirosdati-main/codigo-fonte/img_Users/imagem2User.png')"; 
      return  y ="/pmv-ads-2023-2-e1-proj-web-t9-pmv-ads-2023-2-e1-projmochileirosdati-main/codigo-fonte/img_Users/imagem2User.png"; 
    }
    if (x==2){
      fundo.style.backgroundImage="('/pmv-ads-2023-2-e1-proj-web-t9-pmv-ads-2023-2-e1-projmochileirosdati-main/codigo-fonte/img_Users/imagem3User.png')"; 
      return  y ="/pmv-ads-2023-2-e1-proj-web-t9-pmv-ads-2023-2-e1-projmochileirosdati-main/codigo-fonte/img_Users/imagem3User.png";     
    }
    if (x==3){
      fundo.style.backgroundImage="url('/pmv-ads-2023-2-e1-proj-web-t9-pmv-ads-2023-2-e1-projmochileirosdati-main/codigo-fonte/img_Users/imagem4User.png')"; 
      return  y ="/pmv-ads-2023-2-e1-proj-web-t9-pmv-ads-2023-2-e1-projmochileirosdati-main/codigo-fonte/img_Users/imagem4User.png"; 
    }
    if (x==4){
      fundo.style.backgroundImage="url('/pmv-ads-2023-2-e1-proj-web-t9-pmv-ads-2023-2-e1-projmochileirosdati-main/codigo-fonte/img_Users/imagem5User.png')"; 
      return  y ="/pmv-ads-2023-2-e1-proj-web-t9-pmv-ads-2023-2-e1-projmochileirosdati-main/codigo-fonte/img_Users/imagem5User.png"; 
    }
  }
