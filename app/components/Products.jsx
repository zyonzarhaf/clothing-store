import Card from './Card.jsx';
import styles from './Products.module.css';

async function fetchProducts() {
  const response = await fetch('http://localhost:8000/api/products');
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const data = await response.json();
  return data;
}

export default async function Products() {
  const products = await fetchProducts();

  return (
    <div className={styles.productsContainer}> 
      {products.map(product => (<Card key={product._id} product={product} />))}
    </div>
  )
}
