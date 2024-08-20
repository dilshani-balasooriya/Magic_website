import React, { useState } from 'react';
import styled from '@emotion/styled';
import { animated, useSpring } from 'react-spring';
import magicWand from '../img/witch.jpg'; 

const MagicSpellContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(135deg, #3a1c1c, #6b1c1c); /* Gradient background */
  background-size: 400% 400%;
  animation: gradientShift 20s ease infinite;
  position: relative;
  overflow: hidden;

  @keyframes gradientShift {
    0% { background-position: 0% 0%; }
    50% { background-position: 100% 100%; }
    100% { background-position: 0% 0%; }
  }
`;

const SpellBox = styled(animated.div)`
  width: 400px;
  height: 150px;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 15px;
  padding: 20px;
  box-shadow: 0 0 15px #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  color: #333;
  margin-bottom: 30px;
  position: relative;
`;

const Button = styled.button`
  background: #fff;
  color: #333;
  border: none;
  padding: 10px 20px;
  font-size: 18px;
  cursor: pointer;
  border-radius: 10px;
  box-shadow: 0 0 10px #fff;
  transition: background 0.3s, transform 0.3s;

  &:hover {
    background: #f8f8f8;
    transform: scale(1.05);
  }
  margin: 10px;
`;

const Heading = styled.h1`
  font-size: 48px;
  color: #fff;
  text-shadow: 3px 3px 6px #000;
  margin-bottom: 20px;
`;

const WandIcon = styled(animated.img)`
  width: 100px;
  height: auto;
  position: absolute;
  top: 20px;
  left: 20px;
  opacity: 0.8;
  animation: moveWand 10s ease-in-out infinite;

  @keyframes moveWand {
    0% { transform: translateX(0px) translateY(0px); }
    50% { transform: translateX(20px) translateY(10px); }
    100% { transform: translateX(0px) translateY(0px); }
  }
`;

const ExtraContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

const AdditionalButton = styled(Button)`
  background: #333;
  color: #fff;
  margin-top: 10px;

  &:hover {
    background: #444;
  }
`;

const BackgroundEffect = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.2) 20%, transparent 80%);
  opacity: 0.3;
  pointer-events: none;
  animation: backgroundPulse 10s ease-in-out infinite;
  
  @keyframes backgroundPulse {
    0% { opacity: 0.3; }
    50% { opacity: 0.5; }
    100% { opacity: 0.3; }
  }
`;

const spells = [
  "Abracadabra! A surprise is on its way.",
  "Hocus Pocus! Expect a pleasant change.",
  "Alakazam! Magic is in the air.",
  "Presto! Something wonderful will happen soon.",
  "Shazam! Your wishes are being fulfilled."
];

const MagicSpell = () => {
  const [spell, setSpell] = useState('');
  const [animate, setAnimate] = useState(false);

  const handleClick = () => {
    setAnimate(true);
    setSpell(spells[Math.floor(Math.random() * spells.length)]);
  };

  const handleReset = () => {
    setSpell('');
  };

  const handleGenerateMultiple = () => {
    const randomSpells = Array.from({ length: 3 }, () => spells[Math.floor(Math.random() * spells.length)]);
    setSpell(randomSpells.join(' | '));
  };

  const spellSpring = useSpring({
    opacity: spell ? 1 : 0,
    transform: spell ? 'translateY(0px)' : 'translateY(20px)',
    config: { tension: 180, friction: 12 },
  });

  return (
    <MagicSpellContainer>
      <WandIcon src={magicWand} alt="Magic Wand" />
      <Heading>Magic Spells</Heading>
      <SpellBox style={spellSpring}>{spell}</SpellBox>
      <Button onClick={handleClick}>Cast a Spell</Button>
      <ExtraContainer>
        <AdditionalButton onClick={handleReset}>Reset</AdditionalButton>
        <AdditionalButton onClick={handleGenerateMultiple}>Generate Multiple Spells</AdditionalButton>
      </ExtraContainer>
      <BackgroundEffect />
    </MagicSpellContainer>
  );
};

export default MagicSpell;
