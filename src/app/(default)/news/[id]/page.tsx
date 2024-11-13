import WarperContainer from "@/components/shared/container/page";
import { NewsProps } from "@/lib/interfaces";
import Image from "next/image";
import React from "react";

export const revalidate = 60;
export const dynamicParams = true;

const SingleNewsPage = async ({ params }: { params: { id: string } }) => {
  try {
    const response = await fetch(
      `https://news-api-next-js-kappa.vercel.app/api/news/${params.id}`
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch news with ID: ${params.id}`);
    }

    const post: NewsProps = await response.json();

    // console.log(post);

    return (
      <WarperContainer>
        <div className="mt-20 md:mt-24 xl:mt-28 py-6 xl:py-12 md:py-10 sm:py-8">
          <article className="max-w-4xl mx-auto shadow-md border rounded-lg p-6">
            {post?.imageUrl && (
              <div className="">
                <Image
                  src={post.imageUrl}
                  alt={post.title}
                  height={450}
                  width={800}
                  objectFit="cover"
                  objectPosition="center"
                  className="rounded-md"
                />
              </div>
            )}

            <div className="my-5">
              <h2>{post?.title}</h2>
            </div>
          </article>
        </div>
      </WarperContainer>
    );
  } catch (error) {
    console.error("Error fetching news:", error);
    return <div>Error loading news article.</div>;
  }
};

export default SingleNewsPage;
