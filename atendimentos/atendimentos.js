const atendimentos = document.getElementById("atendimentos");

const atendimento = [
  {
    nomeDoCachorro: "Jujuba",
    raca: "Dachshund",
    funcionarioResponsavel: "João",
    porte: "Pequeno",
    sexo: "Femêa",
    especie: "Canina",
    pelagem: "Curto",
    observacao: null,
    statusDoAtendimento: "Finalizado"
  },
  { 
    nomeDoCachorro: "Malu", 
    raca: "RND", 
    funcionarioResponsavel: "João", 
    porte: "Pequeno",
    sexo: "Femêa",
    especie: "Canina",
    pelagem: "Curto",
    observacao: null,
    statusDoAtendimento: "Em Andamento" 
  },
  { 
    nomeDoCachorro: "Teka", 
    raca: "Pug", 
    funcionarioResponsavel: "Marcos", 
    porte: "Pequeno",
    sexo: "Femêa",
    especie: "Canina",
    pelagem: "Curto",
    observacao: "Animal com problema dermatologico",
    statusDoAtendimento: "Finalizado" 
  },
  { 
    nomeDoCachorro: "Paçoca", 
    raca: "Golden", 
    funcionarioResponsavel: "Marcos", 
    porte: "Grande",
    sexo: "Macho",
    especie: "Canina",
    pelagem: "Longo",
    observacao: null,
    statusDoAtendimento: "Em Andamento" 
  },
  { 
    nomeDoCachorro: "Pipoca", 
    raca: "Rottweiler", 
    funcionarioResponsavel: "Carlos", 
    porte: "Grande",
    sexo: "Femêa",
    especie: "Canina",
    pelagem: "Curto",
    observacao: "Animal feroz",
    statusDoAtendimento: "Em Andamento" 
  },
]

const exibirAtendimentos = () => {
  for (let i = 0; i < atendimento.length; i++) {
    atendimentos.innerHTML +=
      `<div class="atendimento">
          <p>Nome do Pet: ${atendimento[i].nomeDoCachorro}</p>
          <p>Raça: ${atendimento[i].raca}</p>
          <p>Funcionario: ${atendimento[i].funcionarioResponsavel}</p> 
          <p>Status: ${atendimento[i].statusDoAtendimento}</p>
        </div>
      `
  }
}

exibirAtendimentos();