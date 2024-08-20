import React from 'react';
import { Box, Typography, Link, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

function Footer() {
  return (
    <Box
      component={motion.footer}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: 'easeInOut' }}
      sx={{
        backgroundColor: 'black',
        color: 'white',
        p: 3,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        borderTop: '1px solid rgba(255,255,255,0.3)',
      }}
    >
      <Typography variant="h6" gutterBottom>
        Follow Us
      </Typography>
      <Box sx={{ mb: 2 }}>
        <IconButton
          color="inherit"
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FacebookIcon />
        </IconButton>
        <IconButton
          color="inherit"
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TwitterIcon />
        </IconButton>
        <IconButton
          color="inherit"
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <InstagramIcon />
        </IconButton>
      </Box>
      <Typography variant="body2" gutterBottom>
        © 2024 Magical Creations. All rights reserved.
      </Typography>
      <Typography variant="body2">
        <Link href="#" color="inherit">
          Privacy Policy
        </Link> |{' '}
        <Link href="#" color="inherit">
          Terms of Service
        </Link>
      </Typography>
    </Box>
  );
}

export default Footer;
