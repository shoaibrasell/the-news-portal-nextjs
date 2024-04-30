import { getAllCategories } from "@/utils/getAllCategories";
import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import React from "react";

const CategoryList = async () => {
  const { data: allCategories } = await getAllCategories();
  // console.log(allCategories);

  return (
    <Box>
      <Typography variant="h6">Categories</Typography>
      <Divider></Divider>
      <Stack >
        {allCategories.map((category) => {
          <Button variant="outlined" key={category.id}>
            {category.title}
          </Button>;
        })}
      </Stack>
    </Box>
  );
};

export default CategoryList;
