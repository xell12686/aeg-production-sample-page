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
      <h3 className="mb-4 text-2xl font-light uppercase">{title}</h3>
      <hr className="mb-6" />
      <p className="mb-6 text-xl font-light leading-relaxed opacity-70">
        {description}
      </p>
      {footnoteLabel && footnoteContent && (
        <div className="border- mt-4 pt-4">
          <h4 className="text-primary mb-4 text-xl font-medium">
            {footnoteLabel}
          </h4>
          <p className="text-[1.15rem] leading-relaxed">{footnoteContent}</p>
        </div>
      )}
    </div>
  );
};

export default FeatureText;
