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
      <h3 className="mb-4 text-2xl font-bold">{title}</h3>
      <p className="mb-6">{description}</p>
      {footnoteLabel && footnoteContent && (
        <div className="mt-4 border-t border-gray-700 pt-4">
          <span className="text-lg font-semibold">{footnoteLabel}: </span>
          <span className="text-lg">{footnoteContent}</span>
        </div>
      )}
    </div>
  );
};

export default FeatureText;
