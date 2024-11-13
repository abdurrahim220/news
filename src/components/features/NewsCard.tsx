import React from "react";

import { NewsProps } from "@/lib/interfaces";

interface NewsCardProps {
  item: NewsProps;
}

const NewsCard = ({ item }: NewsCardProps) => {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>{item.description}</CardTitle>
      </CardHeader>
    </Card>
  );
};

export default NewsCard;
