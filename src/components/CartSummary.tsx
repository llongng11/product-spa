import type { CartState, Product } from "../types";

interface Props {
  cart: CartState;
  products: Product[];
}

export default function CartSummary({ cart, products }: Props) {
  const items = products.filter((p) => cart[p.id] > 0);
  const total = items.reduce((sum, p) => sum + p.price * cart[p.id], 0);

  return (
    <div className="cart-panel">
      <h3>Order Summary</h3>

      {items.length === 0 && <p>No items selected</p>}

      {items.map((p) => (
        <div
          key={p.id}
          className="cart-row"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <span>
            {"-  " + p.name} × {cart[p.id]}
          </span>
          <span style={{ marginLeft: "auto" }}>
            {(p.price * cart[p.id]).toLocaleString()} ₫
          </span>
        </div>
      ))}

      <hr />
      <div
        className="total"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <strong>Total</strong>
        <strong style={{ marginLeft: "auto", color: "red" }}>
          {total.toLocaleString()} ₫
        </strong>
      </div>
    </div>
  );
}
