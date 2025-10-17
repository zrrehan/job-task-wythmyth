import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Layout from './Layout.jsx';
import Payment from './Routes/Payment.jsx';
import MyPayments from './Routes/MyPayments.jsx';
import Error from './Routes/Error.jsx';

const dataPromise = fetch("/membership-plan.json").then(res => res.json());

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      { 
        index: true, 
        element: <Suspense>
                    <Payment dataPromise={dataPromise}></Payment>
                  </Suspense> 
      },
      {
        path: "/my-payment", 
        element: <MyPayments></MyPayments>
      }, 
      {
        path: "*", 
        element: <Error></Error>
      }

    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />,
  </StrictMode>,
)
