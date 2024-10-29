import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Blog from './Blge/Blog.jsx';
import About from './About/About.jsx';
import Home from './Home/Home.jsx';
import Contact from './Contact/Contact.jsx';
const router=createBrowserRouter([
  {
    path: '/',
    element:<Home></Home>,
    children:[
      {
        path:'/about',
        loader:()=>fetch(`https://jsonplaceholder.typicode.com/todos`),
        element:<About></About>,
      },
      {
        path:'/contact',
        element:<Contact></Contact>
      },
      {
        path:'/Blog',
        loader:()=>fetch(`https://jsonplaceholder.typicode.com/posts`),
        element:<Blog></Blog>
      }
    ]
  }
 
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
