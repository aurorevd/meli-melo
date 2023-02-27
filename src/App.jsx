
import { createBrowserHistory } from 'history';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Components/Home/HomePage"
import AboutPage from "./Components/About/AboutPage"
import ProfilePage from "./Components/UserProfile/ProfilePage";
import {AuthProvider} from "./Components/Login/Auth"
import LoginPage from "./Components/Login/LoginPage"
import {RequireAuth} from './Components/Login/RequireAuth'
import SignUp from './Components/Login/SignUp';
import './Components/Home/Style.css'
import PostPopUp from './Components/Home/PostPopUp';
import RandomText from './Components/PostFunctions/RandomText';
import ProfilePageLayout from './Components/UserProfile/ProfilePageLayout';



const history = createBrowserHistory();

const App = () => {
  return (
    <div >
      <AuthProvider>
        <BrowserRouter history={history}>
          {/* <ProfilePageLayout/> */}
          <Routes>
            <Route path="/" element={<HomePage />}/>
            {/* <Route path="/profile" element={<ProfilePage/>}/> */}
              <Route path="/loginsignup" element={<LoginPage />} /> 
               <Route path = "/post" element={<PostPopUp/>}/>  
               <Route path= "/profile" element={<ProfilePageLayout/>}/> 
               <Route path="/loginsignup" element={<SignUp/>}/>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
};

export default App;
