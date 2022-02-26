import { useEffect, useState } from 'react';
import { Product } from '../../app/models/product';
import ProductList from './ProductList';

export default function Catelog () {
  
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/products')
    .then(res => res.json())
    .then((response) => {
        setProducts(response)
    })
  }, [])

  return (
    <>
      <ProductList products={products} />
    </>
  )
}
