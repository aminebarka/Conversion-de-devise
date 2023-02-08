import React from 'react';

interface Props {
  value: number;
  onChange: (value: number) => void;
}

const AmountInput: React.FC<Props> = ({ value, onChange }) => {
  return (
    <div className="flex flex-col items-center py-10">
      <label htmlFor="amount" className="text-lg font-medium">Amount:</label>
      <input
        type="number"
        id="amount"
        value={value}
        onChange={event => onChange(Number(event.target.value))}
        className="bg-gray-200 px-5 py-2 rounded-lg text-xl font-medium"
      />
    </div>
  );
};

export default AmountInput;
