import React from 'react';
import { Link } from 'react-router-dom';

export default function Listitem({ coin }) {
  return (
    <div className='home-crypto'>
      <Link to={`/${coin.id}`}>
        <span className='home-crypto-image'>
          <img src={coin.image} alt="&#x20BF;"/>
           </span>
        <span className='home-crypto-name'>{coin.name}</span>
       {coin.priceBtc && 
       ( <span className='home-crypto-prices'>
          <span className='home-crypto-btc'>
            <img src="/bitcoin.webp" alt="&#x20BF;"/>
            {coin.priceBtc} BTC</span>
          <span className='home-crypto-inr'>({coin.priceInr} INR)</span>
        </span>
        )}
      </Link>
    </div>
  );
}
