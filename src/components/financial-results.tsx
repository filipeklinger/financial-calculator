import React from 'react';
import { calcularFinanciamento } from './calculo-financiamento';
import { formatarParaMoedaBR } from './formata-moeda';

export function FinancialResults(props: { salary: number }) {
  let valorImovel = '0';
  let vFinanciado = '';
  let entrada = 0;
  let prestacaoMaxima = 0;
  let taxaJurosAnual = 0;
  let taxaJurosMensal = 0;
  const [prazoEmMeses, setPrazoEmMeses] = React.useState(360);
  const [entradaPercentual, setEntradaPercentual] = React.useState(20);

  function calculate() {
    prestacaoMaxima = (30 / 100) * props.salary;
    taxaJurosAnual = 10;
    taxaJurosMensal = taxaJurosAnual / 12;

    const { valorFinanciado, valorTotalImovel } = calcularFinanciamento(
      props.salary,
      taxaJurosAnual,
      prazoEmMeses,
      entradaPercentual,
    );
    valorImovel = valorTotalImovel;
    entrada = (entradaPercentual / 100) * Number(valorTotalImovel);
    vFinanciado = valorFinanciado;
  }
  if (!props.salary) {
    return (
      <>
        <p>Entre com dados para calculo</p>
      </>
    );
  }

  calculate();
  return (
    <>
      <h2>Imovel</h2>
      <p>Valor total do Imovel: {formatarParaMoedaBR(valorImovel)}</p>

      <h2>Pagamento</h2>
      <label>
        Percentual Entrada:
        <input
          className="ml-1"
          type="number"
          value={entradaPercentual}
          onChange={(e) => setEntradaPercentual(Number(e.target.value))}
        />
      </label>
      <p>Entrada: {formatarParaMoedaBR(entrada)}</p>
      <p>Prestacao maxima: {formatarParaMoedaBR(prestacaoMaxima)}</p>

      <h2>Banco</h2>
      <div className="flex gap-2 align-center">
        Prazo:
        <label>
          <input
            type="radio"
            name="react-tips"
            value="360"
            checked={prazoEmMeses === 360}
            onChange={(e) => setPrazoEmMeses(Number(e.target.value))}
            className="form-check-input"
          />
          360 meses
        </label>
        {}
        <label>
          <input
            type="radio"
            name="react-tips"
            value="420"
            checked={prazoEmMeses === 420}
            onChange={(e) => setPrazoEmMeses(Number(e.target.value))}
            className="form-check-input"
          />
          420 meses
        </label>
      </div>
      <p>Taxa de Juros anual: {taxaJurosAnual.toFixed(2)}%</p>
      <p>Taxa de Juros mensal: {taxaJurosMensal.toFixed(2)}%</p>
      <p>
        Prazo: {prazoEmMeses / 12} anos ({prazoEmMeses} meses)
      </p>
      <p>Valor Financiado: {formatarParaMoedaBR(vFinanciado)}</p>
    </>
  );
}
