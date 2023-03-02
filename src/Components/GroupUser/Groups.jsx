import React, { useEffect, useState } from "react";
import Group from "./Group";
import axios from "axios";
const Groups = () => {
    const [groups, setGroups] = useState([]);

    const [newGroupName, setNewGroupName] = useState("")

    useEffect(() => {
        req();
    }, [])

    const req = async () => {
        try {
            const response = await axios.get("/api/groups", {
                headers: {
                    "ngrok-skip-browser-warning": "69420"
                    //https://e6eb-84-199-109-85.eu.ngrok.io/
                }
            });
            console.log(response)
            const dat = response.data.data
            const newGroups = dat.map(group => {
                const userName = group.user2_name
                const id = group.id;
                const profilePicture = group.profilePicture;
                return { userName, id, profilePicture };
            });
            setGroups(newGroups)
        }
        catch (error) {
            console.log(error);        }


        const handleSubmit = (event) => {
            event.preventDefault()
            const groupname = newGroupName
            const groupToAdd = { groupname }
            setGroups(prevGroups => [...prevGroups, groupToAdd])

            axios.post("/groups/creategroup", groupToAdd)
                .then(response => {
                    console.log("group added")
                })
                .catch(error => {
                    console.log(error);
                });
        }

        const deleteGroup = (id) => {
            axios.delete('/groups/delete/' + id)
                .then(response => {
                    console.log("group deleted")
                })
                .catch(error => {
                    console.log(error);
                });
            setGroups(prevGroups => prevGroups.filter((group) => group.id !== id))
        }

        return (
            <div class="bg-red w-100 h-100" > HELLO
                <div >
                    <ul >
                        {groups.map((group) => (<Group info={group} delete={deleteGroup} key={group.id} />))}
                    </ul>
                    <form action="submit" onSubmit={handleSubmit}>
                        <div >
                            <h4   >
                                CREATE A GROUP :
                            </h4>
                            <input
                                value={newGroupName}
                                type="text"
                                placeholder="Enter the username"
                                onChange={e => setNewGroupName(e.target.value)}
                            />
                            <button type="submit" >Add New Group</button>
                        </div>
                    </form>
                </div>



            </div>
        )
    }
}
export default Groups