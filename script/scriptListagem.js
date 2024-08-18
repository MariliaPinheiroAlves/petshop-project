function listagemDogs(){
    const lista = document.querySelector('.listaDogs')
    let dogs = buscarPets()
    console.log(dogs)
    dogs.forEach((element, index)=>{

        if(index%2==0){
            lista.innerHTML += `
            <div class="accordion-item">
                      <h2 class="accordion-header ">
                        <span class=" headerLista accordion-button collapsed " data-bs-toggle="collapse" data-bs-target="#${element.id}" aria-expanded="false" aria-controls="flush-collapseOne">
                        <span class="d-flex justify-content-around w-100 listagemDogs">
                        <span><Strong>Pet: </strong>${element.nome}</span> <span><Strong>Raça: </strong>${element.raca}</span> <span><Strong>Tutor: </strong>${element.tutor}</span>
                        </span>
                        </span>
                      </h2>
                      <div id="${element.id}" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body">
                                <p>Aqui vai ficar a foto de cada animal</p> <img src='${element.imagem}'>
                        </div>
                      </div>
            </div>`
        }else{
            lista.innerHTML += `
            <div class="accordion-item">
                    <h2 class="accordion-header ">
                        <span class=" headerListaImpar accordion-button collapsed " data-bs-toggle="collapse" data-bs-target="#${element.id}" aria-expanded="false" aria-controls="flush-collapseOne">
                        <span class="d-flex justify-content-around w-100 listagemDogs">
                        <span><Strong>Pet: </strong>${element.nome}</span> <span><Strong>Raça: </strong>${element.raca}</span> <span><Strong>Tutor: </strong>${element.tutor}</span>
                        </span>
                        </span>
                    </h2>
                    <div id="${element.id}" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body">
                                <p>Aqui vai ficar a foto de cada animal</p> <img src='${element.imagem}'>
                        </div>
                    </div>
            </div>`
        }
        
    })
    
}

listagemDogs()