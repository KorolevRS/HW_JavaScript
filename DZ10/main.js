const appEl = document.querySelector('.app');
const players = playerTeam.response[0].players;
// console.log(players);
appEl.innerHTML = players.map((player) => renderPlayers(player)).join("");

const h2El = document.createElement('h2');
h2El.textContent = `Футбольная команда ${playerTeam.response[0].team.name}`;
h2El.style.textAlign = 'center';
document.body.prepend(h2El);

function renderPlayers(data) {
    return `
    <div class="playerItem">
        <div class="playerData">
            <h2 class="playerName">${data.name}</h2>
            <p class="age">Возраст: ${data.age}</p>
            <p class="number">Номер: ${data.number}</p>
            <p class="position">Позиция: ${data.position}</p>
        </div>
        <div class="playerPhoto">
            <img src="${data.photo}" alt="${data.name}">
        </div>
    </div>
    `;
};



