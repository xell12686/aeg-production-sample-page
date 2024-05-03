import React from "react";
import ImagesGrid, { ImagesGridProps } from "../../molecules/ImagesGrid";
import FeatureText, { FeatureTextProps } from "../../molecules/FeatureText";

interface FeaturePhotosGridProps
  extends FeatureTextProps,
    Partial<ImagesGridProps> {}

const FeaturePhotosGrid: React.FC<FeaturePhotosGridProps> = ({
  title,
  description,
  footnoteLabel,
  footnoteContent,
  images,
}) => {
  const featureTextProps: FeatureTextProps = {
    title,
    description,
    footnoteLabel,
    footnoteContent,
  };
  return (
    <section className="bg-black text-white">
      <div className="flex flex-col gap-6 lg:flex-row">
        <div className="lg:w-2/3">
          <ImagesGrid images={images || []} />
        </div>
        <div className="lg:w-1/3">
          <FeatureText {...featureTextProps} />
        </div>
      </div>
    </section>
  );
};

export default FeaturePhotosGrid;
