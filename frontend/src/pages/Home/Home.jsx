import React, { useState } from 'react'
import Header from '../../components/header/Header';
import ExploreMenu from '../../components/exploremenu/ExploreMenu';
import { use } from 'react';

const Home = () => {
  
    const[category,setcategory] = useState("All")
  
  return (
    <div>
      <Header />
      <ExploreMenu category={category} setcategory={setcategory} />
    </div>
  )
}

export default Home
