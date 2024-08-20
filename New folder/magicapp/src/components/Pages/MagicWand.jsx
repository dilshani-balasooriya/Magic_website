import React, { useState } from 'react';
import styled from '@emotion/styled';
import { animated, useSpring } from 'react-spring';
import bottle1 from '../img/bottle1.jpg';
import bottle2 from '../img/bottle2.jpg';
import bottle3 from '../img/bottle3.jpg';
import bottle4 from '../img/bottle4.jpg';
import bottle5 from '../img/bottle5.jpg';

const MagicWandContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 100vh;
  position: relative;
  overflow: hidden; /* Ensure the animation doesn't overflow */
  padding: 0 20px;

  background: linear-gradient(135deg, #1f1c2c, #2c3e50); /* Gradient background */
  background-size: 400% 400%;
  animation: gradientShift 15s ease infinite;
  
  @keyframes gradientShift {
    0% { background-position: 0% 0%; }
    50% { background-position: 100% 100%; }
    100% { background-position: 0% 0%; }
  }
`;


const ShimmerEffect = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
  background: linear-gradient(
    60deg,
    rgba(255, 255, 255, 0.15) 25%,
    rgba(255, 255, 255, 0.25) 50%,
    rgba(255, 255, 255, 0.15) 75%
  );
  background-size: 1000px 1000px;
  animation: shimmer 2s infinite linear;

  @keyframes shimmer {
    0% { background-position: -1000px 0; }
    100% { background-position: 1000px 0; }
  }
`;

const SpellContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80%;
  max-width: 1200px;
  position: relative;
  z-index: 2; /* Ensure content is above background */
`;

const Heading = styled.h1`
  font-size: 48px;
  color: #fff;
  text-shadow: 3px 3px 6px #000;
  margin-bottom: 30px;
`;

const BottleContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100%;
  margin-bottom: 30px;
`;

const BottleImage = styled(animated.img)`
  width: 120px;
  height: 240px;
  cursor: pointer;
  box-shadow: 0 0 15px #fff;
  border-radius: 15px;
  margin: 10px;
`;

const SpellBox = styled(animated.div)`
  width: 350px;
  height: 120px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 0 15px #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-top: 20px;
  font-size: 20px;
`;

const spells = [
  "Abracadabra! A surprise is on its way.",
  "Hocus Pocus! Expect a pleasant change.",
  "Alakazam! Magic is in the air.",
  "Presto! Something wonderful will happen soon.",
  "Shazam! Your wishes are being fulfilled."
];

const MagicWand = () => {
  const [spell, setSpell] = useState('');
  const [animate, setAnimate] = useState(false);

  const handleClick = () => {
    setAnimate(true);
    setSpell(spells[Math.floor(Math.random() * spells.length)]);
  };

  const bottleSpring = useSpring({
    transform: animate ? 'scale(1.1)' : 'scale(1)',
    config: { tension: 200, friction: 10 },
    onRest: () => setAnimate(false),
  });

  const spellSpring = useSpring({
    opacity: spell ? 1 : 0,
    transform: spell ? 'translateY(0px)' : 'translateY(20px)',
    config: { tension: 180, friction: 12 },
  });

  return (
    <MagicWandContainer>
      <ShimmerEffect />
      <SpellContainer>
        <Heading>Cast a Spell</Heading>
        <BottleContainer>
          <BottleImage
            src={bottle1}
            style={bottleSpring}
            onClick={handleClick}
            alt="Bottle 1"
          />
          <BottleImage
            src={bottle2}
            style={bottleSpring}
            onClick={handleClick}
            alt="Bottle 2"
          />
          <BottleImage
            src={bottle3}
            style={bottleSpring}
            onClick={handleClick}
            alt="Bottle 3"
          />
          <BottleImage
            src={bottle4}
            style={bottleSpring}
            onClick={handleClick}
            alt="Bottle 4"
          />
          <BottleImage
            src={bottle5}
            style={bottleSpring}
            onClick={handleClick}
            alt="Bottle 5"
          />
        </BottleContainer>
        <SpellBox style={spellSpring}>{spell}</SpellBox>
      </SpellContainer>
    </MagicWandContainer>
  );
};

export default MagicWand;
