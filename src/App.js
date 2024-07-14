import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/js/dist/collapse.js'
import Navbar from './components/Navbar';
import { createBrowserRouter,RouterProvider} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useEffect, useState } from 'react';

function App() {
  const [color,setColor]=useState(false)
  const route = createBrowserRouter([
    {
      path:'/',
      element:<>
      <Navbar color={color}/>
      <Home/>
      <Footer/>
      </>
    },
    {
      path:'/about',
      element:<>
      <Navbar  color={color}/>
      <About/>
      <Footer/></>
    },
    {
      path:'/projects',
      element:<>
      <Navbar  color={color}/>
      <Projects/>
      <Footer/></>
    },
    {
      path:'/contact',
      element:<>
      <Navbar color={color}/>
      <Contact/>
      <Footer/></>
    }
  ])
  
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      if(window.scrollY<20){
        setColor(false)
      }else{
        setColor(true)
      }
    })

  },[color])
  return (
    <>
      <RouterProvider router={route}></RouterProvider>
    </>
  );
}

export default App;
