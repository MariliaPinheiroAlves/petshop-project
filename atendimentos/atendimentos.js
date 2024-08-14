const atendimentos = document.getElementById("atendimentos");

const atendimento = [
  { nomeDoCachorro: "Jujuba", raca: "Dachshund", funcionarioResponsavel: "João", statusDoAtendimento: "Finalizado" },
  { nomeDoCachorro: "Pipoca", raca: "Rottweiler", funcionarioResponsavel: "Carlos", statusDoAtendimento: "Em Andamento" },
  { nomeDoCachorro: "Malu", raca: "RND", funcionarioResponsavel: "João", statusDoAtendimento: "Em Andamento" },
  { nomeDoCachorro: "Teka", raca: "Pug", funcionarioResponsavel: "Marcos", statusDoAtendimento: "Finalizado" },
  { nomeDoCachorro: "Paçoca", raca: "Golden", funcionarioResponsavel: "Marcos", statusDoAtendimento: "Em Andamento" }
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