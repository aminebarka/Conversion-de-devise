import React from 'react';

interface Option {
value: string;
label: string;
}

interface Props {
value: string;
onChange: (value: string) => void;
options: Option[];
}

const CurrencySelect: React.FC<Props> = ({ value, onChange, options }) => {
return (
<div>
<label htmlFor="currency">Currency:</label>
<select
id="currency"
value={value}
onChange={event => onChange(event.target.value)}
>
{options.map(option => (
<option key={option.value} value={option.value}>
{option.label}
</option>
))}
</select>
</div>
);
};

export default CurrencySelect;