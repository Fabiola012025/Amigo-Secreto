/*O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação.
Aqui você deverá desenvolver a lógica para resolver o problema. */
const listaAmigos = [];

function adicionarAmigo() {
    const input = document.getElementById('amigo');
    const nome = input.value.trim();

    if (nome && !listaAmigos.includes(nome)) {
        listaAmigos.push(nome);
        atualizarLista();
        input.value = '';
        input.focus();
        }
}

function atualizarLista() {
    const ul = document.getElementById('listaAmigos');
    ul.innerHTML = '';
    listaAmigos.forEach(nome => {
    const li = document.createElement('li');
    li.textContent = nome;
    li.className = 'name-item';
    ul.appendChild(li);
    });
}

function sortearAmigo() {
    const ulResultado=document.getElementById('resultado');
    ulResultado.innerHTML='';

    if (listaAmigos.length === 0) {
        alert('A lista está vazia. Adicione amigos antes de sortear.');
        return;
    }

            const sorteado = listaAmigos[Math.floor(Math.random() * listaAmigos.length)];
            const li=document.createElement('li');
            li.textContent=`Amigo sorteado: ${sorteado}`;
            li.className = 'result-item';
            ulResultado.appendChild(li);
            
            
}