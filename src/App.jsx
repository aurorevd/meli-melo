
import { createBrowserHistory } from 'history';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Components/Home/HomePage"



import {AuthProvider} from "./Components/Login/Auth"

import LoginPage from "./Components/Login/LoginPage"
import { RequireAuth } from './Components/Login/RequireAuth'
import SignUp from './Components/Login/SignUp';
import './Components/Home/Style.css'
import ProfilePageLayout from './Components/UserProfile/ProfilePageLayout';
import Groups from './Components/GroupUser/Groups'

const history = createBrowserHistory();

const App = () => {
  return (
    <div >
      <AuthProvider>
        <BrowserRouter history={history}>


          <Route path="/loginsignup" element={<SignUp/>}/>
            <Route path="/" element={<HomePage />}/>
            <Route path="/profile" element={<RequireAuth><ProfilePageLayout/></RequireAuth>}/>
              <Route path="/loginsignup" element={<LoginPage />} /> 
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
};

export default App;
