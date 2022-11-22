import React from 'react'
import Main from './Components/Main'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Blog from './Components/SecondScreen/Blog'
import Navbar from './Components/Screens/Navbar'
import Footer from './Components/Screens/Footer'
import WishList from './Components/SecondScreen/WishList'
import Checkout from './Components/SecondScreen/Checkout'
import TopHeader from './Components/Screens/TopHeader'
import CreateAccount from './Components/SecondScreen/CreateAccount'
import Faq from './Components/SecondScreen/Faq'
import About from './Components/SecondScreen/About'
import Contactus from './Components/SecondScreen/Contactus'
import Login from './Components/SecondScreen/Login'
import ForgatePassword from './Components/SecondScreen/ForgatePassword'
import SpecialProduct from './Components/SecondScreen/SpecialProduct'
import Categorypage from './Components/SubScreen.js/Categorypage'

function App() {
  return (
   <>
   <Router>
    <Routes>
      <Route path="/" element={<Main/>}/>
      <Route path="/specialproduct" element={<Main/>}/>
      <Route path="/blog" element={[<TopHeader/>,<Navbar/>,<Blog/>,<Footer/>]}/>
      <Route path="/wishlist" element={[<TopHeader/>,<Navbar/>,<WishList/>,<Footer/>]}/>
      <Route path="/checkout" element={[<TopHeader/>,<Navbar/>,<Checkout/>,<Footer/>]}/>
      <Route path="/faq" element={[<TopHeader/>,<Navbar/>,<Faq/>,<Footer/>]}/>
      <Route path="/about" element={[<TopHeader/>,<Navbar/>,<About/>,<Footer/>]}/>
      <Route path="/contactus" element={[<TopHeader/>,<Navbar/>,<Contactus/>,<Footer/>]}/>
      <Route path="/categorypage" element={[<TopHeader/>,<Navbar/>,<Categorypage/>,<Footer/>]}/>
      <Route path="/createaccount" element={[<CreateAccount/>,<Footer/>]}/>
      <Route path="/login" element={[<Login/>,<Footer/>]}/>
      <Route path="/forgatepassword" element={<ForgatePassword/>}/>
    </Routes>
   </Router>
   </>
  )
}

export default App

