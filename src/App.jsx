import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Projects from "./pages/Projects";

const App = () => (
  <div>
    <Router>
      <Routes>
        <Route path="/" element={<Projects />} />
      </Routes>
    </Router>
  </div>
);

export default App;
