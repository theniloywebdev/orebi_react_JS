import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import Error from './components/Page/Error'
import RootLayout from './components/Layouts/RootLayout'
import Shop from './components/Page/Shop'
import ProductInside from './components/Page/ProductInside'
import About from './components/Page/About'
import Contact from './components/Page/Contact'
import LogIn from './components/Page/LogIn'
import SignUp from './components/Page/SignUp'
import MyAccount from './components/Page/MyAccount'
import Cart from './components/Page/Cart'
import CheckOut from './components/Page/CheckOut'
import Home from './components/Page/Home'




const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
        <Route path="/" element={<RootLayout/>}>
          <Route path="/" element={<Home/>}/>
          <Route path="/shop" element={<Shop/>}/>
          <Route path="/product" element={<ProductInside/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/login" element={<LogIn/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/account" element={<MyAccount/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/checkout" element={<CheckOut/>}/>
          <Route path="*" element={<Error/>}/>
        </Route>
    </Route>
         
    
  )
);


function App() {
 
  return (
    <>

    <RouterProvider router={router} />
   
    
    
    </>
  )
}

export default App





























// [
//   {
//     path: "/",
//     element: <div>Hello NILOY!</div>,
//   },
//   {
//     path: "/about",
//     element: <div>Hello about!</div>,
//   },
//   {
//     path: "/service",
//     element: <Phone_year/>,
//   },
//   {
//     path: "/offer",
//     element: <SpecialOffer/>,
//   },
//   {
//     path: "/head",
//     element: <Heading text='THIS IS HEADING' className='text-red-600'/>,
//   },
// ]









// createRoutesFromElements(
//   <Route>
//       <Route path='/' element={<RootLayout/>}>
//          <Route path="/" element="Hellow NILOY"/>
//          <Route path="/contact" element="Hellow Contact page"/> 
//          <Route path="/offer" element={<SpecialOffer/>}/> 
//          <Route path="/head" element={<Heading text='THIS IS HAEDING PAGE ABOUT THIS PAGE!'className='text-green-500'/>}/> 
//          <Route path="/:id" element={<Error/>}/>
//       </Route>
//   </Route>
// )


// 


// import Heading from './components/Heading';
// import RootLayout from './components/Layouts/RootLayout';
// import SpecialOffer from './components/Layouts/SpecialOffer'
// import Error from './components/Page/Error'

// import {
//   createBrowserRouter,
//   RouterProvider,
//   createRoutesFromElements,
//   Route,
// } from "react-router-dom";


// const router = createBrowserRouter(

// );