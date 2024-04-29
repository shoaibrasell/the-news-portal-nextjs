import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import Image from "next/image";
import topNews from "@/assets/top-news.png";
import topNews2 from "@/assets/top-news2.png";

const LatesNews = () => {
  return (
    <Box>
      <Card className="my-5">
        <CardActionArea>
          <CardMedia>
            <Image src={topNews} alt="Top News Logo"></Image>
          </CardMedia>
          <CardContent>
            <p
              className="w-[110px]
            bg-emerald-500
            py-1
            text-white
            text-center
            my-4
            rounded
            "
            >
              Technology
            </p>
            <Typography gutterBottom variant="h5" component="div">
              Bitcoin Climbs as Elon Musk Says Tesla Likely to aAccept it Again
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
      <Grid
        className="mt-6"
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        <Grid item xs={6}>
          <Card className="my-5">
            <CardActionArea>
              <CardMedia>
                <Image src={topNews2} alt="Top News Logo"></Image>
              </CardMedia>
              <CardContent>
                <p
                  className="w-[110px]
            bg-emerald-500
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
        <Grid item xs={6}>
          <Card className="my-5">
            <CardActionArea>
              <CardMedia>
                <Image src={topNews2} alt="Top News Logo"></Image>
              </CardMedia>
              <CardContent>
                <p
                  className="w-[110px]
            bg-emerald-500
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
        </Grid>{" "}
        <Grid item xs={6}>
          <Card className="my-5">
            <CardActionArea>
              <CardMedia>
                <Image src={topNews2} alt="Top News Logo"></Image>
              </CardMedia>
              <CardContent>
                <p
                  className="w-[110px]
            bg-emerald-500
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
        </Grid>{" "}
        <Grid item xs={6}>
          <Card className="my-5">
            <CardActionArea>
              <CardMedia>
                <Image src={topNews2} alt="Top News Logo"></Image>
              </CardMedia>
              <CardContent>
                <p
                  className="w-[110px]
            bg-emerald-500
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
      </Grid>
    </Box>
  );
};

export default LatesNews;
