var cardId = 1;

function cadastrarCard() {
    let titulo = document.getElementById('produto').value;
    let cards = document.getElementById('cards');
    let imgCards = cardId + 20;

    if (titulo == '') {
        alert('Preencha o campo!');
    }
    else{
        let novoCard = `
    <div class="col-md-3 mt-3" id="${cardId}">
        <div class="card justify-content-center text-center" style="width: 18rem;">
            <img src="https://picsum.photos/seed/${imgCards}/300/200" class="card-img-top" alt="Imagem Picsum">
            <div class="card-body" id="idaCard">
                <h5 class="card-title">${titulo}</h5>
                <button class="btn btn-danger" onclick="apagaCard(${cardId})">Apagar</button>
            </div>
         </div>
    </div>`

    cards.innerHTML += novoCard;
    cardId++;


    document.getElementById('produto').value = '';
    }
}

function apagaCard(cardId) {
    let card = document.getElementById(cardId);
    card.remove();
}

function apagarTodos() {
    let cards = document.getElementById('cards');
    cards.innerHTML = '';
}

