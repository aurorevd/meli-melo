import React from 'react'
import './Style.css'


export default function LeftBar() {
  return (
    <div className="leftBar">
        <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 ">
            <a href="/" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-secondary text-decoration-none">
                <span className="fs-5 d-none d-sm-inline">DashBoard</span>   
            </a>
            <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start " id="menu">
                <li className="nav-item">
                    <a href="#" className="nav-link align-middle px-0">
                        <i className="fs-4 bi-house"></i> <span className="ms-1 d-none d-sm-inline">Friend Group</span>
                    </a>
                </li>
                <li>
                    <a href="#submenu1" data-bs-toggle="collapse" className="nav-link px-0 align-middle">
                        <i className="fs-4 bi-speedometer2"></i> <span className="ms-1 d-none d-sm-inline">Art group</span> 
                    </a>
                    <ul className="collapse show nav flex-column ms-1" id="submenu1" data-bs-parent="#menu">
                        <li className="w-100">
                            <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Collage group</span> </a>
                        </li>
                        <li>
                            <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Doodle gang</span>  </a>
                        </li>
                    </ul>
                </li>
                    <li>
                        <a href="#" className="nav-link px-0 align-middle">
                            <i className="fs-4 bi-table"></i> <span className="ms-1 d-none d-sm-inline">Poetry group</span></a>
                    </li>
                    <li>
                        <a href="#submenu2" data-bs-toggle="collapse" className="nav-link px-0 align-middle ">
                            <i className="fs-4 bi-bootstrap"></i> <span className="ms-1 d-none d-sm-inline">Caligraphy group</span></a>
                        <ul className="collapse nav flex-column ms-1" id="submenu2" data-bs-parent="#menu">
                            <li className="w-100">
                                <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Item</span> 1</a>
                            </li>
                            <li>
                                <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Item</span> 2</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#submenu3" data-bs-toggle="collapse" className="nav-link px-0 align-middle">
                            <i className="fs-4 bi-grid"></i> <span className="ms-1 d-none d-sm-inline">idk group</span> </a>
                    </li>
                    {/* <li>
                        <a href="#" className="nav-link px-0 align-middle">
                            <i className="fs-4 bi-people"></i> <span className="ms-1 d-none d-sm-inline">yes i know group</span> </a>
                    </li> */}
                </ul>
                <hr/>
            </div>
        </div>

  )
}



