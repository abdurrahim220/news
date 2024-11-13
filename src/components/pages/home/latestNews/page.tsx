import { NewsProps } from "@/lib/interfaces";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export default async function LatestNews() {
  const response = await fetch(
    `https://news-api-next-js-kappa.vercel.app/api/news`
  );
  const news = await response.json();
  return (
    <section className="mt-10">
      <div className="my-4 flex items-center justify-between">
        <h2 className="text-2xl font-bold">Latest News</h2>
        <Link href={"/news"}>
          <Button>See All News</Button>
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {news.slice(0, 4).map((newsItem: NewsProps) => (
          <Card key={newsItem._id}>
            <CardHeader>
              <Image
                src={newsItem?.imageUrl}
                width={500}
                height={500}
                className="rounded-md"
                alt={newsItem?.title}
              />
            </CardHeader>
            <CardContent>
              <CardTitle>{newsItem.title.substring(0, 60)}...</CardTitle>
              <CardDescription>
                {newsItem?.description.substring(0, 85)}...
              </CardDescription>
            </CardContent>
            <CardFooter>
              <Link href={`/news/${newsItem._id}`}>
                <Button>Read More</Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
