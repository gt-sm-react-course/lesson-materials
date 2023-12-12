import { useEffect, useState } from 'react';
import './App.css'
import data from './data/stocks.json'
import { Stock } from './shared/types/Stock';
import { StockList } from './features/StockList/StockList';

function App() {
  const [stocks, setStocks] = useState<Stock[]>(data);

  useEffect(() => {
    const interval = setInterval(() => {
      const updatedStocks = stocks.map((stock) => {
        const changePercent = Math.random() * 0.08 - 0.04;
        const updatedPrice = stock.price * (1 + changePercent);
        return { ...stock, price: updatedPrice };
      });
      setStocks(updatedStocks);
    }, 1000);

    return () => clearInterval(interval);
  }, [stocks]);

  return <StockList stocks={stocks} />;
}

export default App
