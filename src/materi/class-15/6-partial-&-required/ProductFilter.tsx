import { useState } from "react";

type Product = {
  id: number;
  name: string;
  category: string;
  price: number;
  stock: number;
};

export const ProductFilter = () => {
  const [filter, setFilter] = useState<Partial<Product>>({});

  const handleFilterChange = (key: keyof Product, value: string) => {
    setFilter((prev) => ({ ...prev, [key]: value }));
  };

  const search = () => {
    console.log("Searching with : ", filter);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Cari Nama..."
        onChange={(e) => handleFilterChange("name", e.target.value)}
      />
      <input
        type="text"
        placeholder="Cari Kategori..."
        onChange={(e) => handleFilterChange("category", e.target.value)}
      />

      <button onClick={search}>Cari</button>
    </div>
  );
};

type NewProductInput = Required<Omit<Product, "id">>;

export const ProductEntry = () => {
  const [form, setForm] = useState<Partial<NewProductInput>>({});

  const saveProduct = (validData: NewProductInput) => {
    console.log("Menyimpan data Product....", validData);
    alert("Sudah berhasil disimpan");
  };

  const handleSubmit = () => {
    if (
      form.name &&
      form.category &&
      form.price !== undefined &&
      form.stock !== undefined
    ) {
      setTimeout(() => {
        saveProduct(form as NewProductInput);
      }, 1500);
    } else {
      alert("gagall : Semua data wajib diisi");
    }
  };

  const handleChange = (key: keyof NewProductInput, value: string | number) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Name..."
        onChange={(e) => handleChange("name", e.target.value)}
      />
      <input
        type="text"
        placeholder="Category..."
        onChange={(e) => handleChange("category", e.target.value)}
      />
      <input
        type="number"
        placeholder="Price..."
        onChange={(e) => handleChange("price", Number(e.target.value))}
      />
      <input
        type="number"
        placeholder="Stock..."
        onChange={(e) => handleChange("stock", Number(e.target.value))}
      />
      <button onClick={handleSubmit}>Simpan Data Lengkap</button>
    </div>
  );
};
