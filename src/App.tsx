import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Portfolio from "./Portfolio/portfolio";
import Birthday from "./Birthday/birthday";
import Sam from "./People/sam";
import Graham from "./People/graham";
import Taylor from "./People/taylor";
import BirthdaySubmitPage from "./Birthday/birthdaySubmit";
import Audrey from "./People/audrey";

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
