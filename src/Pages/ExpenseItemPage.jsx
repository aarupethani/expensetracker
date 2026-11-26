import { useEffect, useState } from 'react'
import '../style/ExpenseItemPage.css'

const API_URL = "https://dummyjson.com/products"

function ExpenseItemPage() {
  const [proucts, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    try {
      const response = await fetch(API_URL);

      if (!response.ok) {
        throw new Error("could not load expense items");
      }
      const data = await response.json();
      setProducts(data.proucts);
    } catch (fetchError) {
      console.log(fetchError.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    //eslint-disable-next-line react hooks/set-state-in-effect
    fetchProducts();
  }, []);




  return (
    <>

    </>
  )
}

export default ExpenseItemPage
