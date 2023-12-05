// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import Home from "./components/Home";
import PrivateRoutes from "./utils/PrivateRoutes";
import { AuthProvider } from "./utils/AuthProvider";
const App = () => {
  return (
    <Router>
      <AuthProvider>
        {" "}
        <Routes>
          <Route element={<PrivateRoutes />}>
            {" "}
            <Route path="/home" element={<Home />} />
          </Route>
          <Route path="/" element={<LoginForm />} />
          <Route path="/login" element={<LoginForm />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
};

export default App;
