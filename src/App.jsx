import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import SignUp from "./pages/SignUp.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Home from "./pages/Home.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
      
        <Route exact path="/signup" element={<SignUp />} />
      <Route exact path="/dashboard" element={<Dashboard />} />
      <Route exact path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
