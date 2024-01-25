import { BrowserRouter,Routes,Route } from "react-router-dom"
import Home from "./Pages1/Home"
import About from "./Pages1/About"
import Contact from "./Pages1/Contact"
import Layout from "./Layout"
export default function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="contact" element={<Contact/>}/>
    </Route>
    </Routes>
    </BrowserRouter>
  )
}

