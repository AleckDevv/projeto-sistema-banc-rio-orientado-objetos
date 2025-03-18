class Contabancaria {
  constructor() {
    // captura dos elementos execenciais para a criação da conta
    this.nomeCliente = document.querySelector("#nome");
    this.saldoInicial = document.querySelector("#saldoInicial");
    this.criarConta = document.querySelector("#criarConta");

    // Elementos das operações de deposito e saque
    this.valor = document.querySelector("#valor");
    this.depositar = document.querySelector("#depositar");
    this.sacar = document.querySelector("#sacar");
    this.valorOperacao = document.querySelector("#valor");

    // Exibir o histórico
    this.historico = document.querySelector("#historico");

    this.eventoCriarConta();
    this.depositarConta();
    this.sacarConta();
    // this.extrato();
  }

  eventoCriarConta() {
    this.criarConta.addEventListener("click", () => {
      this.nomeC = document.querySelector("#nomeConta");
      this.nomeC.innerHTML = this.nomeCliente.value;

      this.saldoC = document.querySelector("#saldoConta");
      this.saldoC.innerHTML = this.saldoInicial.value;
    });
  }

  depositarConta() {
    this.depositar.addEventListener("click", () => {
      let saldoAtual = parseFloat(this.saldoC.innerHTML);
      let valorDeposito = parseFloat(this.valorOperacao.value);

      if (!isNaN(valorDeposito) && valorDeposito > 0) {
        saldoAtual += valorDeposito;
        this.saldoC.innerHTML = saldoAtual.toFixed(2);

        // adicionar o extrato
        let li = document.createElement("li");
        li.textContent = `Deposito: R$ ${valorDeposito.toFixed(2)}`;
        li.style.listStyle = "none";
        this.historico.appendChild(li);
      } else {
        alert("Valor de Depósito inválido");
      }
    });
  }

  sacarConta() {
    this.sacar.addEventListener("click", () => {
      let saldoAtual = parseFloat(this.saldoC.innerHTML);
      let valorSaque = parseFloat(this.valorOperacao.value);
      this.saldoC.innerHTML = saldoAtual.toFixed(2);

      if (!isNaN(valorSaque) && valorSaque > 0) {
        if (valorSaque <= saldoAtual) {
          saldoAtual -= valorSaque;

          this.saldoC.innerHTML = saldoAtual.toFixed(2);

          let li = document.createElement("li");
          li.textContent = `Saque: R$: ${valorSaque.toFixed(2)}`;
          li.style.listStyle = "none";
          this.historico.appendChild(li);
        } else {
          alert("Saldo insuficiente!");
        }
      } else {
        alert("Valor de saque inválido!");
      }
    });
  }
}

let conta = new Contabancaria();
