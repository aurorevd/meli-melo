import React from 'react'
import './ProfilePage.css'


 function ProfilePageLayout() {
    return (
       <div class="main-content">
             {/* <div class="header pb-8 pt-5 pt-lg-8 d-flex align-items-center" style={{backgroundImage: `url(https://raw.githubusercontent.com/creativetimofficial/argon-dashboard/gh-pages/assets-old/img/theme/profile-cover.jpg)`}} > */}
                 <nav class="navbar navbar-top navbar-expand-md navbar-dark" id="navbar-main">
                <div className="row justify-content-center">
                <div className="col-md-5 text-center text-md-start">
                    <h1>
                        <div class="display-5">John Smith</div>
                    </h1>
                </div>
                </div>
                 </nav>
           </div>

          
           
    //    </div>
      )
    };
export default ProfilePageLayout;