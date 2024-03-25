import Product from '../../components/Product';

export default function ProductPage({ params }) {
  return (
    <section>
      <Product _id={params.product}/>
    </section>
  );
}
