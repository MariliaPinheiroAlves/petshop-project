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
      `
      <div class="col-12 col-md-10 d-flex flex-column justify-content-center align-items-center mb-4 border border-black rounded p-2">
        <div class="container d-flex align-items-center justify-content-around border-bottom p-2 mb-2">
          <div class="d-flex justify-content-between align-items-center w-75">
            <p><span class="fw-bold">Nome do Pet:</span> ${atendimento[i].nomeDoCachorro}</p>
            <p><span class="fw-bold">Raça:</span> ${atendimento[i].raca}</p>
            <p><span class="fw-bold">Porte:</span> ${atendimento[i].porte}</p>
          </div>
          <a href="#" class="btn">Buscar</a>
        </div>

        <div class="container p-2 row">
          <div class="col-9">
            <div class="d-flex justify-content-evenly my-3 flex-wrap gap-2">
              <p><span class="fw-bold">Nome do Pet:</span> ${atendimento[i].nomeDoCachorro}</p>
              <p><span class="fw-bold">Raça:</span> ${atendimento[i].raca}</p>
              <p><span class="fw-bold">Porte:</span> ${atendimento[i].porte}</p>
            </div>
            <div class="d-flex justify-content-evenly mb-3">
              <p><span class="fw-bold">Sexo:</span> ${atendimento[i].sexo}</p>
              <p><span class="fw-bold">Pelagem:</span> ${atendimento[i].pelagem}</p>
            </div>
            <div>
              <p><span class="fw-bold">Funcionário Responsável:</span> ${atendimento[i].funcionarioResponsavel}</p>
              <p><span class="fw-bold">Observações:</span> ${atendimento[i].observacao ? atendimento[i].observacao : "Sem observação"}</p>
            </div>
          </div>
          <div class="col-3">
            <img src="https://placehold.co/200x200" alt="" class="img-fluid">
          </div>
        </div>
      </div>
      `
  }
}

exibirAtendimentos();