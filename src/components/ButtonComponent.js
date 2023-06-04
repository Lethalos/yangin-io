import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ButtonComponent = ({ logo, path, title }) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(path);
  };
  const buttonStyle = {
    borderWidth: '2px',
    borderStyle: 'solid',
    borderRadius: '10px',
    borderColor: isHovered ? '#FFC107' : '#FF5733',
    padding: '10px',
    backgroundColor: 'white',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: isHovered ? '4px 6px 10px rgba(240,127,19)' : 'none',
    transition: 'background-image 0.3s ease, box-shadow 0.3s ease',
    margin: '10px',
    width: '50%',
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <button
      style={buttonStyle}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        src={require(`../../images/${logo}`)}
        alt="Logo"
        style={{ marginRight: '5px', width: '40px', height: '40px', left: '0px', top: '0px', position: 'relative' }}
      />
      <span style={{ fontWeight: 'bold' }}>{title}</span>
    </button>
  );
};

export default ButtonComponent;
