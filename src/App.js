import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import {Route,Routes} from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component'
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

function App() {
  return (
    
    <div>
      <Header />
    <Routes>
      <Route exact path="/" element={<HomePage/>}/>
      <Route path="/shop" element={<ShopPage/>} />
      <Route path="/signin" element={<SignInAndSignUp/>} />
    </Routes>
    </div>
    
  );
}

export default App;
