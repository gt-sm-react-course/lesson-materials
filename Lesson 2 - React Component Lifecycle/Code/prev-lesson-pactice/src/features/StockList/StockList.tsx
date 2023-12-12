import { Stock } from "../../shared/types/Stock";
import { StockItem } from "./components/StockItem";

export interface StockListProps {
  stocks: Stock[];
}

export const StockList: React.FC<StockListProps> = ({ stocks }) => {
  return (
    <div>
      {stocks.map((stock) => (
        <StockItem key={stock.id} stock={stock} />
      ))}
    </div>
  );
};
