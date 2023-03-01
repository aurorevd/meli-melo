import '../Home/Style.css'; // corrected import statement
import "./RandomText.css";
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';



import React,{useState, useEffect} from 'react';

function RandomText({ shuffle }) {
  
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const shuffleArray = (array) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    setMessages(shuffledArray);
  };
  
  
  useEffect(() => {
    if (shuffle) {
      shuffleArray(messages); // changed shuffle to shuffleArray
    }
  }, [shuffle, messages]); // added messages as a dependency to prevent infinite loop

  useEffect(() => {
    getTexts();
  }, []);

  const getTexts = async () => {
    try {
      const response = await axios.get('/homepage', {
        headers: {
          'ngrok-skip-browser-warning': '69420',
        },
      });
      const dat = response.data.info;
      console.log(dat);
      const newMessages = dat.map((text) => {
        const words = text.content.split(' ');
        const randomIndex = Math.floor(Math.random() * (words.length - 1));
        const content1 = words.slice(0, randomIndex).join(' ');
        const content2 = words.slice(randomIndex).join(' ');
        const font_family = text.font_family;
        const id1 = uuidv4();
        const id2 = uuidv4();
        return { id1, content1, font_family, id2, content2 };
      });
      shuffleArray(newMessages); // changed shuffle to shuffleArray
      setMessages(newMessages);
    } 
    catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const words = message.split(' ');
    const font_family = `random-class-${Math.floor(Math.random() * 6)}`;
    const randomIndex = Math.floor(Math.random() * (words.length - 1));
    const content1 = words.slice(0, randomIndex).join(' ');
    const content2 = words.slice(randomIndex).join(' ');
    const textToAdd = { content: message, font_family };
    const textToSplit = { content1, content2, font_family };
    
    axios
      .post('/homepage/post', textToAdd)
      .then((response) => {
        console.log('text added');
      })
      .catch((error) => {
        console.log(error);
      });
    setMessages((prevMessages) => [...prevMessages, textToSplit]);
    setMessage('');
  };


  // Shuffle array using Fisher-Yates algorithm
  
  return (
  <div class="random">
    <span class="">"</span>
      {messages.map((msg) => (
        <span className={msg.font_family}>
          {" "}{msg.content1}{" "}
        </span>
      ))}
      {messages.map((msg) => ( 
        <span className={msg.font_family}>
          {" "}{msg.content2}{" "}
        </span>      ))}
        <span class="">"</span>
      
    <div class="fixed-bottom mb-5 postbar w-100 flex ">
      <form  onSubmit={handleSubmit} class="flex w-100">
        <input  class="form-control w-50 chatMessageInput " 
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Post here"/>
           
      </form>
    </div>
  </div>
  );
}

export default RandomText;