import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Root from './Layout/Root.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router';
import AllProducts from './components/AllProducts.jsx';
import AuthProvider from './Contexts/AuthProvider.jsx';
import Login from './Components/LoginRegister/Login.jsx';
import Register from './Components/LoginRegister/Register.jsx';
import MyBids from './components/MyBids.jsx';
import CreateProduct from './Components/CreateProduct.jsx';
import PrivateRoute from './Components/LoginRegister/PrivateRoute.jsx';
import ProductDetails from './Components/ProductDetails.jsx';
import Home from './Components/Home.jsx';
import MyProducts from './Components/MyProducts.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "allProducts",
        Component: AllProducts,
      },
      {
        path: 'myProducts',
        element: (
          <PrivateRoute>
            <MyProducts />
          </PrivateRoute>
        )
      },
      {
        path: "myBids",
        element: (<PrivateRoute>
          <MyBids />
        </PrivateRoute>)
      },
      {
        path: "createProducts",
        element: <CreateProduct />,
      },
      {
        path: "login",
        Component: Login,
      },
      {
        path: "register",
        Component: Register,
      },
      {
        path: "productDetails/:id",
        loader: ({ params }) => fetch(`http://localhost:3000/products/${params.id}`),
        Component: ProductDetails,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
)
