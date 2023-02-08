import React from 'react';

interface Props {
  amount: number;
  fromCurrency: string;
  toCurrency: string;
  conversionRate: number;
}

const ConversionResult: React.FC<Props> = ({
  amount,
  fromCurrency,
  toCurrency,
  conversionRate,
}) => {
  return (
    <div>
      {amount} {fromCurrency} is equivalent to{' '}
      {(amount * conversionRate).toFixed(2)} {toCurrency}
    </div>
  );
};

export default ConversionResult;
