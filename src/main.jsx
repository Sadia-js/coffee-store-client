import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AddCoffee from './components/AddCoffee.jsx'
import Update from './components/Update.jsx'
import SignIn from './components/SignIn.jsx'
import SignUp from './components/SignUp.jsx'
import AuthProvider from './AuthProvider.jsx'
import Layout from './components/Layout.jsx'
import Home from './components/Home.jsx'
import Users from './components/Users.jsx'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import Users2 from './components/Users2.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('http://localhost:3000/coffee')
      },
      {
        path: "/coffee",
        element: <AddCoffee></AddCoffee>
      },
      {
        path: "/updateCoffee/:id",
        element: <Update></Update>,
        loader: ({ params }) => fetch(`http://localhost:3000/coffee/${params.id}`)
      },
    ]
  },
  {
    path: "/signin",
    element: <SignIn></SignIn>
  },
  {
    path: "/signUp",
    element: <SignUp></SignUp>
  },
  {
    path: "/users",
    element: <Users></Users>,
    loader: () => fetch('http://localhost:3000/users')
  },
  {
    path: "/users2",
    element: <Users2></Users2>,
  },
])

const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router}></RouterProvider>
      </AuthProvider>
    </QueryClientProvider>
  </StrictMode>,
)
