import { useState } from "react";
import imagePlayer1 from '../images/image-icons/13.svg'
import imagePlayer2 from '../images/image-icons/player (1).png'

const ImageToggle = () => {
  const [image, setImage] = useState(imagePlayer1);

  const handleClick = () => {
    setImage(img => (img === imagePlayer1 ? imagePlayer2 : imagePlayer1));
  };

  return (
    <img 
      src={image} 
      alt="Toggle" 
      onClick={handleClick} 
      style={{ cursor: "pointer", width: "100px" }}
    />
  );
};

export default ImageToggle;