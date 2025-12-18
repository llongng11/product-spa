import type { Product, CartState } from "../types";
import ProductRow from "./ProductRow";

interface Props {
  products: Product[];
  cart: CartState;
  onQtyChange: (productId: number, qty: number) => void;
}

export default function ProductList({ products, cart, onQtyChange }: Props) {
  if (products.length === 0) {
    return (
      <p style={{ textAlign: "center", fontStyle: "italic", color: "gray" }}>
        No products found
      </p>
    );
  }

  return (
    <div>
      {products.map((p) => (
        <ProductRow
          key={p.id}
          product={p}
          quantity={cart[p.id] ?? 0}
          onChange={(qty) => onQtyChange(p.id, qty)}
        />
      ))}
    </div>
  );
}
