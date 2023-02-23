import {useEffect, useRef} from 'react'

const Modal = ({ active, onRequestClose, children }) => {
  const overlayStyles = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    display: active ? 'flex' : 'none',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 999,
  };

  const modalStyles = {
    position: 'relative',
    backgroundColor: '#fff',
    padding: '0px',
    borderRadius: '5px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.25)',
  };

  const canvasRef = useRef(null);

  useEffect(() => {
    if (active) {
      window.addEventListener('resize', handleResize);
      handleResize();
    } else {
      window.removeEventListener('resize', handleResize);
    }

    return () => window.removeEventListener('resize', handleResize);
  }, [active]);

  const handleResize = () => {
    const canvas = canvasRef.current;
    if (canvas) {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    }
  };

  return (
    <div style={overlayStyles} onClick={onRequestClose}>
      <div style={modalStyles} onClick={(e) => e.stopPropagation()}>
        {children}
        <canvas ref={canvasRef} width="97%" height="100%" />
      </div>
    </div>
  );
};
export default Modal
