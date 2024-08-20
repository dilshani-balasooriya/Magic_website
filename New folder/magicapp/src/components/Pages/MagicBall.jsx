import React, { useState } from 'react';
import styled from '@emotion/styled';
import { animated, useSpring, useTrail } from 'react-spring';
import crystalImage from '../img/crystal.jpg'; // Adjust the path based on your project structure

const CrystalBallContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #1a1a2e;
  position: relative;
  overflow: hidden;
  padding: 20px;
`;

const Heading = styled.h1`
  color: #fff;
  font-size: 36px;
  margin-bottom: 30px;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 2px;
`;

const CrystalBallImage = styled(animated.img)`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 0 0 20px #fff;
  margin-bottom: 30px;
`;

const FortuneBox = styled(animated.div)`
  padding: 20px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  box-shadow: 0 0 15px rgba(255, 255, 255, 0.5);
  text-align: center;
  color: #fff;
  width: 80%;
  max-width: 400px;
  line-height: 1.5;
  font-size: 20px;
  margin-top: 30px;
`;

const BackgroundOrbs = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  overflow: hidden;
  pointer-events: none;
`;

const Orb = styled(animated.div)`
  position: absolute;
  width: 20px;
  height: 20px;
  background-color: #fff;
  border-radius: 50%;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
`;

const SideElements = styled.div`
  position: absolute;
  top: 50%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  transform: translateY(-50%);
  pointer-events: none;
`;

const SideElement = styled(animated.div)`
  width: 50px;
  height: 50px;
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 50%;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
`;

const fortunes = [
  "You will find great success in your endeavors!",
  "An exciting opportunity awaits you.",
  "Someone special is thinking of you.",
  "A pleasant surprise is in store for you.",
  "Trust your intuition, it will lead you to greatness.",
  "Happiness is just around the corner.",
];

const CrystalBall = () => {
  const [fortune, setFortune] = useState('');
  const [animate, setAnimate] = useState(false);

  const handleClick = () => {
    setAnimate(true);
    setFortune(fortunes[Math.floor(Math.random() * fortunes.length)]);
  };

  const ballSpring = useSpring({
    transform: animate ? 'scale(1.1)' : 'scale(1)',
    boxShadow: animate ? '0 0 30px #fff' : '0 0 20px #fff',
    config: { tension: 200, friction: 10 },
    onRest: () => setAnimate(false),
  });

  const textSpring = useSpring({
    opacity: fortune ? 1 : 0,
    transform: fortune ? 'translateY(0px)' : 'translateY(20px)',
    config: { tension: 180, friction: 12 },
  });

  const orbTrail = useTrail(5, {
    from: { opacity: 0, transform: 'translateY(100vh)' },
    to: { opacity: 1, transform: 'translateY(-100vh)' },
    loop: { reverse: true },
    config: { tension: 150, friction: 50 },
  });

  const sideOrbs = useTrail(10, {
    from: { opacity: 0, transform: 'scale(0)' },
    to: { opacity: 1, transform: 'scale(1)' },
    config: { tension: 120, friction: 30 },
    loop: { reverse: true },
  });

  return (
    <CrystalBallContainer>
      <Heading>Your Fortune Awaits</Heading>
      <BackgroundOrbs>
        {orbTrail.map((props, index) => (
          <Orb key={index} style={{ ...props, left: `${index * 20}%` }} />
        ))}
      </BackgroundOrbs>
      <SideElements>
        {sideOrbs.map((props, index) => (
          <SideElement
            key={index}
            style={{
              ...props,
              left: `${index * 10 + 10}%`,
              right: `${index * 10 + 10}%`,
              transform: `translateY(${index % 2 === 0 ? '-100px' : '100px'})`,
            }}
          />
        ))}
      </SideElements>
      <CrystalBallImage
        style={ballSpring}
        src={crystalImage}
        alt="Crystal Ball"
        onClick={handleClick}
      />
      <FortuneBox style={textSpring}>{fortune}</FortuneBox>
    </CrystalBallContainer>
  );
};

export default CrystalBall;

