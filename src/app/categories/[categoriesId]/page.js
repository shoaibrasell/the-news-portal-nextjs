import { getCategoryNews } from "@/utils/getCategoryNews";
import React from "react";

const DynamicNewsPage = async ({ params, searchParams }) => {
  // console.log(searchParams);
  const { data } = await getCategoryNews(searchParams.category);
  // console.log(data)

  return (
    <div className="my-5">
      <h1>
        Total <span className="font-bold">{searchParams.category}</span> news:{" "}
        {data.length}{" "}
      </h1>
    </div>
  );
};

export default DynamicNewsPage;
