import React, { useState } from 'react';
import Navbar from './components/navbar/Navbar.jsx';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home.jsx'
import Cart from "./pages/Cart/Cart.jsx";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder.jsx"
import Footer from "./components/footer/footer.jsx"
import LoginPopUp from './components/loginpopup/LoginPopUp.jsx';

const AppContent = () => {
  const { food_list, category, setCategory } = useContext(StoreContext);

  return (
    <>
      <ExploreMenu category={category} setcategory={setCategory} />
      <div className="food-list">
        {food_list.map((item) => (
          <FoodItem key={item.id} {...item} />
        ))}
      </div>
    </>
  );
};

const App = () => {

  const [showlogin, Setshowlogin] = useState(false)

  return (
    <>
      {showlogin ? <LoginPopUp Setshowlogin={Setshowlogin} /> : <></>}
      <div className="app">
        <Navbar Setshowlogin={Setshowlogin} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/order' element={<PlaceOrder />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
