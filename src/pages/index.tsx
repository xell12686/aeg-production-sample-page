import React from "react";
import FeaturePhotosGrid from "@/components/organisms/FeaturePhotosGrid";
import DefaultTemplate from "@/components/templates/DefaultTemplate";
import FeaturedPosts from "@/components/organisms/FeaturedPosts";
import { sectionsData } from "@/mock/cmsSections";
import { Section } from "@/types/pageSections";
import Head from "next/head";

const HomePage = () => {
  const pageSections: Section[] = sectionsData;

  const renderSection = (section: Section) => {
    switch (section.sectionTag) {
      case "featured-photos-grid":
        return <FeaturePhotosGrid {...section.data} />;
      case "featured-posts":
        return <FeaturedPosts {...section.data} />;
      default:
        return <div>Unknown section</div>;
    }
  };

  return (
    <DefaultTemplate>
      <Head>
        <title>AEG sample page</title>
        <meta
          name="description"
          content="Sample Demo page for Filta Testing by James Lacandula"
        ></meta>
      </Head>
      {pageSections.map((section, index) => (
        <div key={index}>{renderSection(section)}</div>
      ))}
    </DefaultTemplate>
  );
};

export default HomePage;
