# Etapa 2 — Backend (API + Participantes)

Nesta etapa, você vai criar as rotas da API para:

* adicionar participantes
* listar participantes
* remover participantes
* sortear o amigo secreto

O backend usará Flask e salvará tudo em um arquivo JSON simples.

---

## 📁 1. Criar a pasta de dados

Dentro de `modelo-projeto/`, crie:

```
mkdir data
touch data/participantes.json
```

E coloque:

```json
[]
```

---

## 📁 2. Criar o controller

Crie `controllers/secret_controller.py`:

```python
import json
import random
from pathlib import Path

# caminho absoluto relativo à raiz do projeto
BASE_DIR = Path(__file__).resolve().parent.parent  # sobe da pasta controllers/ para a raiz
DATA_FILE = BASE_DIR / "data" / "participantes.json"

# garante que a pasta data exista
DATA_FILE.parent.mkdir(exist_ok=True)


def carregar():
    if not DATA_FILE.exists():
        return []
    return json.loads(DATA_FILE.read_text(encoding="utf-8"))

def salvar(lista):
    DATA_FILE.write_text(json.dumps(lista, indent=2, ensure_ascii=False), encoding="utf-8")

def adicionar(nome):
    participantes = carregar()
    if nome not in participantes:
        participantes.append(nome)
        salvar(participantes)
    return participantes

def remover(nome):
    participantes = carregar()
    if nome in participantes:
        participantes.remove(nome)
        salvar(participantes)
    return participantes

def sortear():
    participantes = carregar()
    amigos = participantes.copy()
    random.shuffle(amigos)

    # garantir que ninguém tire a si mesma
    for i in range(len(participantes)):
        if participantes[i] == amigos[i]:  # se alguém caiu nela mesma
            random.shuffle(amigos)          # embaralha tudo
            return sortear()               # sorteia de novo

    return dict(zip(participantes, amigos))
```

---

## 📁 3. Conectar as rotas no app.py

Edite o `app.py`:

```python
import json
import random
import os
from flask import Flask, render_template, request, jsonify
from pathlib import Path

app = Flask(__name__)

BASE_DIR = Path(__file__).resolve().parent  # pasta onde está o app.py
ARQUIVO = BASE_DIR / "data" / "participantes.json"

# garante que a pasta data exista
ARQUIVO.parent.mkdir(exist_ok=True)


# --------------------------
# Funções utilitárias
# --------------------------

def carregar():
    if not os.path.exists(ARQUIVO):
        return []
    with open(ARQUIVO, "r", encoding="utf-8") as f:
        return json.load(f)

def salvar(lista):
    with open(ARQUIVO, "w", encoding="utf-8") as f:
        json.dump(lista, f, indent=4, ensure_ascii=False)

# --------------------------
# Rotas da API
# --------------------------

@app.route("/api/participantes", methods=["GET"])
def listar_participantes():
    return jsonify(carregar())

@app.route("/api/participantes", methods=["POST"])
def adicionar_participante():
    dados = request.get_json()
    nome = dados.get("nome")

    if not nome:
        return {"erro": "Nome é obrigatório"}, 400

    participantes = carregar()

    if nome in participantes:
        return {"erro": "Participante já existe"}, 400

    participantes.append(nome)
    salvar(participantes)

    return {"mensagem": "Adicionado com sucesso"}

@app.route("/api/participantes/<nome>", methods=["DELETE"])
def remover_participante(nome):
    participantes = carregar()

    if nome not in participantes:
        return {"erro": "Participante não encontrado"}, 404

    participantes.remove(nome)
    salvar(participantes)

    return {"mensagem": "Removido com sucesso"}

@app.route("/api/sortear", methods=["POST"])
def sortear():
    participantes = carregar()
    if len(participantes) < 2:
        return {}

    amigos = participantes[:]
    while True:
        random.shuffle(amigos)
        # verifica se algum participante caiu nele mesmo
        for i in range(len(participantes)):
            if participantes[i] == amigos[i]:
                break
        else:
            # nenhum participante caiu nele mesmo, sai do loop
            break

    return dict(zip(participantes, amigos))


# --------------------------
# Páginas
# --------------------------

@app.route("/")
def index():
    return render_template("index.html")

# --------------------------

if __name__ == "__main__":
    app.run(debug=True)

```

Etapa concluída!  
A API já responde tudo o que o front precisa. 💜

---