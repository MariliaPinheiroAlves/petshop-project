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
      <div class="col-12 col-md-10 d-flex flex-column justify-content-center align-items-center mb-4">
        <p class="w-100">Atendimento ${i+1}</p>
        <div class="container d-flex align-items-center justify-content-around border rounded border-black p-2 mb-2">
          <div class="d-flex justify-content-between align-items-center w-75">
            <p><span class="fw-bold">Nome do Pet:</span> Jujuba</p>
            <p><span class="fw-bold">Raça:</span> Dachshund</p>
            <p><span class="fw-bold">Porte:</span> Pequeno</p>
          </div>
          <a href="#" class="btn">Buscar</a>
        </div>

        <div class="container border rounded border-black p-2 row">
          <div class="col-9">
            <div class="d-flex justify-content-evenly my-3">
              <p><span class="fw-bold">Nome do Pet:</span> Jujuba</p>
              <p><span class="fw-bold">Espécie:</span> Canina</p>
              <p><span class="fw-bold">Raça:</span> Dachshund</p>
            </div>
            <div class="d-flex justify-content-evenly mb-3">
              <p><span class="fw-bold">Sexo:</span> Fêmea</p>
              <p><span class="fw-bold">Pelagem:</span> Pelo curto</p>
              <p><span class="fw-bold">Porte:</span> Pequeno</p>
            </div>
            <div>
              <p><span class="fw-bold">Funcionário Responsável:</span> Marília</p>
              <p><span class="fw-bold">Observações:</span> Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Odio, asperiores?</p>
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