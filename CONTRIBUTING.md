# 🎄 Desafio de Natal ProGirls – Sistema de Amigo Secreto (Python + Flask)

Bem-vinda ao Desafio de Natal da ProGirls!  
Aqui você vai desenvolver um mini sistema **FullStack em Python**, usando **Flask** no back-end e HTML/CSS/JS no front.

É um projeto simples, divertido e perfeito para quem está começando — e totalmente personalizável! 💜✨

![Preview do site do Desafio de Natal](/etapas/imagem/Desafio-de-Natal-Amigo-Secreto.png)


---

## 🎯 Objetivo do Projeto

Criar um sistema web onde seja possível:

* ➕ Adicionar participantes
* 📋 Listar participantes
* 🎁 Sortear garantindo que ninguém tire a si mesma
* 👀 Visualizar o resultado
* 🎄 (Opcional) Personalizar com tema natalino, banco de dados, animações e muito mais

---

## 🗂️ Estrutura Sugerida do Repositório

```
/progirls-desafio-natal
 ├── README.md
 ├── etapas/
 │    ├── etapa1_setup.md
 │    ├── etapa2_backend.md
 │    ├── etapa3_frontend.md
 │    └── etapa4_entrega.md
 ├── modelo-projeto/
 │    ├── app.py
 │    ├── controllers/
 │    │     └── secret_controller.py
 │    ├── data/
 │    │     └── participantes.json
 │    ├── templates/
 │    │     └── index.html
 │    ├── static/
 │    │     ├── style.css
 │    │     └── script.js
 │    └── requirements.txt
 └── LICENSE

```

Essa estrutura é amigável para iniciantes, mas já introduz boas práticas do mundo real.

---

## 📦 Tecnologias Utilizadas

### 🔧 Back-end (oficial do desafio)

* **Python 3**
* **Flask**
* **Jinja 2**
* (Opcional) SQLite com SQLAlchemy

### 🎨 Front-end

* **HTML**
* **CSS**
* **JavaScript Vanilla**

Tudo simples e direto — sem frameworks obrigatórios.

---

## ▶️ Como Rodar o Back-end (Flask)

Entre na pasta do backend:

```bash
cd backend
```

Crie o ambiente virtual:

```bash
python -m venv venv
```

Ative o ambiente:

* Windows

  ```bash
  venv\Scripts\activate
  ```
* Mac/Linux

  ```bash
  source venv/bin/activate
  ```

Instale as dependências:

```bash
pip install -r requirements.txt
```

Se você não tiver um requirements.txt, instale o Flask diretamente:

```bash
pip install flask
```

Inicie o servidor Flask:

```bash
python app.py
```

O sistema estará disponível em:

```
http://localhost:5000
```

---

## 🚀 Rotas Disponíveis (Flask)

### **POST /api/participantes**

Adicionar participante  
Body JSON:

```json
{ "nome": "Julia" }
```

---

### **GET api/participantes**

Retorna todos os participantes cadastrados.

---

### **DELETE /api/participantes/<nome>**

Remove um participante pelo nome.

Exemplo:

```
DELETE /api/remover/Julia
```

---

### **GET /api/sortear**

Realiza o sorteio garantindo que ninguém tire a si mesma.

Retorna um JSON com pares `(participante → amigo secreto)`.

---

## 🎨 Front-end

O front está preparado para consumir as rotas e funciona abrindo:

```
frontend/index.html
```

Se quiser, use Live Server no VSCode.

---

## 🔀 Como Participar — Fork e Pull Request

1. Faça um **fork** do repositório.
2. Crie uma branch:

```bash
git checkout -b meu-nome
```

3. Faça seu projeto.
4. Envie as alterações:

```bash
git add .
git commit -m "Minha solução para o Desafio de Natal"
git push origin meu-nome
```

5. Abra um **Pull Request** para o repositório oficial.

---

🎁 Ideias de Melhorias (Opcional — bem simples)

- Tema natalino no front
- Layout mais bonito
- Salvamento em arquivo JSON
- Animação no momento do sorteio
- Tela separada para mostrar os resultados

Quanto mais você personalizar, mais você aprende!

---

## 💜 Sobre o Desafio

O Desafio de Natal da ProGirls existe para incentivar prática, evolução e colaboração.  
Não existe certo ou errado — existe aprendizado.

Aproveite, personalize, brinque com o código e divirta-se criando o seu projeto.  
**Feliz Natal e ótimo código, mana! 🎅🏼💻✨**