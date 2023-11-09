import React, { useEffect, useState } from "react";
import Group from "./Group";
import axios from "axios";
import '../Home/Style.css'
import { Link } from 'react-router-dom';
import Logo from "../../assets/2.png";

const Groups = () => {
    const [groups, setGroups] = useState([]);
    const [newGroupName, setNewGroupName] = useState("");
    const [newSubject, setNewSubject] = useState("");
    useEffect(() => {
      req();
    }, []);
  
    const req = async () => {
      try {
        const response = await axios.get("/groups", {
          headers: {
            "ngrok-skip-browser-warning":  "69420",
          },
        });
        console.log(response);
        const dat = response.data;
        const newGroups = dat.map((group) => {
          const groupName = group.group_name;
          const id = group.id;
          const subject = group.subject;
          const date = group.date
          return { groupName, id, subject, date };
          });
        setGroups(newGroups);
      } catch (error) {
        console.log(error);
      }
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      const group_name = newGroupName;
      const subject= newSubject
      const groupToAdd = { group_name, subject };
      setGroups((prevGroups) => [...prevGroups, groupToAdd]);
    console.log (groupToAdd)
      axios
        .post("/groups/creategroup", groupToAdd)
        .then((response) => {
          console.log("group added");
        })
        .catch((error) => {
          console.log(error);
        });
    };
  
    const deleteGroup = (id) => {
      axios
        .delete("/groups/delete/" + id)
        .then((response) => {
          console.log("group deleted");
        })
        .catch((error) => {
          console.log(error);
        });
      setGroups((prevGroups) =>
        prevGroups.filter((group) => group.id !== id)
      );
    };
  
    return (
      <div class=" w-100 h-100">
         <nav className="navbar navbar-expand-lg  ">
          <div className="collapse navbar-collapse " id="navbarTogglerDemo03">
            <ul className="navbar-nav  mt-2 mt-lg-0 justify-start navuser">
            <Link  to="/" >
              <img src={Logo} alt="logo" className="img-fluid object-fit-cover  rounded m-0 ms-5 my-0 loginimg"  />
            </Link>
            
            </ul>
          </div>
          <div className="collapse navbar-collapse justify-content-end" id="navbarTogglerDemo03">
          <div className="navbar-nav ms-auto mt-2 mt-lg-0">
              <div className="nav-link width=auto">
                <button onClick={req} type="button" className=" btn me-3">
                Logout
                </button>
            </div>
        </div>
        </div>
      </nav>
        <div className="divgroup">
          <ul>
            {groups.map((group) => (
              <Group info={group} delete={deleteGroup} key={group.id} />
            ))}
          </ul>
          <form action="submit" onSubmit={handleSubmit}>
            <div className="grouForm">
              <h4>CREATE A GROUP :</h4>
              <input className="groupInput"
                value={newGroupName}
                type="text"
                placeholder="Enter the name of your group"
                onChange={(e) => setNewGroupName(e.target.value)}
              />
              <input className="groupInput"
                value={newSubject}
                type="text"
                placeholder="Enter the subject of your group"
                onChange={(e) => setNewSubject(e.target.value)}
              />
              <button type="submit" className="addNewGroup">Add New Group</button>
            </div>
          </form>
        </div>
      </div>
    );
  };
  
  export default Groups;
  