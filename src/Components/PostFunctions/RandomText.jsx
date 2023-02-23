import React,{useState} from 'react';
import "./RandomText.css";
import PostPopUp from '../Home/PostPopUp';

function RandomText() {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const messageTextElement = document.querySelector('.messageText');

    const randomIndex = Math.floor(Math.random() * (messageTextElement.textContent.length + 1));
    const newTextContent = messageTextElement.textContent.slice(0, randomIndex) + message + messageTextElement.textContent.slice(randomIndex);
    messageTextElement.textContent = newTextContent;
    console.log(newTextContent);
    setMessage('');
  };
  
  return (
   
     
        <div className='chatBox'>
          <div className='chatBoxWrapper'>
          <div className='chatBoxTop'>
          <div className="message">
              <div className="messageTop">
                <div className="messageText">Hello this message </div>
              </div>
            </div>
        </div>
        <div class="fixed-bottom   mb-3   postbar ">
            {/*  mx-sm-3  m-3 ms-5  d-flex */}
             <form className='chatBoxBottom ' onSubmit={handleSubmit}>
                <img src="https://github.com/mdo.png" alt="hugenerd" width="30" height="30" class="rounded-circle ms-5"/>
                <input  class="form-control   m-2 ms-2 chatMessageInput " 
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Post here"/>
                <div class="col-4 ">
                    <PostPopUp/>
                </div>
            
                
            </form>
        </div>
        
        {/* <div class=" row fixed-bottom form-group mx-sm-3  m-3 ms-5  d-flex justify-content-end ">
                        <div class="col-8 post-holder ">
                        <input  class="form-control form-control-sm m-2 ms-5"  placeholder="Post here"/>
                        </div>
                        
                    </div> */}
      </div>
      </div>
      
 
  );
}

export default RandomText;