'use client';

import { usePathname } from 'next/navigation';
import Card from './Card';
import styles from './Products.module.css';

function filterProductsByCategory(products, pathName) {
  const category = pathName.split('/').slice(2);
  return products.filter(product =>
    product.categories.every((cat, index) => cat === category[index])
  );
}

export default function Products({ products }) {
  const pathName = usePathname();
  const results = pathName !== "/" ? filterProductsByCategory(products, pathName) : products;

  return (
    <div className={styles.productsContainer}> 
      {results.map(product => <Card key={product._id} product={product} />)}
    </div>
  ) 
}
