import "./App.css";
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom"
import LoginPage from "@/pages/LoginPage";
import DashboardPage from "@/pages/Dashboard/DashboardPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard/*" element={<DashboardPage />} />

        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
