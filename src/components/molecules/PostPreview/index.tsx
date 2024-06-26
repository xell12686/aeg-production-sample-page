import React from "react";
import Image from "next/image";
import Link from "next/link";
import "./PostPreview.css";
import Button from "@/components/atoms/Button";

interface PostPreviewProps {
  imgsrc: string;
  imgsrcFull: string;
  title: string;
  excerpt: string;
  url: string;
}

const PostPreview: React.FC<PostPreviewProps> = ({
  imgsrc,
  imgsrcFull,
  title,
  excerpt,
  url,
}) => {
  return (
    <div className="post-preview mb-3 flex flex-col items-start">
      <div className="relative h-44 w-full border-b-4 border-primary lg:h-[280px]">
        <Image
          src={imgsrcFull}
          alt={title}
          fill
          objectFit="cover"
          sizes="(max-width: 640) 100vw, 33vw"
        />
      </div>
      <div className="post-text mt-5 flex flex-wrap gap-6">
        <h3 className="text-xl font-normal">{title}</h3>
        <p className="text-lg opacity-70">{excerpt}</p>
        <Button href={url} className="read-more" label="Read More" />
      </div>
    </div>
  );
};

export default PostPreview;
