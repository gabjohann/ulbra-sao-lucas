document.addEventListener("DOMContentLoaded", carregarContatos);

const formulario = document.getElementById("formContato");
const botaoAdicionar = document.getElementById("addContato");
const botaoCancelar = document.getElementById("cancelarEdicao");

let indexEdicao = null; // Guarda o índice do contato que está sendo editado

formulario.addEventListener("submit", function (event) {
  event.preventDefault();

  if (indexEdicao !== null) {
    atualizarContato();
  } else {
    adicionarContato();
  }
});

botaoCancelar.addEventListener("click", cancelarEdicao);

function adicionarContato() {
  const nome = document.getElementById("nome").value.trim();
  const telefone = document.getElementById("telefone").value.trim();
  const email = document.getElementById("email").value.trim();

  if (nome === "" || telefone === "" || email === "") {
    alert("Por favor, preencha todos os campos!");
    return;
  }

  const contato = { nome, telefone, email };
  salvarContato(contato);
  limparCampos();
  carregarContatos();
}

function salvarContato(contato) {
  let contatos = JSON.parse(localStorage.getItem("contatos")) || [];
  contatos.push(contato);
  localStorage.setItem("contatos", JSON.stringify(contatos));
}

function carregarContatos() {
  const lista = document.getElementById("listaContatos");
  lista.innerHTML = "";

  let contatos = JSON.parse(localStorage.getItem("contatos")) || [];

  contatos.forEach((contato, index) => {
    const li = document.createElement("li");

    li.innerHTML = `
            <p><strong>Nome:</strong> ${contato.nome}</p>
            <p><strong>Telefone:</strong> ${contato.telefone}</p>
            <p><strong>Email:</strong> ${contato.email}</p>
            <button class="edit" onclick="editarContato(${index})">Editar</button>
            <button class="delete" onclick="removerContato(${index})">X</button>
        `;

    lista.appendChild(li);
  });
}

function editarContato(index) {
  let contatos = JSON.parse(localStorage.getItem("contatos")) || [];
  const contato = contatos[index];

  document.getElementById("nome").value = contato.nome;
  document.getElementById("telefone").value = contato.telefone;
  document.getElementById("email").value = contato.email;

  botaoAdicionar.textContent = "Atualizar";
  botaoCancelar.classList.remove("hidden");

  indexEdicao = index;
}

function atualizarContato() {
  let contatos = JSON.parse(localStorage.getItem("contatos")) || [];

  contatos[indexEdicao] = {
    nome: document.getElementById("nome").value.trim(),
    telefone: document.getElementById("telefone").value.trim(),
    email: document.getElementById("email").value.trim(),
  };

  localStorage.setItem("contatos", JSON.stringify(contatos));

  cancelarEdicao();
  carregarContatos();
}

function cancelarEdicao() {
  limparCampos();
  botaoAdicionar.textContent = "Adicionar";
  botaoCancelar.classList.add("hidden");
  indexEdicao = null;
}

function removerContato(index) {
  let contatos = JSON.parse(localStorage.getItem("contatos")) || [];
  contatos.splice(index, 1);
  localStorage.setItem("contatos", JSON.stringify(contatos));
  carregarContatos();
}

function limparCampos() {
  document.getElementById("nome").value = "";
  document.getElementById("telefone").value = "";
  document.getElementById("email").value = "";
}
