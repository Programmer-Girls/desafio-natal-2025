from flask import Flask, render_template, request, jsonify
from controllers.secret_controller import (
    add_participante, remove_participante, sortear_amigos, get_all_participantes
)

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/api/participantes', methods=['GET'])
def get_participantes():
    return jsonify(get_all_participantes())

@app.route('/api/participantes', methods=['POST'])
def criar_participante():
    data = request.get_json()
    nome = data.get('nome', '').strip()
    desejos = data.get('desejos', '').strip()
    
    if not nome:
        return jsonify({'erro': 'Nome é obrigatório'}), 400
    
    participante = add_participante(nome, desejos)
    return jsonify(participante), 201

@app.route('/api/participantes/<participante_id>', methods=['DELETE'])
def deletar_participante(participante_id):
    remove_participante(participante_id)
    return jsonify({'sucesso': True}), 200

@app.route('/api/sortear', methods=['POST'])
def sortear():
    resultado = sortear_amigos()
    
    if resultado is None:
        return jsonify({'erro': 'Mínimo 2 participantes necessários'}), 400
    
    return jsonify(resultado), 200

if __name__ == '__main__':
    app.run(debug=True, port=5000)
