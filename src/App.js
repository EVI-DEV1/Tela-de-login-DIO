import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import EditProfile from "./pages/EditProfile";
import Login from './pages/login'
import Signup from './pages/signup'
import Feed from './pages/feed'
import Home from './pages/home'
import ForgotPassword from './pages/ForgotPassword'
import Profile from "./pages/Profile";
import { GlobalStyle } from './styles/global';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/edit" element={<EditProfile />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </Router>
  );
}

export default App;