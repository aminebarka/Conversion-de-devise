import React from 'react';
import AmountInput from './AmountInput';
import CurrencySelect from './CurrencySelect';
import ConversionResult from './ConversionResult';
import './Layout.css';


interface State {
amount: number;
fromCurrency: string;
toCurrency: string;
conversionRate: number;
}

class Layout extends React.Component<{}, State> {
state = {
amount: 0,
fromCurrency: 'USD',
toCurrency: 'EUR',
conversionRate: 0.86,
};

handleAmountChange = (amount: number) => {
this.setState({ amount });
};

handleFromCurrencyChange = (fromCurrency: string) => {
this.setState({ fromCurrency });
};

handleToCurrencyChange = (toCurrency: string) => {
this.setState({ toCurrency });
};

render() {
const { amount, fromCurrency, toCurrency, conversionRate } = this.state;


return (

    <div className="Layout">
    <AmountInput
      amount={amount}
      onChange={this.handleAmountChange}
    />
    <CurrencySelect
      value={fromCurrency}
      onChange={this.handleFromCurrencyChange}
      options={[
        { value: 'USD', label: 'US Dollar' },
        { value: 'EUR', label: 'Euro' },
        { value: 'GBP', label: 'British Pound' },
        { value: 'JPY', label: 'Japanese Yen' },
      ]}
    />
    <CurrencySelect
      value={toCurrency}
      onChange={this.handleToCurrencyChange}
      options={[
        { value: 'USD', label: 'US Dollar' },
        { value: 'EUR', label: 'Euro' },
        { value: 'GBP', label: 'British Pound' },
        { value: 'JPY', label: 'Japanese Yen' },
      ]}
    />
    <ConversionResult
      amount={amount}
      fromCurrency={fromCurrency}
      toCurrency={toCurrency}
      conversionRate={conversionRate}
    />
  </div>
);
}
}

export default Layout;