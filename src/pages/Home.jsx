import { useEffect, useState } from "react";
import Spinner from '../components/Spinner'
import Product from '../components/Product'

const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const [loading, setLoading]=useState(false);
  const [items, setItems]=useState([]);

  async function fetchProductData(){
    setLoading(true);
    try{
      const res=await fetch(API_URL);
      const data=await res.json();
      setItems(data);
      // setItems(products);  in case if api is not working
    }
    catch(error){
      console.log('Error aagya ji');
      setItems([]);
    }
    setLoading(false);
  }


  useEffect(()=>{
    fetchProductData();
  },[])

  return(
    <div>
      {
        loading ? <Spinner/> :
        (
          items.length > 0 ?
          (
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]">
              {
                items.map((item)=>(
                  <Product key={item.id} item={item}/>
                ))
              }
            </div>
          ):
          (
            <div className="flex justify-center items-center">
              <p>No Data Found</p>
            </div>
          )
        )
      }
    </div>
  );
};

export default Home;
