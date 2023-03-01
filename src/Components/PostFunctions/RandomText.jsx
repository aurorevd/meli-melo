import "../Home/Style.css";
import "./RandomText.css";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

import React, { useState, useEffect, useCallback } from "react";

function RandomText({ shuffle }) {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [rotate, setRotate] = useState(false);

  const shuffleArray = useCallback((array) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    setMessages(shuffledArray);
  }, []);

  useEffect(() => {
    if (shuffle && messages.length > 0) {
      shuffleArray(messages);
    }
  }, [shuffle, messages, shuffleArray]);

  useEffect(() => {
    const getTexts = async () => {
      try {
        const response = await axios.get("/homepage", {
          headers: {
            "ngrok-skip-browser-warning": "69420",
          },
        });
        const dat = response.data.info;
        const newMessages = dat.map((text) => {
          const words = text.content.split(" ");
          const randomIndex = Math.floor(Math.random() * (words.length + 1));
          const content1 = words.slice(0, randomIndex).join(" ");
          const content2 = words.slice(randomIndex).join(" ");
          const font_family = text.font_family;
          const id1 = uuidv4();
          const id2 = uuidv4();
          return { id1, content1, font_family, id2, content2 };
        }).filter((msg) => msg.content1 && msg.content2); // Filter out empty messages
        if (shuffle) {
          shuffleArray(newMessages);
        } else {
          setMessages(newMessages);
        }
        setRotate(true); // start rotation animation
      } catch (error) {
        console.log(error);
      }
    };
    getTexts();
  }, [shuffle, shuffleArray]);


  const handleSubmit = async (e) => {
    e.preventDefault();
    const words = message.split(" ");
    const font_family = `random-class-${Math.floor(Math.random() * 6)}`;
    const randomIndex = Math.floor(Math.random() * (words.length - 1));
    const content1 = words.slice(0, randomIndex).join(" ");
    const content2 = words.slice(randomIndex).join(" ");
    const textToAdd = { content: message, font_family };
    const textToSplit = { content1, content2, font_family };

    try {
      const response = await axios.post("/homepage/post", textToAdd);
      console.log(response);
      setMessages((prevMessages) => [...prevMessages, textToSplit]);
      setMessage("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="random">
      <div className={`message-container${rotate ? " rotate" : ""}`}>
        {messages.map((msg) => (
          <span className={msg.font_family} key={msg.id1}>
            {msg.content1}{" "}
          </span>
        ))}
      {messages.map((msg) => (
        <span className={msg.font_family} key={msg.id2}>
          {" "}
          {msg.content2}{" "}
        </span>
      ))}
      </div>
      
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