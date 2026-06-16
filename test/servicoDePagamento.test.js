// Importa a classe ServicoDePagamento
import ServicoDePagamento from '../src/servicoDePagamento.js';
import assert from 'node:assert';

// Grupo de testes relacionados ao método pagar()
describe('Metódo Serviço de Pagamento:', () => {
    it('Realizar pagamento com Código de Barras, Empresa e Valor', function() {
    // Arrange
    const servico = new ServicoDePagamento();

    // Act
    servico.pagar('0987-7656-3475', 'Samar', 156.87);
    const ultimo = servico.consultarUltimoPagamento();

    // Assert
    assert.equal(ultimo.codigoBarras, '0987-7656-3475');
    assert.equal(ultimo.empresa, 'Samar');
    assert.equal(ultimo.valor, 156.87);
});

    it('Retornar categoria como "cara" quando valor for maior que 100', () => {

      const servico = new ServicoDePagamento();
      servico.pagar('1111-2222-3333', 'Empresa X', 150.00);
      const ultimo = servico.consultarUltimoPagamento();

      assert.equal(ultimo.categoria, 'cara');
    });

     it('Retornar categoria como "padrão" quando valor for igual a 100', () => {

      const servico = new ServicoDePagamento();

      servico.pagar('1111-2222-3333', 'Empresa Y', 100.00);
      const ultimo = servico.consultarUltimoPagamento();

      assert.equal(ultimo.categoria, 'padrão');
    });

    it('Retornar categoria como "padrão" quando valor for menor que 100', () => {

      const servico = new ServicoDePagamento();

   
      servico.pagar('4444-5555-6666', 'Empresa Z', 49.90);
      const ultimo = servico.consultarUltimoPagamento();
      assert.equal(ultimo.categoria, 'padrão');
 });

describe('Método Consulta do Ùltimo Pagamento:', () => {
  it('Consultar o último pagamento realizado', () => {

      const servico = new ServicoDePagamento();

      servico.pagar('0001-0001-0001', 'Primeira Empresa', 50.00);
      servico.pagar('0002-0002-0002', 'Última Empresa', 250.00);

      const ultimo = servico.consultarUltimoPagamento();

      assert.equal(ultimo.empresa, 'Última Empresa');
      assert.equal(ultimo.valor, 250.00);
      assert.equal(ultimo.categoria, 'cara');
      });

    });

});