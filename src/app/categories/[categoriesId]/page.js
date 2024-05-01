import { getCategoryNews } from "@/utils/getCategoryNews";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const DynamicNewsPage = async ({ searchParams }) => {
  const { data } = await getCategoryNews(searchParams.category);

  return (
    <div className="my-5">
      <h1>
        Total <span className="font-bold">{searchParams.category}</span> news:{" "}
        {data.length}
      </h1>
      <Grid
        className="mt-6"
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        {data.map((news) => (
          <Grid key={news.id} item xs={6}>
            <Link href={`/${news.category.toLowerCase()}/${news._id}`}>
              <Card>
                <CardActionArea>
                  <CardMedia
                    sx={{
                      "& img": {
                        width: "100%",
                        height: "280px",
                      },
                    }}
                  >
                    <Image
                      src={news.thumbnail_url}
                      width={800}
                      height={100}
                      alt="News Logo"
                    ></Image>
                  </CardMedia>
                  <CardContent>
                    <span
                      className="
                    bg-emerald-500
                    py-1
                    text-white
                    text-center
                    my-5
                    rounded
                    "
                    >
                      {news.category}
                    </span>
                    <Typography gutterBottom variant="h6">
                      {news.title.length > 25
                        ? news.title.slice(0, 25) + "..."
                        : news.title}
                    </Typography>
                    <Typography className="my-2">
                      By {news.author.name} -- {news.author.published_date}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {news.details.length > 200
                        ? news.details.slice(0, 200) + "..."
                        : news.details}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default DynamicNewsPage;
