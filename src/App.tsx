import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Portfolio from "./portfolio";
import Birthday from "./birthday";
import Sam from "./sam";
import Graham from "./graham";
import Taylor from "./taylor";
import BirthdaySubmitPage from "./birthdaySubmit";
import Audrey from "./audrey";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/birthday" element={<Birthday />} />
        <Route path="/birthdaySubmit" element={<BirthdaySubmitPage />} />
        <Route path="/sam" element={<Sam />} />
        <Route path="/graham" element={<Graham />} />
        <Route path="/taylor" element={<Taylor />} />
        <Route path="/audrey" element={<Audrey />} />
      </Routes>
    </Router>
  );
}

export default App;
