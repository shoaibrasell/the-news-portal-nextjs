import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import Image from 'next/image';
import headingImage from "@/assets/The Dragon News.png"
import DateDisplay from '@/utils/getCurrentDate';


const Header = () => {
  const currentDate = DateDisplay();
  return (
    <Box className="w-full">
      <Container>
        <Image src={headingImage}  alt='Header Logo' className='mx-auto'></Image>
        <Typography variant='body2' color='gray' textAlign='center'>
          Journalism Without Fear or Favour
        </Typography>
        <Typography variant='body2' color='gray' textAlign='center'>
          {currentDate}
        </Typography>
      </Container>
    </Box>
  );
};

export default Header;