import Projects from './pages/Projects'
import Blog from './pages/Blog'
import About from './pages/About'
import Home from './pages/Home'
import Layout from './pages/Layout'
import { Routes, Route } from 'react-router-dom'


function App() {
  return (

 <Routes>
   <Route element={<Layout />}>
     <Route index element={<Home />} />
     <Route path="Projects" element={<Projects />} />
     <Route path="Blog" element={<Blog />} />
     <Route path="About" element={<About />} />
     <Route path="Home" element={<Home />} />
   </Route>
 </Routes>

  )
}

export default App
