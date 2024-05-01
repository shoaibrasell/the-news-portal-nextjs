import { getAllCategories } from "@/utils/getAllCategories";
import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import React from "react";

const CategoryList = async () => {
  const { data: allCategories } = await getAllCategories();

  return (
    <Box className="mt-5 bg-gray-100 px-2">
     <Typography variant="h6" textAlign={"center"}>Categories</Typography>
     <Divider/>
     <Stack rowGap={1} sx={{mt:2.5}}>
      {
        allCategories.map(category => (

          // Button input from material Ul

          <Button variant="outlined" color="primary" key={category.id}>
            {category.title}
          </Button>
        ))
      }
     </Stack>
    </Box>
  );
};

export default CategoryList;
