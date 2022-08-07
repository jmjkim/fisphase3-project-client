import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/engine_department' exact element={<Dashboard />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;