import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Home/HomePage";
import LoginPage from "./LoginFolder/LoginPage";
import Navbar from "../Components/Navbar";
import CraetePost from "./Post-Field/CraetePost";
import ThemeSwitcher from "./ThemeFolder/ThemeSwitcher";
import ThemeContextProvider from "./ThemeFolder/ThemeToggle";
function App() {
  return (
    <div className="main-container">
      <Router>
        <ThemeContextProvider>
          <ThemeSwitcher />
        </ThemeContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/LoginPage" element={<LoginPage />} />
          <Route path="/CreatePost" element={<CraetePost />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
