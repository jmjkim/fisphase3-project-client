import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPageDisplayer from "./components/LandingPageDisplayer";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/engine_departments' exact element={<LandingPageDisplayer />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;