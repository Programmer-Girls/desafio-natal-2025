# 🎄 Amigo Secreto - ProGirls 2025

Uma aplicação web interativa e aesthetic para organizar sorteios de Amigo Secreto com estilo! Desenvolvida como solução para o **Desafio de Natal ProGirls 2025**.

## ✨ Funcionalidades

- **Adicionar Participantes**: Insira nome e lista de desejos para cada participante
- **Sorteio Automático**: Algoritmo que garante que ninguém tire a si mesmo
- **Flip Cards 3D**: Cartões interativos que giram para revelar o amigo secreto
- **Dark Mode**: Tema escuro com paleta roxa profunda
- **Efeito de Neve**: Animação de neve caindo durante o sorteio
- **Confetes**: Celebração visual ao sortear os amigos
- **Design Responsive**: Funciona perfeitamente em desktop e mobile
- **Persistência de Dados**: Salva os participantes em JSON

## 🎨 Design

O projeto utiliza uma paleta de cores **Soft/Girly** com tons pastéis:

- **Rosa**: `#f0a8d8`
- **Lilás**: `#b19cd9`
- **Menta/Azul**: `#a8d8ea`
- **Dark Mode**: Roxo profundo `#1a1a2e`

## 🚀 Como Executar

### Pré-requisitos

- Python 3.7+
- pip (gerenciador de pacotes Python)

### Instalação

1. Clone ou acesse o repositório:

```bash
cd amigo-secreto-progirls
```

2. Instale as dependências:

```bash
pip install -r requirements.txt
```

3. Execute a aplicação:

```bash
python app.py
```

4. Abra seu navegador e acesse:

```
http://localhost:5000
```

## 📁 Estrutura do Projeto

```
amigo-secreto-progirls/
├── app.py                      # Backend Flask
├── requirements.txt            # Dependências Python
├── controllers/
│   └── secret_controller.py   # Lógica de sorteio
├── data/
│   └── participantes.json     # Dados dos participantes
├── static/
│   ├── style.css              # Estilos e animações
│   └── script.js              # Lógica frontend
├── templates/
│   └── index.html             # Página principal
├── etapas/                    # Documentação do desafio
├── CONTRIBUTING.md            # Guia de contribuição
└── LICENSE                    # Licença do projeto
```

## 🛠️ Tecnologias Utilizadas

- **Backend**: Python + Flask
- **Frontend**: HTML5 + CSS3 + JavaScript (Vanilla)
- **Armazenamento**: JSON
- **Animações**: CSS3 Keyframes + JavaScript

## 💡 Como Usar

1. **Adicione os participantes**: Preencha o nome e a lista de desejos
2. **Clique em "Adicionar Participante"**: O participante aparecerá na lista
3. **Repita para todos**: Adicione pelo menos 2 participantes
4. **Clique em "Sortear Amigos Secretos"**: O sorteio acontecerá com efeitos especiais
5. **Clique nos cartões**: Gire os cartões 3D para ver quem é o amigo secreto

## 🎯 Funcionalidades Extras

Além dos requisitos do desafio, este projeto inclui:

- ✅ Dark Mode com toggle
- ✅ Efeito de neve animado
- ✅ Chuva de confetes no sorteio
- ✅ Flip cards 3D interativos
- ✅ Design aesthetic e moderno
- ✅ Responsividade completa
- ✅ Persistência de dados

## 📝 API Endpoints

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| GET | `/` | Página principal |
| GET | `/api/participantes` | Lista todos os participantes |
| POST | `/api/participantes` | Adiciona novo participante |
| DELETE | `/api/participantes/<id>` | Remove um participante |
| POST | `/api/sortear` | Realiza o sorteio |

## 🤝 Contribuindo

Para contribuir com este projeto, siga as instruções em [`CONTRIBUTING.md`](./CONTRIBUTING.md).

## 📄 Licença

Este projeto está licenciado sob a licença especificada em [`LICENSE`](./LICENSE).

## 💜 Créditos

Desenvolvido para o **Desafio de Natal ProGirls 2025**.

---

**Divirta-se, aprenda e arrase!** 🚀✨
