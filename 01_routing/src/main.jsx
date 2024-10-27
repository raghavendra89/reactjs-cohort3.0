import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter,Routes,Route,Outlet } from 'react-router-dom'

const Router=
<BrowserRouter>
    <Routes>
        <Route path="/random" element={<Layout />}>
        <Route path="/random/about" element={<About />}/>
        <Route path="home" element={<Home />} />
        </Route>
    </Routes>
</BrowserRouter>

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {Router}
  </StrictMode>,
)

function Layout(){
    return (<>
      <h1>Layout</h1>
      <Outlet />
      </>
    )
}
function About(){
  return "About Us";
}

function Home(){
  return "Home";
}