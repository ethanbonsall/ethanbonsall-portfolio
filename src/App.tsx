import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Portfolio from "./portfolio";
import Birthday from "./birthday";
import Sam from "./sam";
import Graham from "./graham";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/birthday" element={<Birthday />} />
        <Route path="/sam" element={<Sam />} />
        <Route path="/graham" element={<Graham />} />
      </Routes>
    </Router>
  );
}

export default App;