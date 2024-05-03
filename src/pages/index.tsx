import React from "react";
import FeaturePhotosGrid from "../components/organisms/FeaturePhotosGrid";
import DefaultTemplate from "../components/templates/DefaultTemplate";

const HomePage = () => {
  const images = [
    {
      src: "/images/slides/Image-01.jpg",
      srcFull: "/images/slides/Image-01@2x.jpg",
      alt: "Father and son walking through a field",
    },
    {
      src: "/images/slides/Image-02.jpg",
      srcFull: "/images/slides/Image-02@2x.jpg",
      alt: "Bowl of assorted fresh fruits",
    },
    {
      src: "/images/slides/Image-03.jpg",
      srcFull: "/images/slides/Image-03@2x.jpg",
      alt: "Fresh asparagus",
    },
  ];

  return (
    <DefaultTemplate>
      <FeaturePhotosGrid
        title="Answer your body's needs"
        description="The way ingredients are sourced affects the way we nourish our bodies. Author Mark Schatzer believes our body naturally develops an appetite for the foods and nutrients it needs to be healthy, but that artificial flavourings are getting in the way. This can be reversed by focusing on high-quality ingredients and being mindful as your appetite guides you to consume according to your body's needs."
        footnoteLabel="BE MINDFUL"
        footnoteContent="Sourcing local or organic food is a good way to start being more mindful about what you're cooking and eating."
        images={images}
      />
      <FeaturePhotosGrid
        title="XXXAnswer your body's needs"
        description="The way ingredients are sourced affects the way we nourish our bodies. Author Mark Schatzer believes our body naturally develops an appetite for the foods and nutrients it needs to be healthy, but that artificial flavourings are getting in the way. This can be reversed by focusing on high-quality ingredients and being mindful as your appetite guides you to consume according to your body's needs."
        footnoteLabel="BE MINDFUL"
        footnoteContent="Sourcing local or organic food is a good way to start being more mindful about what you're cooking and eating."
        images={images}
      />
    </DefaultTemplate>
  );
};

export default HomePage;
