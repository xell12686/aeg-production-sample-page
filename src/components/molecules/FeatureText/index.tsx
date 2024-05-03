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
      <h3 className="mb-4 text-xl font-light uppercase tracking-wide md:text-2xl">
        {title}
      </h3>
      <hr className="mb-6" />
      <p className="text-large mb-6 font-light leading-relaxed opacity-70 md:text-xl">
        {description}
      </p>
      {footnoteLabel && footnoteContent && (
        <div className="border- mt-4 pt-4">
          <h4 className="mb-4 text-xl font-medium text-primary">
            {footnoteLabel}
          </h4>
          <p className="text-[1.15rem] leading-relaxed">{footnoteContent}</p>
        </div>
      )}
    </div>
  );
};

export default FeatureText;
