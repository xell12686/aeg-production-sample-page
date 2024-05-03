import React from "react";
import Image from "next/image";
import Link from "next/link";
import "./PostPreview.css";

interface PostPreviewProps {
  imgsrc: string;
  imgsrcFull: string;
  title: string;
  excerpt: string;
  url: string;
}

const PostPreview: React.FC<PostPreviewProps> = ({
  imgsrc,
  title,
  excerpt,
  url,
}) => {
  return (
    <div className="post-preview mb-3 flex flex-col items-start">
      <div className="relative h-44 w-full border-b-4 border-primary lg:h-[280px]">
        <Image src={imgsrc} alt={title} fill objectFit="cover" />
      </div>
      <div className="post-text mt-5 flex flex-wrap gap-6">
        <h3 className="text-xl font-normal">{title}</h3>
        <p className="text-lg opacity-70">{excerpt}</p>
        <Link href={url} className="read-more">
          <span>Read more</span>
        </Link>
      </div>
    </div>
  );
};

export default PostPreview;
