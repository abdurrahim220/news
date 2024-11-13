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
import { PaginationSection } from "@/components/features/Pagination";

export default async function News() {
  const response = await fetch(
    `https://news-api-next-js-kappa.vercel.app/api/news`
  );
  const news = await response.json();
  return (
    <section className="mt-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {news?.map((newsItem: NewsProps) => (
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
      <div className="mt-6 mb-2 flex items-center justify-center">
        <PaginationSection />
      </div>
    </section>
  );
}
