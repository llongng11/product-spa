import { useMemo, useState } from "react";
import { products } from "./data/products";
import type { CartState } from "./types";
import ProductList from "./components/ProductList";
import CartSummary from "./components/CartSummary";
import SearchBar from "./components/SearchBar";
import CategoryFilter from "./components/CategoryFilter";
import "./styles.css";

export default function App() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [cart, setCart] = useState<CartState>({});

  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      const matchName = p.name.toLowerCase().includes(search.toLowerCase());
      const matchCategory = category === "All" || p.category === category;
      return matchName && matchCategory;
    });
  }, [search, category]);

  const updateQuantity = (productId: number, qty: number) => {
    setCart((prev) => ({
      ...prev,
      [productId]: qty,
    }));
  };

  return (
    <div className="app-container">
      <div className="product-panel">
        <SearchBar value={search} onChange={setSearch} />
        <CategoryFilter value={category} onChange={setCategory} />
        <ProductList
          products={filteredProducts}
          cart={cart}
          onQtyChange={updateQuantity}
        />
      </div>

      <CartSummary cart={cart} products={products} />
    </div>
  );
}
