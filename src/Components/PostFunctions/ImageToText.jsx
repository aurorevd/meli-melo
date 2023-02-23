
import React, { useState, useEffect, useMemo, useCallback } from 'react';
import Modal from '../Modal';
import AsciiArtSketch from '../AsciiArtSketch.jsx';
import { debounce } from 'lodash';

const ImageToText = () => {
  const [text, setText] = useState('');
  const [active, setActive] = useState(false);
  const [beta, setBeta] = useState(0);
  const [imageUrl, setImageUrl] = useState(null);

  const debouncedGenerateImage = useMemo(() => {
    return debounce(generateImage, 500);
  }, [text]);

  const handleOpenModal = useCallback(() => {
    setActive(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setActive(false);
  }, []);

  async function generateImage(text) {
    console.log('generateImage called with text:', text);
    try {
      const response = await fetch(`https://api.openai.com/v1/images/generations`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer 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',
        },
        body: JSON.stringify({
          prompt: text,
          model: 'image-alpha-001',
        }),
      });
      const data = await response.json();
      return data.data[0].url;
    } catch (error) {
      console.error('Error generating image:', error);
      return null;
    }
  };

  const handleSubmit = useCallback(async (event) => {
    event.preventDefault();
    const url = await debouncedGenerateImage(text);
    console.log('generated image URL:', url);
    setActive(true);
    setImageUrl(url);
  }, [text, debouncedGenerateImage]);



  return (
    <div className="relative">
    
      <form onSubmit={handleSubmit}>
        <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
        <button type="submit">Generate Image</button>
      </form>
      <Modal active={active} onRequestClose={handleCloseModal}>
         <AsciiArtSketch />
      </Modal>
    </div>
  );
};

export default ImageToText;
