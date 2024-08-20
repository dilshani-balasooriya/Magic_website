import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const buttonsRef = useRef([]);
  const navigate = useNavigate();

  useEffect(() => {
    buttonsRef.current.forEach((button, index) => {
      gsap.fromTo(button,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 1, delay: index * 0.2, ease: 'bounce.out' }
      );
    });
  }, []);

  const handleButtonClick = (path) => {
    navigate(path);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: '#301934' }}>
      <Toolbar>
   
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="h6" component="div">
            Logo
          </Typography>
        </Box>

      
        <Box sx={{ display: 'flex', justifyContent: 'center', flexGrow: 8, gap: 3 }}>
          {['Home','Magic Ball', 'Magic Spell', 'Magic Wand', 'Contact'].map((text, index) => (
            <Button
              key={text}
              color="inherit"
              ref={el => buttonsRef.current[index] = el}
              onClick={() => handleButtonClick(getPath(text))}
            >
              {text}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
const getPath = (text) => {
  switch (text) {
    case 'Magic Ball':
      return '/magicball';
    case 'Magic Spell':
      return '/magicspell'; 
    case 'Magic Wand':
      return '/magicwand'; 
    case 'Contact':
      return '/contact'; 
    default:
      return '/';
  }
};

export default Navbar;
