import React from 'react'
import { BrowserRouter,Routes,Route } from "react-router-dom"
import Home from "./Pages1/Home"
import About from "./Pages1/About"
import Contact from "./Pages1/Contact"
import Layout from "./Layout"
import Counter from "./Counter"
import Reducer from "./Reducer"
import Effect from './Effect'
import Callback from './Callback'
import CounterComponent from './Ref'
import Memo from './Memo'
export default function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="contact" element={<Contact/>}/>
      <Route path="Counter" element={<Counter/>}/>
      <Route path="Effect" element={<Effect/>}/>
      <Route path="Reducer" element={<Reducer/>}/>
      <Route path="Callback" element={<Callback/>}/>
      <Route path="Ref" element={<CounterComponent/>}/>
      <Route path="Memo" element={<Memo/>}/>
    </Route>
    </Routes>
    </BrowserRouter>
  )
}

