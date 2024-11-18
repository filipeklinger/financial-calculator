export function calcularFinanciamento(
  rendaMensal: number,
  taxaJurosAnual: number,
  prazoMeses: number,
  entradaPercentual: number,
) {
  // Etapa 1: Calcular a parcela máxima permitida (30% da renda)
  const parcelaMaxima = rendaMensal * 0.3;

  // Etapa 2: Converter a taxa de juros anual para mensal
  const taxaJurosMensal = taxaJurosAnual / 12 / 100;

  // Etapa 3: Calcular o valor financiado (FV) usando a fórmula do valor presente
  const fator = (1 + taxaJurosMensal) ** prazoMeses;
  const valorFinanciado =
    parcelaMaxima * ((fator - 1) / (taxaJurosMensal * fator));

  // Etapa 4: Calcular o valor total do imóvel (incluir entrada)
  const valorTotalImovel = valorFinanciado / (1 - entradaPercentual / 100);

  return {
    valorFinanciado: valorFinanciado.toFixed(2),
    valorTotalImovel: valorTotalImovel.toFixed(2),
  };
}
