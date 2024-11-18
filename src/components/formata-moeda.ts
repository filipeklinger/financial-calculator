/**
 * Formata um número para o formato de moeda brasileira (BRL)
 * @param valor - O número a ser formatado
 * @returns Uma string com o número formatado em BRL
 */
export function formatarParaMoedaBR(valor: number | string): string {
  const vNumber = Number(valor);
  return vNumber.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
}
