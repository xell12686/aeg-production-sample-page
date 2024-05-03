import PostPreview from "@/components/molecules/PostPreview";
import React from "react";

interface Post {
  imgsrc: string;
  imgsrcFull: string;
  title: string;
  excerpt: string;
  url: string;
}

interface FeaturedPostsProps {
  title: string;
  posts: Post[];
}

const FeaturedPosts: React.FC<FeaturedPostsProps> = ({ title, posts }) => {
  return (
    <section className="font-light">
      <h2 className="mb-10 text-center text-2xl font-light uppercase tracking-wide md:text-4xl lg:mb-14">
        {title}
      </h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post, index) => (
          <PostPreview key={index} {...post} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedPosts;
