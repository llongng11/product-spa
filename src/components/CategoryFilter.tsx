import { categories } from "../data/categories";

interface Props {
  value: string;
  onChange: (value: string) => void;
}

export default function CategoryFilter({ value, onChange }: Props) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      style={{ width: "100%", padding: 8, marginBottom: 12 }}
    >
      {categories.map((c) => (
        <option key={c} value={c}>
          {c}
        </option>
      ))}
    </select>
  );
}
