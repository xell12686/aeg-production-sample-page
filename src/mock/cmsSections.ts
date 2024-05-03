import { Section } from "@/types/pageSections"; // Adjust the import path as necessary

export const sectionsData: Section[] = [
  {
    sectionTag: "featured-photos-grid",
    data: {
      title: "Answer your body's needs",
      description:
        "The way ingredients are sourced affects the way we nourish our bodies. Author Mark Schatzer believes our body naturally develops an appetite for the foods and nutrients it needs to be healthy, but that artificial flavourings are getting in the way. This can be reversed by focusing on high-quality ingredients and being mindful as your appetite guides you to consume according to your body's needs.",
      footnoteLabel: "BE MINDFUL",
      footnoteContent:
        "Sourcing local or organic food is a good way to start being more mindful about what you're cooking and eating.",
      images: [
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
      ],
    },
  },
  {
    sectionTag: "featured-posts",
    data: {
      title: "All the latest from AEG",
      posts: [
        {
          imgsrc: "/images/posts/image-01.jpg",
          imgsrcFull: "/images/posts/image-01@2x.jpg",
          title: "Summer Lunch Menu By Mark Best",
          excerpt:
            "AEG ambassador Mark Best's summer eats are guaranteed to help you make the most of the warmer weather and entertaining at home.",
          url: "/",
        },
        {
          imgsrc: "/images/posts/image-02.jpg",
          imgsrcFull: "/images/posts/image-02@2x.jpg",
          title: "A Traditional Christmas Eve, Mark Best Style",
          excerpt:
            "One of Australia's best chefs and AEG ambassador, Mark Best, shares his favourite Christmas Eve menu which is sure to impress your guests.",
          url: "/",
        },
        {
          imgsrc: "/images/posts/image-03.jpg",
          imgsrcFull: "/images/posts/image-03@2x.jpg",
          title: "Taking Taste Further",
          excerpt:
            "This exclusive cookbook gives you all the know-how you need. We've designed it to make sure you get the most out of our products – and the best out of your food.",
          url: "/",
        },
      ],
    },
  },
];
