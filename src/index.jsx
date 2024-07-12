import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Error from './components/Error/index.jsx';
import About from './components/About/index.jsx';
import Contact from './components/Contact/index.jsx';
import Home from './components/Home/index.jsx';
import Skills from './components/Skills/index.jsx';
import Projects from './components/Projects/index.jsx';
const router = createBrowserRouter([
{ path: "/", element: <App/>},
{path:"/home",element:<Home/>},
{path:"/about",element:<About/>},
{path:"/skills",element:<Skills/>},
{path:"projects",element:<Projects/>},
{path:"contact",element:<Contact/>},
{path :"*" , element:<Error/>}
]);
  


emailjs.init(import.meta.env.VITE_PUBLIC_KEY);

ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router} />)