var chavePet = "pets"

var chaveAtendimento = "atendimentos"


// Função para gerar um ID único
function gerarIdUnico() {
    return '_' + Math.random().toString(36).substr(2, 9);
}

// Função para salvar pet no localStorage
function salvarPet(pet) {
    pet.id = gerarIdUnico()
    const pets = JSON.parse(localStorage.getItem(chavePet)) || [];
    pets.push(pet);
    localStorage.setItem(chavePet, JSON.stringify(pets));
}

// Função para atualizar pet no localStorage
function atualizarPet(petAtualizado) {
    let pets = JSON.parse(localStorage.getItem(chavePet)) || [];
    pets = pets.map(pet => pet.id === petAtualizado.id ? petAtualizado : pet);
    localStorage.setItem(chavePet, JSON.stringify(pets));
}

// Função para carregar e exibir a lista de pets
function buscarPets() {
    const pets = JSON.parse(localStorage.getItem(chavePet)) || [];
    return pets
}

// Função para buscar pet
function buscarPet(id) {
    const pets = JSON.parse(localStorage.getItem(chavePet)) || [];
    const pet = pets.find(p => p.id === id);
    return pet
}


// Função para salvar atendimento no localStorage
function salvarAtendimento(atendimento) {
    atendimento.id = gerarIdUnico()
    const atendimentos = JSON.parse(localStorage.getItem(chaveAtendimento)) || [];
    atendimentos.push(atendimento);
    localStorage.setItem(chaveAtendimento, JSON.stringify(atendimentos));
}

// Função para coletar dados do formulário e salvar o atendimento
function agendarAtendimento() {
    const selectPet = document.getElementById("selectPet").value;
    const pelagem = document.getElementById("pelagem").value;
    const porte = document.getElementById("porte").value;
    const observacoes = document.getElementById("observacoes").value;
    const selectFuncionario = document.getElementById("selectFuncionario").value;
    const data = document.getElementById("data").value;
    const horario = document.getElementById("horario").value;
    const valorTotal = document.getElementById("valorTotal").value;
    
    // Coleta dos serviços selecionados
    const servicos = Array.from(document.querySelectorAll('input[type="checkbox"]:checked'))
                           .map(checkbox => checkbox.value);

    if (!selectPet || !selectFuncionario || !data || !horario) {
        alert('Preencha todos os campos obrigatórios');
        return;
    }

    const novoAtendimento = {
        petId: selectPet,
        pelagem,
        porte,
        observacoes,
        funcionario: selectFuncionario,
        data,
        horario,
        servicos,
        valorTotal
    };

    salvarAtendimento(novoAtendimento);
    alert('Atendimento agendado com sucesso!');
    location.reload()
}


// Função para carregar e exibir a lista de atendimentos
function buscarAtendimentos() {
    const atendimentos = JSON.parse(localStorage.getItem(chaveAtendimento)) || [];
    return atendimentos
}


// Função para atualizar atendimento no localStorage
function atualizarAtendimento(atendimentoAtualizado) {
    let atendimentos = JSON.parse(localStorage.getItem(chaveAtendimento)) || [];
    atendimentos = atendimentos.map(atendimento => atendimento.id === atendimentoAtualizado.id ? atendimentoAtualizado : atendimento);
    localStorage.setItem(chaveAtendimento, JSON.stringify(atendimentos));
}


// Função para buscar atendimento
function buscarAtendimento(id) {
    const atendimentos = JSON.parse(localStorage.getItem(chaveAtendimento)) || [];
    const atendimento = atendimentos.find(p => p.id === id);
    return atendimento
}


//Função para preencher as opções do <select> com os pets armazenados no localStorage:
function preencherSelectPets() {
    const selectElement = document.getElementById('selectPet');
    const pets = buscarPets();

    pets.forEach(pet => {
        const option = document.createElement('option');
        option.value = pet.id;
        option.textContent = `Nome do pet: ${pet.nome} - Nome do Tutor: ${pet.tutor} - Raça: ${pet.raca}`;
        selectElement.appendChild(option);
    });
}

document.addEventListener('DOMContentLoaded', preencherSelectPets);

document.getElementById("selectPet").addEventListener("change", function() {
    const pets = buscarPets();
    const selectedPet = pets.find(pet => pet.id === this.value);

    if (selectedPet) {
        document.getElementById("pelagem").value = selectedPet.pelagem;
        document.getElementById("porte").value = selectedPet.porte;
        document.getElementById("observacoes").value = selectedPet.observacao;

        const imgFieldset = document.getElementById("img");
        imgFieldset.innerHTML = ''; 
        const img = document.createElement('img');
        img.src = selectedPet.imagem;

        img.style.maxWidth = '200px'; 
        img.style.maxHeight = '200px'; 
        imgFieldset.appendChild(img);
    } else {
        document.getElementById("pelagem").value = "";
        document.getElementById("porte").value = "";
        document.getElementById("observacoes").value = "";
        document.getElementById("img").innerHTML = ''; 
    }
});
