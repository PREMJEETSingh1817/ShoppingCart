import { useEffect, useState } from "react";
import { Spinner } from "../components/Spinner";
import Product from "../components/Product";
const Home = () => {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([])
  const API_URL = "https://fakestoreapi.com/products";
  async function fetchProductData(){
    setLoading(true);


    try{
      const res=await fetch(API_URL);
      const data=await res.json();
      setPosts(data);
      console.log(data)
    }
    catch(error){
        console.log("error 404")
        setPosts([]);
    }
    setLoading(false);
  }

  useEffect(()=>{
    fetchProductData();
  },[])
  return <div>
    {
      loading?<Spinner/>: posts.length>0?(<div>
          {posts.map((post)=>(
            <Product key={post.id} post={post}/>
          ))}
      </div>):
      <div>
        <p>Data Not Found</p>
      </div>
    }
  </div>;
};

export default Home;
