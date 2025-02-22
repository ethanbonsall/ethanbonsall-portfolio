import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Portfolio from "./portfolio";
import Birthday from "./birthday";
import Sam from "./sam";
import Graham from "./graham";
import Taylor from "./taylor";
import BirthdayPageSubmit from "./birthdaySubmit";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/birthday" element={<Birthday />} />
        <Route path="/birthdaySubmit" element={<BirthdayPageSubmit />} />
        <Route path="/sam" element={<Sam />} />
        <Route path="/graham" element={<Graham />} />
        <Route path="/taylor" element={<Taylor />} />

      </Routes>
    </Router>
  );
}

export default App;
