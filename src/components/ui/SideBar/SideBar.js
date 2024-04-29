import { Box, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';
import Image from 'next/image';
import sideBarImage from '@/assets/side-top-news.png'

const SideBar = () => {
  return (
    <Box className='my-5'>
      <Grid>
          <Card className="my-5">
            <CardActionArea>
              <CardMedia>
                <Image src={sideBarImage} width={800} alt="Top News Logo"></Image>
              </CardMedia>
              <CardContent>
                <p
                  className="w-[110px]
            bg-red-500
            py-1
            text-white
            text-center
            my-4
            rounded
            "
                >
                  Technology
                </p>
                <Typography gutterBottom>
                  Bitcoin Climbs as Elon Musk Says Tesla Likely to aAccept it
                  Again
                </Typography>
                <Typography className="my-2">
                  By SHoaib Ullah Rasel --- April 29 2024
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          
        </Grid>
    </Box>
  );
};

export default SideBar;