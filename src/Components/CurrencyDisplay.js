import React from 'react';


export default function CurrencyDisplay(props) {
  return (
      <p>
          US Dollar ${props.amount.toFixed(2)} - {props.currency.name }
          {props.currency.symbol}
          {(props.amount * props.currency.rate).toFixed(2)}
      </p>
  )
}
