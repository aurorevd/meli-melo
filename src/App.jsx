
import { createBrowserHistory } from 'history';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Components/Home/HomePage"
import AboutPage from "./Components/About/AboutPage"
import ProfilePage from "./Components/UserProfile/ProfilePage";
import { AuthProvider } from "./Components/Login/Auth"
import LoginPage from "./Components/Login/LoginPage"
import { RequireAuth } from './Components/Login/RequireAuth'
import SignUp from './Components/Login/SignUp';
import './Components/Home/Style.css'
import PostPopUp from './Components/Home/PostPopUp';
import ProfilePageLayout from './Components/UserProfile/ProfilePageLayout';
import Groups from './Components/GroupUser/Groups'

const history = createBrowserHistory();

const App = () => {
  return (
    <div >
      <AuthProvider>
        <BrowserRouter history={history}>
          <Routes>
            <Route path="/loginsignup" element={<SignUp />} />
            <Route path="/" element={<HomePage />} />
            <Route path='/groups' element={<Groups />} />
            <Route path="/profile/" element={<RequireAuth><ProfilePage /></RequireAuth>} />
            <Route path="/loginsignup" element={<LoginPage />} />
            <Route path="/post" element={<PostPopUp />} />
            <Route path="/profile" element={<ProfilePageLayout />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
};

export default App;
