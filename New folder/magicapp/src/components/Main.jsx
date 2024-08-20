import React from 'react';
import { Container, Box, Typography, Button, Card, CardMedia, CardContent } from '@mui/material';
import { motion } from 'framer-motion';
import Slider from 'react-slick'; 
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css'; 
import image from '../components/img/img.jpg'; 
import video from '../components/img/v1.mp4'; 
import serviceImage1 from '../components/img/wand1.jpg'; 
import serviceImage2 from '../components/img/mgball.jpg';
import serviceImage3 from '../components/img/OIP.jpg';
import serviceImage4 from '../components/img/mgportion.jpg';
import serviceImage5 from '../components/img/magicman.jpg';
import serviceImage6 from '../components/img/magicman.jpg';

// Slider settings
const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true, 
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

function Main() {
  return (
    <Container maxWidth="false" disableGutters>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
        }}
      >
        {/* Background Image Section */}
        <motion.div
          animate={{ scale: [1, 1.05, 1], rotate: [0, 0.5, 0] }}
          transition={{ duration: 12, repeat: Infinity, repeatType: 'loop' }}
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '50vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, ease: 'easeOut' }}
            style={{
              textAlign: 'center',
              color: 'white',
              padding: '0 2rem',
              zIndex: 1,
              position: 'relative',
            }}
          >
            <Typography variant="h2" gutterBottom>
              Welcome to the World of Magic
            </Typography>
          </motion.div>
        </motion.div>

        {/* Video and About Us Section */}
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            p: 3,
            background: 'linear-gradient(135deg, rgba(10,10,20,1) 30%, rgba(20,30,50,1) 40%, rgba(30,20,40,1) 50%)',
          }}
        >
          {/* Video Section */}
          <motion.div
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, ease: 'easeOut' }}
  style={{
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    p: 2,
    overflow: 'hidden',
    position: 'relative',
  }}
>
  <Box
    sx={{
      width: '80%',
      height: 'auto',
      maxWidth: '100%',
      maxHeight: '75%',
      borderRadius: 1,
      boxShadow: 3,
      objectFit: 'cover',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      '&:hover': {
        transform: 'scale(1.03)',
        boxShadow: '0 6px 12px rgba(0,0,0,0.3)',
      },
    }}
  >
    <video
      autoPlay
      loop
      muted
      style={{
        width: '100%',
        height: '100%',
        borderRadius: 'inherit',
        objectFit: 'cover',
      }}
    >
      <source src={video} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </Box>
</motion.div>


          {/* About Us Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              p: 2,
              color: 'white',
              position: 'relative',
              zIndex: 1,
            }}
          >
            <Typography variant="h4" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body1" paragraph>
              Welcome to our magical world! We are a team of passionate creators dedicated to bringing joy and wonder into your life. Our mission is to craft enchanting experiences that captivate the imagination and inspire awe.
            </Typography>
            <Typography variant="body1" paragraph>
              Founded in 2021, we started with a vision to blend art and technology to create memorable moments. Our talented team works tirelessly to ensure every detail is perfect, making magic happen in every project we undertake.
            </Typography>
            <Typography variant="body1" paragraph>
              From interactive experiences to stunning visual displays, we are committed to delivering high-quality, innovative solutions that stand out. Join us as we continue to explore new horizons and bring a touch of magic to the world.
            </Typography>
            <Button variant="contained" color="primary" sx={{ mt: 2 }}>
              Learn More
            </Button>
          </motion.div>
        </Box>

        {/* Services Section */}
        <Box
          sx={{
            p: 3,
            backgroundColor: 'black',
          }}
        >
          <Typography variant="h4" color="white" gutterBottom align="center">
            Our Services
          </Typography>
          <Slider {...sliderSettings}>
            {[{
              title: 'Magic Wand',
              description: 'Discover the magic of our interactive wands, designed to dazzle and entertain.',
              img: serviceImage1
            }, {
              title: 'Magic Ball',
              description: 'Explore our enchanted magic balls that reveal wonders with a touch.',
              img: serviceImage2
            }, {
              title: 'Magic Spell',
              description: 'Unveil the secrets of our spell casting kits and bring enchantments to life.',
              img: serviceImage3
            }, {
              title: 'Magic Potion',
              description: 'Experience the thrill of our magical potions, crafted to mesmerize and delight.',
              img: serviceImage4
            }, {
              title: 'Magic Show',
              description: 'Enjoy a mesmerizing magic show that combines wonder with spectacular performance.',
              img: serviceImage5
            }, {
              title: 'Magic Classes',
              description: 'Learn the art of magic with our expert-led classes, perfect for aspiring magicians.',
              img: serviceImage6
            }].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                style={{ padding: '0 10px' }}
              >
                <Card
                  sx={{
                    maxWidth: 345,
                    backgroundColor: 'rgba(255,255,255,0.1)',
                    color: 'white',
                    mb: 2,
                    boxShadow: 3,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    '&:hover': {
                      transform: 'scale(1.05)',
                      boxShadow: '0 8px 16px rgba(0,0,0,0.3)',
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    height="140"
                    image={service.img}
                    alt={service.title}
                    sx={{ transition: 'opacity 0.3s ease', '&:hover': { opacity: 0.8 } }}
                  />
                  <CardContent
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      textAlign: 'center',
                      color: 'white',
                    }}
                  >
                    <Typography gutterBottom variant="h5" component="div">
                      {service.title}
                    </Typography>
                    <Typography variant="body2" color="white"> 
                      {service.description}
                    </Typography>
                    <Button 
                      variant="contained" 
                      sx={{ 
                        mt: 2, 
                        backgroundColor: 'gold', 
                        color: 'black', 
                        '&:hover': {
                          backgroundColor: 'darkgoldenrod', 
                        }
                      }}
                    >
                      Explore
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </Slider>
        </Box>
      </Box>
    </Container>
  );
}

export default Main;
