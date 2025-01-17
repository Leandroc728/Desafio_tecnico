import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import FAQ from "./Pages/FAQ/FAQ"
import Palestrantes from "./Pages/Palestrantes/Palestrantes"
import Home from "./Pages/Home/Home";

function App() {

  return (
    <Router>
      <div className="w-screen h-screen p-6 lg:p-20">
      <Routes>
        <Route path="/palestrantes" element={<Palestrantes />} />
        <Route path="/FAQ" element={<FAQ />} />
        <Route path="/" element={<Home />} />
      </Routes>
      </div>
    </Router>
  )
}

export default App
