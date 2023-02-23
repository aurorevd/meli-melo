
import LeftBar from "./LeftBar"
import NavBar from "./NavBar"
import "./Messenger.css";
import { v4 as uuidv4 } from 'uuid';
import axios from "axios";
import React,{useState, useEffect} from 'react';


  function HomePage() {
    const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    getTexts();
    }, [])
  
    const getTexts = async () => {
      try {
        const response = await axios.get("texts" , {
          headers: {
            "ngrok-skip-browser-warning": "69420"
          }
        });
        console.log (response)
        const dat = response.data.data
        const newMessages = dat.map(text => {
          const content = text.content;
          const color = text.color;
          const font= text.date;
          const id = text.id;
          return { id, content, color, font};
        });
        setMessages(newMessages)
      }
      catch (error) {
        console.log(error);
      }
    }
    const handleSubmit = async (e) => {
    
      e.preventDefault();
     
      const id = uuidv4();
      const content = message
      const font = `random-class-${Math.floor(Math.random() * 3)}`
      const textToAdd={ id, content, font}
      setMessages([...messages, textToAdd]);
      setMessage('');
      axios.post('add', textToAdd)
        .then(response => {
          console.log("text added")
        })
        .catch(error => {
          console.log(error);
        });
        
      };
    
  return (
    <div>
      <div className="relative">
      <NavBar/>
      <LeftBar/>
      <div className='messenger'>
          <div className='chatBoxWrapper'>
          <div className='chatBoxTop'>
          <div className="message">
              <div className="messageTop">
                <div className="messageText">Hello this message{messages.map((msg, index) => (
               <div  key={index}>{msg}</div>
                 ))}</div>
              </div>
            </div>
        </div>
        <form className='chatBoxBottom' onSubmit={handleSubmit}>
          <input
            type="text"
            className='chatMessageInput'
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button className='chatSubmitButton'>Submit</button>
        </form>
      </div>
    </div>



    </div>
    </div>
  )
}

export default HomePage;
