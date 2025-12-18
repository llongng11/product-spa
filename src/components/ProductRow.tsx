import type { Product } from "../types";

interface Props {
  product: Product;
  quantity: number;
  onChange: (qty: number) => void;
}

export default function ProductRow({ product, quantity, onChange }: Props) {
  return (
    <div className="product-row">
      <div>
        <strong>{product.name}</strong>
        {product.isPrescription && <span className="rx">Rx</span>}
        <div className="meta">{product.category}</div>
      </div>

      <div className="right">
        <div>{product.price.toLocaleString()} ₫</div>
        <input
          type="number"
          min={0}
          max={99}
          value={quantity}
          onChange={(e) => onChange(Number(e.target.value))}
        />
      </div>
    </div>
  );
}
