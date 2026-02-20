const nomeInput = document.getElementById('nomeInput');
const desejosInput = document.getElementById('desejosInput');
const addBtn = document.getElementById('addBtn');
const sortearBtn = document.getElementById('sortearBtn');
const participantesList = document.getElementById('participantesList');
const resultadoSection = document.getElementById('resultadoSection');
const resultadoContainer = document.getElementById('resultadoContainer');
const novoSorteioBtn = document.getElementById('novoSorteioBtn');
const toggleDarkMode = document.getElementById('toggleDarkMode');

let participantes = [];

// Dark Mode
toggleDarkMode.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
});

if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
}

// Carregar participantes ao iniciar
async function carregarParticipantes() {
    try {
        const response = await fetch('/api/participantes');
        participantes = await response.json();
        renderizarParticipantes();
    } catch (error) {
        console.error('Erro ao carregar participantes:', error);
    }
}

// Adicionar participante
addBtn.addEventListener('click', async () => {
    const nome = nomeInput.value.trim();
    const desejos = desejosInput.value.trim();

    if (!nome) {
        alert('Por favor, insira um nome');
        return;
    }

    try {
        const response = await fetch('/api/participantes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ nome, desejos })
        });

        if (response.ok) {
            nomeInput.value = '';
            desejosInput.value = '';
            carregarParticipantes();
        }
    } catch (error) {
        console.error('Erro ao adicionar participante:', error);
    }
});

// Renderizar lista de participantes
function renderizarParticipantes() {
    if (participantes.length === 0) {
        participantesList.innerHTML = '<p class="empty-state">Nenhum participante adicionado ainda</p>';
        return;
    }

    participantesList.innerHTML = participantes.map(p => `
        <div class="participante-card">
            <div class="participante-nome">👤 ${p.nome}</div>
            <div class="participante-desejos">
                ${p.desejos ? `💝 ${p.desejos}` : 'Sem desejos informados'}
            </div>
            <button class="btn-remove" onclick="removerParticipante('${p.id}')">Remover</button>
        </div>
    `).join('');
}

// Remover participante
async function removerParticipante(id) {
    try {
        await fetch(`/api/participantes/${id}`, {
            method: 'DELETE'
        });
        carregarParticipantes();
    } catch (error) {
        console.error('Erro ao remover participante:', error);
    }
}

// Sortear amigos secretos
sortearBtn.addEventListener('click', async () => {
    if (participantes.length < 2) {
        alert('Mínimo 2 participantes necessários para sortear');
        return;
    }

    try {
        const response = await fetch('/api/sortear', {
            method: 'POST'
        });

        if (response.ok) {
            const resultado = await response.json();
            exibirResultado(resultado);
            dispararConfetes();
            iniciarNeve();
        }
    } catch (error) {
        console.error('Erro ao sortear:', error);
    }
});

// Exibir resultado do sorteio
function exibirResultado(resultado) {
    resultadoContainer.innerHTML = resultado.map(r => `
        <div class="flip-card" onclick="this.classList.toggle('flipped')">
            <div class="flip-card-inner">
                <div class="flip-card-front">
                    <h3>🎁</h3>
                    <p>Clique para revelar</p>
                    <p style="font-size: 1.2rem; margin-top: 10px;">${r.nome}</p>
                </div>
                <div class="flip-card-back">
                    <div class="flip-card-back-content">
                        <div class="amigo-secreto">🎉 ${r.amigo_secreto}</div>
                        <div class="desejos-label">Desejos:</div>
                        <div class="desejos-text">${r.desejos || 'Sem informação'}</div>
                    </div>
                </div>
            </div>
        </div>
    `).join('');

    resultadoSection.classList.remove('hidden');
    resultadoSection.scrollIntoView({ behavior: 'smooth' });
}

// Novo sorteio
novoSorteioBtn.addEventListener('click', () => {
    resultadoSection.classList.add('hidden');
    resultadoContainer.innerHTML = '';
});

// Efeito de Confetes
function dispararConfetes() {
    const colors = ['#f0a8d8', '#b19cd9', '#a8d8ea', '#ff69b4', '#87ceeb'];
    const confettiCount = 50;

    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';
        confetti.style.animationDelay = (Math.random() * 0.5) + 's';

        document.getElementById('confetti-container').appendChild(confetti);

        setTimeout(() => confetti.remove(), 4000);
    }
}

// Efeito de Neve
function iniciarNeve() {
    const snowfall = document.querySelector('.snowfall');
    const snowflakes = 30;

    for (let i = 0; i < snowflakes; i++) {
        const snow = document.createElement('div');
        snow.classList.add('snow');
        snow.textContent = '❄';
        snow.style.left = Math.random() * 100 + '%';
        snow.style.animationDuration = (Math.random() * 5 + 5) + 's';
        snow.style.animationDelay = (Math.random() * 2) + 's';

        snowfall.appendChild(snow);

        setTimeout(() => snow.remove(), 10000);
    }
}

// Inicializar
carregarParticipantes();
