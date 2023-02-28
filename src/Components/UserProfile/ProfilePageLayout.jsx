import {useAuth} from '../Login/Auth'
import {useNavigate} from 'react-router-dom'
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn, MDBTypography } from 'mdb-react-ui-kit';
import './ProfilePage.css'
import { Link } from 'react-router-dom';
import axios from 'axios';

const ProfilePageLayout = () => {
   const auth = useAuth()
   const navigate=useNavigate()

   const handleLogout = () =>{
      auth.logout()
      navigate('/')
   }

   const req = async () => {
    try {
      await axios.get("/user/logout", {
        headers: {
          "ngrok-skip-browser-warning": "69420",
        },
      });
      console.log("logout sucess")
    }
    catch (error) {
    console.log(error);
    }
  }

   return (
      <div>
       {auth.user}
      <div className="gradient-custom-2" style={{ backgroundColor: '#9de2ff' }}>
      <MDBContainer className=" h-100">
      <nav class="navbar navbar-expand-lg  ">
      <div class="collapse navbar-collapse " id="navbarTogglerDemo03">
          <ul class="navbar-nav  mt-2 mt-lg-0 justify-start navuser">
            <li class="nav-item ">
              <Link class="nav-link m-2 user-txtclr"  to="/">
                Home
              </Link>
            </li>
            <li class="nav-item ">
              <Link class="nav-link width=auto m-2 user-txtclr"  to="/groups">
                Groups
              </Link>
            </li>
          </ul>
        </div>
        <div class="collapse navbar-collapse justify-content-end" id="navbarTogglerDemo03">
        <div class="navbar-nav ms-auto mt-2 mt-lg-0">
        <div class="nav-link width=auto">
            <button onClick={req} type="button" class=" btn me-3">
              Logout
            </button>
            </div>
        </div>
        </div>
      </nav>
        <MDBRow className="justify-content-center align-items-center h-100">
            
          <MDBCol lg="14" xl="14">
            <MDBCard className='w-100'>
              <div className="rounded-top text-white d-flex flex-row" style={{ backgroundColor: '#000', height: '300px' }}>
                <div className="ms-4 mt-5 d-flex flex-column" style={{ width: '150px' }}>
                  <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"
                    alt="Generic placeholder image" className="mt-4 mb-2 img-thumbnail" fluid style={{ width: '150px', zIndex: '1' }} />
                  <MDBBtn outline color="dark" style={{height: '36px', overflow: 'visible'}}>
                    Edit profile
                  </MDBBtn>
                </div>
                <div className="ms-3" style={{ marginTop: '130px' }}>
                  <MDBTypography tag="h5">Andy Horwitz</MDBTypography>
                  <MDBCardText>New York</MDBCardText>
                </div>
              </div>
              <div className="p-4 text-black" style={{ backgroundColor: '#f8f9fa' }}>
                <div className="d-flex justify-content-end text-center py-1">
                  <div>
                    <MDBCardText className="mb-1 h5">25</MDBCardText>
                    <MDBCardText className="small text-muted mb-0">Photos</MDBCardText>
                  </div>
                  <div className="px-3">
                    <MDBCardText className="mb-1 h5">0</MDBCardText>
                    <MDBCardText className="small text-muted mb-0">Followers</MDBCardText>
                  </div>
                  <div>
                    <MDBCardText className="mb-1 h5">0</MDBCardText>
                    <MDBCardText className="small text-muted mb-0">Following</MDBCardText>
                  </div>
                </div>
              </div>
              <MDBCardBody className="text-black p-4">
                <div className="mb-5">
                  <p className="lead fw-normal mb-1">About</p>
                  <div className="p-4" style={{ backgroundColor: '#f8f9fa' }}>
                    <MDBCardText className="font-italic mb-1">Artist</MDBCardText>
                    <MDBCardText className="font-italic mb-1">I love poetry!</MDBCardText>
                    <MDBCardText className="font-italic mb-0">Caligrapghy</MDBCardText>
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <MDBCardText className="lead fw-normal mb-0">Recent photos</MDBCardText>
                  <MDBCardText className="mb-0"><a href="#!" className="text-muted">Show all</a></MDBCardText>
                </div>
                <MDBRow className="g-2">
                  <MDBCol className="mb-2">
                    <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(112).webp"
                      alt="image 1" className="w-100 rounded-3" />
                  </MDBCol>
                  <MDBCol className="mb-2">
                    <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(107).webp"
                      alt="image 1" className="w-100 rounded-3" />
                  </MDBCol>
                </MDBRow>
                <MDBRow className="g-2">
                  <MDBCol className="mb-2">
                    <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(108).webp"
                      alt="image 1" className="w-100 rounded-3" />
                  </MDBCol>
                  <MDBCol className="mb-2">
                    <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(114).webp"
                      alt="image 1" className="w-100 rounded-3" />
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
      </div>
   )
}


export default ProfilePageLayout;
