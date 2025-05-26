import { Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import CalculatorPage from "@/pages/Calculator";
import EducationPage from "@/pages/Education";
import EducationTopicPage from "@/pages/EducationTopic";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import ContactUs from "@/pages/ContactUs";
import { createContext, useState } from "react";
import { Helmet } from "react-helmet";

export const AuthContext = createContext({
  isAuthenticated: false,
  setIsAuthenticated: (value: boolean) => {},
  logout: () => {},
});

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const logout = () => {
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, setIsAuthenticated, logout }}
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<CalculatorPage />} />
        <Route path="/education" element={<EducationPage />} />
        <Route path="/education/:topic" element={<EducationTopicPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
    </AuthContext.Provider>
  );
}
