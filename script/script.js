const consultaDogsApi = 'https://dog.ceo/api/breeds/list';
const select = document.getElementById('select');

async function LoadDogs() {
    try {
        const response = await fetch(consultaDogsApi);
        const data = await response.json();
        const racas = data.message;

        console.log(racas)
        console.log(racas.length)

        for (let x = 0; x < racas.length; x++) {
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
    console.log(data)
    console.log(imagem)

    document.getElementById('img').innerHTML = `<img src='${imagem}'>`;
}

LoadDogs()