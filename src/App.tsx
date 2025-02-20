import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Portfolio from "./portfolio";
import Birthday from "./birthday";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/birthday" element={<Birthday />} />
      </Routes>
    </Router>
  );
}

export default App;