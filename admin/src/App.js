// app.js
import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import { ThemeProvider } from "./ThemeProvider";
import DashboardPage from "./pages/DashboardPage";
import ComponentRoutes from "./components/routes";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="flex">
          <div className="flex-1">
            <ComponentRoutes />
            <Routes>
              <Route path="/" element={<LoginPage />} />
              <Route path="/signup" element={<SignupPage />} />
              <Route path="/dashboard" element={<DashboardPage />} />
              {/* Add more routes as needed */}
              {/* <Route path="*" element={<NotFoundPage />} /> */}{" "}
              {/* Optional 404 page */}
            </Routes>
          </div>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
