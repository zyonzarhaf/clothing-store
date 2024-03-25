import Products from '../../components/Products';

async function fetchProducts() {
  const response = await fetch('http://localhost:8000/api/products');
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const data = await response.json();
  return data;
}

export default async function ProductsPage() {
  const products = await fetchProducts();

  return (
    <Products products={products} />
  )
}
