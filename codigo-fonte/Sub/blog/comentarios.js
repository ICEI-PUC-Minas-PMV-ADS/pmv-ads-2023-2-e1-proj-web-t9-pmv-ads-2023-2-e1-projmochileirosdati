import { getObJason } from "./crudDBblog.js"; 

let listaUsuarios = getObJason('listaUser');
if (listaUsuarios != undefined){

    // function mouseEstrelas(){
    //     for(let s = 1; s <=5; i++){
    //         let star = document.getElementById('e' + s);
            
    //     }
    // }
    // let star = document.getElementById('e1');
    // star.onmouseenter = function(){
    //     star.src = './/img/estrelaamarela.png';
    // }
    // star.onmousedown = function(){
    //     star.src = './/img/estrelabranca.png';
    // }

    let dadosUsuario = getObJason('userLogado');
    let Comentarios = getObJason('Comentario');
    console.log(dadosUsuario);
    let nomeUsuario;
    let foto;
    let ultimoComentario = parseInt(Comentarios.length);
    console.log(ultimoComentario);
    for(let j = 0; j < ultimoComentario; j++ ){

        let usuarioId = Comentarios[j].usuarioId;
        listaUsuarios.forEach(element => {
            if(element.idUser == usuarioId){
                nomeUsuario = element.nomeUser + " " + element.sobrenomeUser;
                foto = element.imgPerfil;

            };
        });


        //CRIACAO DO SECTION QUE VAI DENTRO DA MAIN **
        var section = document.createElement('section');

        var figure = document.createElement('figure'); //CRIA O FIGURE DENTRO DO SECTION
        var img = document.createElement('img');
        img.className = 'fotoUsuarioComentario';
        img.src = foto;
        img.alt = 'imagemusuario 1';
        figure.appendChild(img);

        var header = document.createElement('header');
        header.className = 'usuario';
        var h2 = document.createElement('h2');
        h2.className = 'identificação';
        var textoh2 = document.createTextNode('@ ' + nomeUsuario);
        h2.appendChild(textoh2);
        var h5 = document.createElement('h5');
        h5.className = 'dataPublicacao';
        var textoh5 = document.createTextNode((Comentarios[j].comentario.cmtData + " | " + Comentarios[j].comentario.cmtHora) || 'dd/mm/yyyy');
        h5.appendChild(textoh5);
        header.appendChild(h2);
        header.appendChild(h5);

        var article = document.createElement('article');
        article.className = 'comentariousuario 1';
        var h3 = document.createElement('h3');
        var textoh3 = document.createTextNode(Comentarios[j].comentario.cmtTitulo || '');
        h3.appendChild(textoh3);
        var h4 = document.createElement('h4');
        var textoh4 = document.createTextNode(Comentarios[j].comentario.cmt);
        h4.appendChild(textoh4);
        article.appendChild(h3);
        article.appendChild(h4);
        var aside = document.createElement('aside');
        var div = document.createElement('div');
        div.className = 'avaliacao';
        div.type = 'radio';
        var ul = document.createElement('ul');
        ul.className = 'estrelas';

        let estrela
        for(var i = 1; i <= 5; i++){
            var li = document.createElement('li');
            estrela = document.createElement('img');
            estrela.className = 'estrela estrela' + i;
            estrela.value= i;
            estrela.src = './/img/estrelabranca.png';
            li.appendChild(estrela);
            ul.appendChild(li);
        }
        div.appendChild(ul);
        var h5_2 = document.createElement('h5');
        h5_2.className = 'btnResponder';
        var textoh5_2 = document.createTextNode('Responder');
        h5_2.appendChild(textoh5_2);
        aside.appendChild(div);
        aside.appendChild(h5_2);
        article.appendChild(aside);

        var footer = document.createElement('footer');
        footer.className = 'respostasusuario 1';
        var div_2 = document.createElement('div');
        div_2.className = 'respostasQ';
        var textodiv_2 = document.createTextNode('Repostas');
        div_2.appendChild(textodiv_2);
        footer.appendChild(div_2);



        section.appendChild(figure);
        section.appendChild(header);
        section.appendChild(article);
        section.appendChild(footer);


        main.appendChild(section);
    }
}
