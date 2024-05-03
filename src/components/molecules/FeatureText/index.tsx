import React from "react";

export interface FeatureTextProps {
  title: string;
  description: string;
  footnoteLabel?: string;
  footnoteContent?: string;
}

const FeatureText: React.FC<FeatureTextProps> = ({
  title,
  description,
  footnoteLabel,
  footnoteContent,
}) => {
  return (
    <div>
      <h1 className="mb-4 text-xl font-light uppercase tracking-wide md:text-2xl">
        {title}
      </h1>
      <hr className="mb-6" />
      <p className="text-large mb-6 font-light leading-relaxed opacity-70 md:text-xl">
        {description}
      </p>
      {footnoteLabel && footnoteContent && (
        <div className="border- mt-4 pt-4">
          <label className="mb-4 text-xl font-medium text-primary">
            {footnoteLabel}
          </label>
          <p className="text-[1.15rem] leading-relaxed">{footnoteContent}</p>
        </div>
      )}
    </div>
  );
};

export default FeatureText;
