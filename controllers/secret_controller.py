import json
import random
import uuid
from pathlib import Path

DATA_FILE = Path(__file__).parent.parent / 'data' / 'participantes.json'

def load_participantes():
    if DATA_FILE.exists():
        with open(DATA_FILE, 'r', encoding='utf-8') as f:
            return json.load(f)
    return []

def save_participantes(participantes):
    DATA_FILE.parent.mkdir(parents=True, exist_ok=True)
    with open(DATA_FILE, 'w', encoding='utf-8') as f:
        json.dump(participantes, f, ensure_ascii=False, indent=2)

def add_participante(nome, desejos):
    participantes = load_participantes()
    novo = {
        'id': str(uuid.uuid4()),
        'nome': nome.strip(),
        'desejos': desejos.strip()
    }
    participantes.append(novo)
    save_participantes(participantes)
    return novo

def remove_participante(participante_id):
    participantes = load_participantes()
    participantes = [p for p in participantes if p['id'] != participante_id]
    save_participantes(participantes)

def sortear_amigos():
    participantes = load_participantes()
    
    if len(participantes) < 2:
        return None
    
    nomes = [p['nome'] for p in participantes]
    sorteados = nomes.copy()
    random.shuffle(sorteados)
    
    while any(sorteados[i] == nomes[i] for i in range(len(nomes))):
        random.shuffle(sorteados)
    
    resultado = []
    for i, participante in enumerate(participantes):
        resultado.append({
            'id': participante['id'],
            'nome': participante['nome'],
            'desejos': participante['desejos'],
            'amigo_secreto': sorteados[i]
        })
    
    return resultado

def get_all_participantes():
    return load_participantes()
