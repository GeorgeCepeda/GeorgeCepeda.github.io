import { useState } from 'react'
import {Route, 
  createBrowserRouter, 
  createRoutesFromElements, 
  RouterProvider} from 'react-router-dom'
import MainLayout from './layout/MainLayout'
import Homepage from './pages/Homepage'
import NotFoundPage from './pages/NotFoundPage'
import UnderConstructionPage from './pages/UnderConstructionPage'
import AboutMePage from './pages/AboutMePage'
import SkillsPage from './pages/SkillsPage'

function App() {
  const [count, setCount] = useState(0)

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
        <Route index element={<Homepage /> } />
        <Route path='/about' element={<AboutMePage />} />
        <Route path='/project' element={<UnderConstructionPage />} />
        <Route path='/skills' element={<SkillsPage />} />
        <Route path='/contact' element={<UnderConstructionPage />} />
        <Route path='*' element={ <NotFoundPage /> } />
      </Route>
    )
  )

  return <RouterProvider router={router}/>
}

export default App
