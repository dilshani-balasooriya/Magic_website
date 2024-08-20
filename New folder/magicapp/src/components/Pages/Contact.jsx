import React from 'react';
import { useForm } from 'react-hook-form';
import { Container, TextField, Button, Typography, Box } from '@mui/material';
import { Email, Person, Message } from '@mui/icons-material';
import { motion } from 'framer-motion';

const ContactUs = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Handle form submission logic here (e.g., send data to a server)
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'linear-gradient(270deg, #00008B, #4B0082, #000000)',
        backgroundSize: '600% 600%',
        animation: 'GradientAnimation 16s ease infinite',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Container 
          maxWidth="md"  // Increase the maxWidth to 'md' for a wider form
          sx={{ 
            p: 5,       // Increase padding for more space around the form elements
            boxShadow: 3, 
            borderRadius: 2, 
            bgcolor: 'rgba(255, 255, 255, 0.85)' 
          }}
        >
          <Typography variant="h4" component="h1" align="center" gutterBottom>
            Contact Us
          </Typography>
          <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate autoComplete="off">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <TextField
                {...register('name', { required: 'Name is required' })}
                label="Name"
                variant="outlined"
                fullWidth
                margin="normal"
                InputProps={{
                  startAdornment: <Person sx={{ mr: 1 }} />,
                }}
                error={!!errors.name}
                helperText={errors.name?.message}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <TextField
                {...register('email', {
                  required: 'Email is required',
                  pattern: { value: /\S+@\S+\.\S+/, message: 'Invalid email address' },
                })}
                label="Email"
                variant="outlined"
                fullWidth
                margin="normal"
                InputProps={{
                  startAdornment: <Email sx={{ mr: 1 }} />,
                }}
                error={!!errors.email}
                helperText={errors.email?.message}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <TextField
                {...register('message', { required: 'Message is required' })}
                label="Message"
                variant="outlined"
                fullWidth
                margin="normal"
                multiline
                rows={4}
                InputProps={{
                  startAdornment: <Message sx={{ mr: 1 }} />,
                }}
                error={!!errors.message}
                helperText={errors.message?.message}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 3 }}>
                Submit
              </Button>
            </motion.div>
          </Box>
        </Container>
      </motion.div>
    </Box>
  );
};

export default ContactUs;


