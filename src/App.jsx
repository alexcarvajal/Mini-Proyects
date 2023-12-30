import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './App.css'
import { Home } from "./components/Home"
import Birthday from "./components/01-birthday/Birthday"
import CompTours from "./components/02-tours/App"
import Reviews from "./components/03-reviews/Index"
import Questions from "./components/04-accordion/Index"
import MenuApp from "./components/05-menu/Index"
import Tabs from "./components/06-tabs/Tabs"
function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/birthday" element={<Birthday />} />
          <Route path="/tours" element={<CompTours />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/questions" element={<Questions />} />
          <Route path="/menu" element={<MenuApp />} />
          <Route path="/tabs" element={<Tabs />} />

        </Routes>
      </Router>
    </>
  )
}

export default App
