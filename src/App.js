import SignUp from "./form/SignUp";
import LogInform from "./form/LogInform";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Home from "./components/Home"
import MainPage from "./components/MainPage"
// function RequireAuth({ children }) {
// You can add your authentication logic here
// For example, check if the user is authenticated and return children if true
// Otherwise, navigate to the login page
// const currentUser = false;
// if (currentUser) {
//   return children;
// } else {
//   return <Navigate to="/login" />;
// }
// }

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/signUp" element={<SignUp></SignUp>} />
          <Route path="/login" element={<LogInform />} />
          <Route path="gallery" element={<MainPage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
