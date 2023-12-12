import { Stock } from '../../../shared/types/Stock';

interface StockItemProps {
  stock: Stock;
}

export const StockItem: React.FC<StockItemProps> = ({ stock }) => {
  return (
    <div>
      {stock.name} ({stock.ticker}): ${stock.price.toFixed(2)}
    </div>
  );
};
