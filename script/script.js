

const select = document.getElementById('select');
const dogs = JSON.parse(localStorage.getItem('pets')) || []     

const modal = document.getElementById("listaPets")
const atualizar = document.getElementById('buttonCadAtt')
atualizar.innerHTML=`<button type="button" class="btn btn-success" onclick="cadastrarDogs()">Cadastrar</button>`
async function LoadDogs() {
    
    try {
        const response = await fetch('https://dog.ceo/api/breeds/list');
        const data = await response.json();
        const racas = data.message;
        

        for(let x = 0;x<racas.length;x++){
            select.innerHTML += `<option value='${racas[x]}'>${racas[x]}</option>`
        }
                
    } catch (error) {
                console.error('Erro ao buscar raças:', error);
        }
}

async function atualizarImagems() {
    let response = await fetch(`https://dog.ceo/api/breed/${select.value}/images/random`);
    let data = await response.json();
    let imagem = data.message;
    document.getElementById('img').innerHTML = `<img src='${imagem}' id='imgDog'>`;
}

function cadastrarDogs(){
    const nomeDog = document.getElementById("nomeDog")
    const selectRaca = document.getElementById("select")
    const idadeDog = document.getElementById("idadeDog")
    const apelidoDog = document.getElementById("apelidoDog")
    const porteDog = document.getElementById("porteDog")
    const pelagemDog = document.getElementById("pelagemDog")
    const observacaoDog = document.getElementById("observacao")
    const imgDOG = document.getElementById('imgDog')
    const tutor = document.getElementById('tutor')
    const telefone = document.getElementById('telefoneTutor')
    const enderecoTutor = document.getElementById('enderecoTutor')

    if(nomeDog.value == '' || selectRaca.value == '' || idadeDog.value=='' || apelidoDog.value=='' || porteDog.value==''||pelagemDog.value==''||  tutor.value=='' || telefone.value=='' || enderecoTutor.value==''){
        alert('Preencha todos os campos')
        return
    }
    const novoDOG = {
        nome : nomeDog.value,
        raca : selectRaca.value,
        idade : idadeDog.value,
        apelido : apelidoDog.value,
        porte : porteDog.value,
        pelagem : pelagemDog.value,
        observacao : observacaoDog.value,
        imagem : imgDOG.src,
        tutor: tutor.value,
        telefone: telefone.value,
        enderecoTutor: enderecoTutor.value
    }
    salvarPet(novoDOG)
    alert('Cadastrado com Sucesso')
    location.reload()
}


function listarDogs(){
    document.getElementById('img').innerHTML = `<img src='' id='imgDog'>`;
    const nomeDog = document.getElementById("nomeDog")
    const selectRaca = document.getElementById("select")
    const idadeDog = document.getElementById("idadeDog")
    const apelidoDog = document.getElementById("apelidoDog")
    const porteDog = document.getElementById("porteDog")
    const pelagemDog = document.getElementById("pelagemDog")
    const observacaoDog = document.getElementById("observacao")
    const imgDOG = document.getElementById('imgDog')
    const tutor = document.getElementById('tutor')
    const telefone = document.getElementById('telefoneTutor')
    const enderecoTutor = document.getElementById('enderecoTutor')
    modal.innerHTML=''
    const titlePage = document.getElementById('titlePage')

    titlePage.innerHTML = 'Editar Pet'
    const pets = buscarPets();

    pets.forEach(element => {
        modal.innerHTML += `<div ><span><strong>Pet:</strong> ${element.nome}</span><span><strong>Tutor: </strong>${element.tutor}</span><span><button class='selecionarEdicao' data-id='${element.id}' data-bs-dismiss="modal">Editar</button></span></div>`
    });

    document.querySelectorAll('.selecionarEdicao').forEach((button) => {
        button.addEventListener('click', (e) => {
        const div = e.target.closest('.selecionarEdicao');
        const id = div.getAttribute('data-id');
        const dog = buscarPet(id); 
        
        
        nomeDog.value = dog.nome
        selectRaca.value = dog.raca
        idadeDog.value =dog.idade
        apelidoDog.value = dog.apelido
        porteDog.value = dog.porte
        pelagemDog.value = dog.pelagem
        observacaoDog.value = dog.observacao
        imgDOG.src = dog.imagem
        tutor.value = dog.tutor
        telefone.value = dog.telefone
        enderecoTutor.value = dog.enderecoTutor
        
        atualizar.innerHTML='<button type="button" class="btn btn-secondary">Atualizar</button>'
        atualizar.addEventListener('click',()=>{
            
            if(nomeDog.value == '' || selectRaca.value == '' || idadeDog.value=='' || apelidoDog.value=='' || porteDog.value==''||pelagemDog.value==''|| tutor.value=='' || telefone.value=='' || enderecoTutor.value==''){
                alert('Preencha todos os campos')
                return
            }
            petAtualizado ={
                id: id,
                nome : nomeDog.value,
                raca : selectRaca.value,
                idade : idadeDog.value,
                apelido : apelidoDog.value,
                porte : porteDog.value,
                pelagem : pelagemDog.value,
                observacao : observacaoDog.value,
                imagem : imgDOG.src,
                tutor: tutor.value,
                telefone: telefone.value,
                enderecoTutor: enderecoTutor.value
            }
            atualizarPet(petAtualizado)
           
            location.reload()                   
            alert('Atualizado com Sucesso')
        })

        });
    });
    
        
}

LoadDogs()




