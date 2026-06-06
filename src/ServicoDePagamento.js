// Exporta a classe
export default class ServicoDePagamento {
  #pagamentos // Propriedade Privada
  
  constructor() { // Primeiro método a ser executado quando usar a Classe
    this.#pagamentos = [];
  }
  
  pagar(codigoBarras, empresa, valor) { // Método
    this.#pagamentos.push({
      codigoBarras,
      empresa,
      valor,
      categoria: valor > 100.00 ? 'cara' : 'padrão'
    });
  }
  
  consultarUltimoPagamento() {
  return this.#pagamentos.at(-1);
  }
}