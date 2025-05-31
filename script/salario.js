const formSalario = document.getElementById("form-salario");
formSalario.addEventListener("submit", function (event) {
  event.preventDefault(); 
  const nome = document.getElementById("nome").value.trim();
  const idade = parseInt(document.getElementById("idade").value, 10);
  const salarioBruto = parseFloat(document.getElementById("salario").value);
  const dependentes = parseInt(document.getElementById("dependentes").value, 10) || 0;
  let bonus = 0;
  if (idade > 50) {
    bonus = 300;
  } else {
    bonus = 200;
  }
  const inss = salarioBruto * 0.08;
  const valeTransporte = salarioBruto * 0.05;
  const valorDependentes = dependentes * 50;
  const salarioLiquido = salarioBruto - inss - valeTransporte + bonus + valorDependentes;
  const mensagem = 
    `Nome: ${nome}\n` +
    `Número de Dependentes: ${dependentes}\n` +
    `Salário Bruto: R$ ${salarioBruto.toFixed(2)}\n` +
    `INSS (8%): R$ ${inss.toFixed(2)}\n` +
    `Vale Transporte (5%): R$ ${valeTransporte.toFixed(2)}\n` +
    `Bônus por Idade: R$ ${bonus.toFixed(2)}\n` +
    `Valor Dependentes: R$ ${valorDependentes.toFixed(2)}\n` +
    `-----------------------------\n` +
    `Salário Líquido: R$ ${salarioLiquido.toFixed(2)}`;

  alert(mensagem);
  formSalario.reset();
});
