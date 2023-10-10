import React, { useContext } from "react";
import SignUp from "./form/SignUp";
import LogInform from "./form/LogInform";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home"
import MainPage from "./components/MainPage"
import { ThemesContext } from "./Context/ThemeContext"


function App() {
  const [{ theme }] = useContext(ThemesContext)

  return (
    <div className="App" style={{background: theme.background, color: theme.color}}>
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/signUp" element={<SignUp/>} />
          <Route path="/login" element={<LogInform />} />
          <Route path="/gallery" element={<MainPage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
