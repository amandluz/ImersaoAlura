// console.log(dados);

function pesquisar() {
    // Seleciona a seção HTML com o ID "resultados-pesquisa" onde os resultados serão exibidos.
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa =document.getElementById("campo-pesquisa").value

    // se o campoPesquisa for uma string sem nada nao mostra nada
    if (campoPesquisa == "") {
      section.innerHTML = "<p>Nada foi encontrado! Digite um filme do Brasil.</p>"
      return 
    }

    campoPesquisa = campoPesquisa.toLowerCase()


    // Inicializa uma string vazia para armazenar os resultados da pesquisa.
    let resultados = ""; 
    let titulo = "";
    let descricao = "";
    let tags = "";

    // Itera sobre cada elemento (dado) dentro do array 'dados'.
    for (let dado of dados) {
      titulo = dado.titulo.toLocaleLowerCase()
      descricao = dado.descricao.toLocaleLowerCase()
      tags = dado.tags.toLocaleLowerCase()
      // se titulo includes campo pesquisa, entao faça...  
      if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
        // cria um novo elemento
        resultados += `
        <div class="item-resultado"> <h2> <a href=${dado.link} target="_blank">${dado.titulo}</a> </h2>
          <p class="descricao-meta">${dado.descricao}</p> </div>
      `;
      }
    }
    
    //se a pessoa escrever errado
    if (!resultados) {
        resultados = "<p>Nada foi encontrado!</p>"
    }

    // Atribui a string com todos os resultados ao conteúdo HTML da seção.
    section.innerHTML = resultados;
  }








