const atendimentos = document.getElementById("atendimentos");

const atendimentosList = buscarAtendimentos()
console.log(atendimentosList)

atendimentosList.map((atendimento)=>{
  const dog = buscarPet(atendimento.petId)
  console.log(dog)
  atendimentos.innerHTML +=
      `
      <div class="col-12 col-md-10 d-flex flex-column justify-content-center align-items-center mb-4 border border-black rounded p-2">
        <div class="container d-flex align-items-center justify-content-around border-bottom p-2 mb-2">
          <div class="d-flex justify-content-between align-items-center w-75">
            <p><span class="fw-bold">Nome do Pet:</span> ${dog.nome}</p>
            <p><span class="fw-bold">Raça:</span> ${dog.raca}</p>
            <p><span class="fw-bold">Porte:</span> ${dog.porte}</p>
          </div>
          <a href="#" class="btn">Editar</a>
        </div>

        <div class="container p-2 row">
          <div class="col-9">
            <div class="d-flex justify-content-evenly my-3 flex-wrap gap-2">
              <p><span class="fw-bold">Nome do Pet:</span> ${dog.nome}</p>
              <p><span class="fw-bold">Raça:</span> ${dog.raca}</p>
              <p><span class="fw-bold">Porte:</span> ${atendimento.porte}</p>
            </div>
            <div class="d-flex justify-content-evenly mb-3">
              <p><span class="fw-bold">Sexo:</span> ${atendimento.sexo}</p>
              <p><span class="fw-bold">Pelagem:</span> ${atendimento.pelagem}</p>
            </div>
            <div>
              <p><span class="fw-bold">Funcionário Responsável:</span> ${atendimento.funcionario}</p>
              <p><span class="fw-bold">Observações:</span> ${atendimento.observacao ? atendimento.observacao : "Sem observação"}</p>
            </div>
          </div>
          <div class="col-3">
            <img src="${dog.imagem}" alt="" class="img-fluid">
          </div>
        </div>
      </div>
      `
})
