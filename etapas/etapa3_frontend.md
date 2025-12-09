# Etapa 3 — Frontend (HTML, CSS e JS)

Agora você vai conectar o front ao backend, criando:

* o formulário
* botões
* lista de participantes
* remoção
* botão de sorteio

---

## 📄 1. index.html

Crie `templates/index.html`:

```html
<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <title>Desafio de Natal - Amigo Secreto</title>
    <link rel="stylesheet" href="{{ url_for('static', filename='style.css') }}">
    <script src="{{ url_for('static', filename='script.js') }}" defer></script>
</head>

<body>
    <header>
        <h1>🎄 Amigo Secreto ProGirls 🎁</h1>
        <p>Adicione participantes e faça o sorteio!</p>
    </header>

    <main>
        <section class="formulario">
            <h2>Adicionar participante</h2>
            <form id="form-add">
                <input type="text" id="nome" placeholder="Nome do participante" required>
                <button type="submit">Adicionar</button>
            </form>
            <p id="msg"></p>
        </section>

        <section class="lista">
            <h2>Participantes</h2>
            <ul id="participantes"></ul>
        </section>

        <section class="sortear">
            <button id="btn-sortear">Sortear Amigo Secreto 🎁</button>
        </section>

    </main>

    <footer>
        <p>🎅 Feliz Natal!</p>
    </footer>

</body>

</html>
```

---

## 📄 2. style.css

(Aqui mantemos o seu bloco que você já editou.)

---

## 📄 3. script.js

Coloque dentro de `static/script.js`:

```javascript
document.addEventListener("DOMContentLoaded", () => {
    const formAdd = document.getElementById("form-add");
    const nomeInput = document.getElementById("nome");
    const participantesList = document.getElementById("participantes");
    const msg = document.getElementById("msg");
    const btnSortear = document.getElementById("btn-sortear");

    function atualizarLista() {
        fetch("/api/participantes")
            .then(res => res.json())
            .then(data => {
                participantesList.innerHTML = "";
                data.forEach(nome => {
                    const li = document.createElement("li");
                    li.textContent = nome;

                    // Botão de remover
                    const btnRemove = document.createElement("button");
                    btnRemove.textContent = "❌";
                    btnRemove.classList.add("remove-btn");
                    btnRemove.addEventListener("click", () => {
                        fetch(`/api/participantes/${nome}`, { method: "DELETE" })
                            .then(res => res.json())
                            .then(() => atualizarLista());
                    });

                    li.appendChild(btnRemove);
                    participantesList.appendChild(li);
                });
            });
    }

    formAdd.addEventListener("submit", e => {
        e.preventDefault();
        const nome = nomeInput.value.trim();
        if (!nome) return;

        fetch("/api/participantes", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ nome })
        })
        .then(res => res.json())
        .then(data => {
            msg.textContent = data.mensagem || data.erro;
            msg.style.color = data.mensagem ? "green" : "red";
            nomeInput.value = "";
            atualizarLista();
        });
    });

    atualizarLista();
});

```

Etapa concluída!
O front já conversa com a API. 💜✨

---
