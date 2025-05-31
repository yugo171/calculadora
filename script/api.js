const botaoCarregar = document.getElementById("btnCarregar");
const textoFato = document.getElementById("textoFato");

botaoCarregar.addEventListener("click", async () => {
  textoFato.textContent = "Carregando curiosidade sobre gatos...";
  try {
    const resposta = await fetch("https://catfact.ninja/fact");
    if (!resposta.ok) throw new Error("Erro ao buscar a API: " + resposta.status);
    const dados = await resposta.json();

    textoFato.textContent = `Curiosidade: ${dados.fact}`;

  } catch (erro) {
    textoFato.textContent = "Não foi possível carregar a curiosidade. Tente novamente.";
    console.error(erro);
  }
});
