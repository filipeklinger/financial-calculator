import { useState } from 'react';

export function UserInputs(props: { setSalary: (salary: number) => void }) {
  const [profissao, setProfissao] = useState('');
  const [renda, setRenda] = useState<number>();

  function calculate() {
    if (renda) {
      props.setSalary(renda);
    }
  }
  return (
    <>
      <form className="flex flex-col gap-2">
        <label>
          Qual Sua Profissão ?:
          <input
            className="ml-1 "
            value={profissao}
            onChange={(e) => setProfissao(e.target.value)}
          />
        </label>
        <br />
        <label>
          Qual Sua Renda ?:
          <input
            className="ml-1"
            value={renda}
            onChange={(e) => setRenda(Number(e.target.value))}
          />
        </label>
      </form>
      <button type="button" onClick={calculate} value={'Calcular'}>
        Calcular
      </button>
    </>
  );
}
