import Image from "next/image";
import React from "react";

export interface ImagesGridProps {
  images: { src: string; alt: string }[];
}

const ImagesGrid: React.FC<ImagesGridProps> = ({ images }) => {
  if (images.length > 3) {
    images = images.slice(0, 3);
  }

  return (
    <div className="relative flex h-[500px] w-full gap-5">
      <div className="flex h-full w-1/2 flex-col">
        {images[0] && (
          <div className="relative h-full w-full">
            <Image
              src={images[0].src}
              alt={images[0].alt}
              fill
              objectFit="cover"
              objectPosition="center top"
            />
          </div>
        )}
      </div>
      <div className="flex h-full w-1/2 flex-col gap-5">
        {images[1] && (
          <div className="relative h-1/2 w-full">
            <Image
              src={images[1].src}
              alt={images[1].alt}
              fill
              objectFit="cover"
              objectPosition="center top"
            />
          </div>
        )}
        {images[2] && (
          <div className="relative h-1/2 w-full">
            <Image
              src={images[2].src}
              alt={images[2].alt}
              fill
              objectFit="cover"
              objectPosition="center top"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ImagesGrid;
