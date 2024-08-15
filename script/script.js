
const select = document.getElementById('select');
const dogs = JSON.parse(localStorage.getItem('pets')) || []     
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
    // console.log(data)
    // console.log(imagem)

    document.getElementById('img').innerHTML = `<img src='${imagem}' id='imgDog'>`;
    
    console.log('-------------')
    
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
        telefone: telefone.value
    }
    console.log(imgDOG.src)
    dogs.push(novoDOG)

    localStorage.setItem('pets', JSON.stringify(dogs))
    

}
LoadDogs()

