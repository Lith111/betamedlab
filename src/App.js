import {  Route,BrowserRouter, Routes} from 'react-router-dom';
import React from 'react'
import Home from './page/Home/Home';
import Header from "./components/Header/Header";
import "./App.css"
import Footer from './components/Footer/Footer';
import PostsPage from './page/PostsPage/PostsPage';
const App = () => {
    return (
  <BrowserRouter>
  {/* الهيدر العام لكل الصفحات وفيه تسجيل الدخول و اللغة فقط */}
  <Header/>
  <Routes>
    {/* صفحة الهوم المسؤول عن ال ابوت اس و سهيدبار و كونيك اس  */}
  <Route path='/' element={<Home/>}/>
  <Route path='/post' element={<PostsPage/>}/>
  </Routes>
  <Footer/>
  </BrowserRouter>

  )
}

export default App