import { FinancialResults } from '@/components/financial-results';
import { UserInputs } from '@/components/user-inputs';
import React from 'react';
import { SomeText } from './components/some-text';

const Home = () => {
  const [salary, setSalary] = React.useState(0);
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-8 text-center">
      <SomeText />
      <UserInputs setSalary={(s) => setSalary(s)} />
      <FinancialResults salary={salary} />
    </div>
  );
};

export default Home;
