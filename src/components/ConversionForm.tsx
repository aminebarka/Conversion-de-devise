import React, { useState } from 'react';

interface Props {
  onSubmit: (amount: number, fromCurrency: string, toCurrency: string) => void;
}

const ConversionForm: React.FC<Props> = ({ onSubmit }) => {
  const [amount, setAmount] = useState(0);
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(amount, fromCurrency, toCurrency);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="amount">Amount:</label>
        <input
          type="number"
          id="amount"
          value={amount}
          onChange={event => setAmount(Number(event.target.value))}
        />
      </div>
      <div>
        <label htmlFor="from-currency">From:</label>
        <select
          id="from-currency"
          value={fromCurrency}
          onChange={event => setFromCurrency(event.target.value)}
        >
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="GBP">GBP</option>
        </select>
      </div>
      <div>
        <label htmlFor="to-currency">To:</label>
        <select
          id="to-currency"
          value={toCurrency}
          onChange={event => setToCurrency(event.target.value)}
        >
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="GBP">GBP</option>
        </select>
      </div>
      <button type="submit">Convert</button>
    </form>
  );
};

export default ConversionForm;
