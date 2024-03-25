import Products from './Products';

async function fetchProducts() {
  const response = await fetch('http://localhost:8000/api/products');
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const data = await response.json();
  return data;
}

export default async function FeaturedProducts() {
  const products = await fetchProducts();

  return (
    <section>
        <Products products={products} />
    </section>
  )
}
