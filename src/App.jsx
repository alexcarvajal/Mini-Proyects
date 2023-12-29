import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './App.css'
import { Home } from "./components/Home"
import Birthday from "./components/01-birthday/Birthday"
import CompTours from "./components/02-tours/App"
function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/birthday" element={<Birthday />} /> 
          <Route path="/tours" element={<CompTours />} />
          <Route path="/interrogativeToBe" />

        </Routes>
      </Router>
    </>
  )
}

export default App
