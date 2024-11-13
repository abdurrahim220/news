"use client";
import { NewsProps } from "@/lib/interfaces";
import React, { useEffect, useState } from "react";
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
import WarperContainer from "@/components/shared/container/page";
import { fetchNews } from "@/lib/fetchNews";
import SearchBar from "@/components/pages/news/SearchBar";
import CategoryFilter from "@/components/pages/news/CategoryFilter";

export default function News() {
  const [news, setNews] = useState<NewsProps[]>([]);
  const [category, setCategory] = useState<string>("");
  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    const getNews = async () => {
      const data = await fetchNews(category, search);
      setNews(data);
    };
    getNews();
  }, [category, search]);

  return (
    <WarperContainer>
      <section className="mt-20">
        {/* search bar and filter */}
        <div className="my-5 grid gap-4 md:flex md:gap-6 items-center justify-between">
          <SearchBar onSearch={setSearch} />
          <CategoryFilter selectCategory={setCategory} />
        </div>

        {/* news list */}
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
    </WarperContainer>
  );
}
