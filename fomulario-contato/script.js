const form = document.getElementById("form-contato");

form.addEventListener("submit", function(event) {
	event.preventDefault();

	const nome = document.getElementById("nome").value;
	const email = document.getElementById("email").value;
	const mensagem = document.getElementById("mensagem").value;

	alert("Nome: " + nome + "\nEmail: " + email + "\nMensagem: " + mensagem);
});
