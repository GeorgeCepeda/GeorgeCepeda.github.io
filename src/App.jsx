import { useState } from 'react'
import {Route, 
  createBrowserRouter, 
  createRoutesFromElements, 
  RouterProvider} from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MainLayout from './layout/MainLayout'
import Homepage from './pages/Homepage'

function App() {
  const [count, setCount] = useState(0)

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
        <Route index element={<Homepage /> } />
      </Route>
    )
  )

  return <RouterProvider router={router}/>
}

export default App
