# Etapa 1 — Setup do Projeto

Nesta primeira etapa, você vai preparar o ambiente necessário para rodar o sistema de Amigo Secreto usando **Python + Flask**.

---

## 🎄 1. Instalar o Python

Certifique-se de ter o **Python 3.10 ou superior** instalado.  
Você pode verificar com:

```
python --version
```

Se não tiver instalado, baixe em:  
[https://www.python.org/downloads/](https://www.python.org/downloads/)

---

## 🎄 2. Criar o diretório do projeto

Crie uma pasta para o desafio:

```
mkdir progirls-desafio-natal
cd progirls-desafio-natal
```

---

## 🎄 3. Criar o ambiente virtual

```
python -m venv venv
```

Ativar o ambiente:

### Windows

```
venv\Scripts\activate
```

### Linux/macOS

```
source venv/bin/activate
```

Você deve ver `(venv)` no terminal.

---

## 🎄 4. Instalar o Flask

Crie o arquivo:

```
touch requirements.txt
```

Adicione:

```
flask
```

Instale:

```
pip install -r requirements.txt
```

---

## 🎄 5. Criar a estrutura inicial

```
modelo-projeto/
 ├── app.py
 ├── templates/
 │     └── index.html
 ├── static/
 │     └── style.css
 └── requirements.txt
```

---

## 🎄 6. Criar o primeiro servidor Flask

Crie o `app.py` com o conteúdo mínimo:

```python
from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")

if __name__ == "__main__":
    app.run(debug=True)
```

---

## 🎄 7. Criar o primeiro template

`templates/index.html`:

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Amigo Secreto ProGirls</title>
</head>
<body>
    <h1>Amigo Secreto ProGirls</h1>
    <p>Projeto iniciado com sucesso!</p>
</body>
</html>
```

---

## 🎄 8. Rodar o servidor

```
python app.py
```

Acesse:

```
http://localhost:5000
```

Se aparecer a mensagem “Projeto iniciado com sucesso!”, a etapa 1 está concluída! 💜✨

---