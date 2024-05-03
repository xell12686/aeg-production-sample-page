import Image from "next/image";
import React, { useState } from "react";
import Modal from "../Modal";

export interface ImagesGridProps {
  images: { src: string; alt: string; srcFull: string }[];
}

const ImagesGrid: React.FC<ImagesGridProps> = ({ images }) => {
  if (images.length > 3) {
    images = images.slice(0, 3);
  }

  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    alt: string;
    srcFull: string;
  } | null>(null);

  return (
    <div className="relative flex h-[300px] w-full gap-5 md:h-[600px]">
      <div className="flex h-full w-1/2 flex-col">
        {images[0] && (
          <div
            className="relative h-full w-full"
            onClick={() => setSelectedImage(images[0])}
          >
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
          <div
            className="relative h-1/2 w-full"
            onClick={() => setSelectedImage(images[1])}
          >
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
          <div
            className="relative h-1/2 w-full"
            onClick={() => setSelectedImage(images[2])}
          >
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
      {selectedImage && (
        <Modal
          src={selectedImage.srcFull}
          alt={selectedImage.alt}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </div>
  );
};

export default ImagesGrid;
