import React, { useEffect, useState } from "react";
import Group from "./Group";
import axios from "axios";
import '../Home/Style.css'
import {useNavigate} from 'react-router-dom'
import {useAuth} from '../Login/Auth'

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
            //https://e6eb-84-199-109-85.eu.ngrok.io/
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
      <div class="bg-red w-100 h-100">
        <div>
          <ul>
            {groups.map((group) => (
              <Group info={group} delete={deleteGroup} key={group.id} />
            ))}
          </ul>
          <form action="submit" onSubmit={handleSubmit}>
            <div>
              <h4>CREATE A GROUP :</h4>
              <input
                value={newGroupName}
                type="text"
                placeholder="Enter the name of your group"
                onChange={(e) => setNewGroupName(e.target.value)}
              />
              <input
                value={newSubject}
                type="text"
                placeholder="Enter the subject of your group"
                onChange={(e) => setNewSubject(e.target.value)}
              />
              <button type="submit">Add New Group</button>
            </div>
          </form>
        </div>
      </div>
    );
  };
  
  export default Groups;
  