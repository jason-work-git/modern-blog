import React from "react";
import HeroSection from "@/components/pages/home/hero";
import BlogSection from "@/components/blog";
import NewsLetter from "@/components/common/news-letter";

const HomePage = () => {
  return (
    <>
      <HeroSection/>
      <BlogSection />
      <NewsLetter/>
    </>
  );
};

export default HomePage;