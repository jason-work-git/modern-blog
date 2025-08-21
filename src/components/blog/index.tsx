// Main BlogSection Component
import { useState } from "react";
import { BlogCard, type BlogCardProps } from "@/components/blog/card";
import BlogCategory from "@/components/blog/category";
// Fake data
const blogData: BlogCardProps[] = [
  {
    id: "1",
    title: "Stylish Kitchen And Dining Room With Functional Ideas",
    description:
      "Lorem Ipsum is simply dummy text of the print and typesetting industry...",
    image: "/images/blog-01.png",
    imageAlt: "/images/blog-01.png",
    author: "Adrio Devid",
    date: "Sep 10, 2025",
    category: "Technology",
    categoryColor: "text-blue",
    categoryBg: "bg-blue/[0.08]",
    slug: "/blog-single",
  },
  {
    id: "2",
    title: "Stylish Kitchen And Dining Room With Functional Ideas",
    description:
      "Lorem Ipsum is simply dummy text of the print and typesetting industry...",
    image: "/images/blog-02.png",
    imageAlt: "/images/blog-02.png",
    author: "Adrio Devid",
    date: "Sep 10, 2025",
    category: "Technology",
    categoryColor: "text-blue",
    categoryBg: "bg-blue/[0.08]",
    slug: "/blog-single",
  },
  {
    id: "3",
    title: "Stylish Kitchen And Dining Room With Functional Ideas",
    description:
      "Lorem Ipsum is simply dummy text of the print and typesetting industry...",
    image: "/images/blog-03.png",
    imageAlt: "/images/blog-03.png",
    author: "Adrio Devid",
    date: "Sep 10, 2025",
    category: "Technology",
    categoryColor: "text-blue",
    categoryBg: "bg-blue/[0.08]",
    slug: "/blog-single",
  },
  {
    id: "4",
    title: "Stylish Kitchen And Dining Room With Functional Ideas",
    description:
      "Lorem Ipsum is simply dummy text of the print and typesetting industry...",
    image: "/images/blog-04.png",
    imageAlt: "/images/blog-04.png",
    author: "Adrio Devid",
    date: "Sep 10, 2025",
    category: "Lifestyle",
    categoryColor: "text-purple-dark",
    categoryBg: "bg-purple/[0.08]",
    slug: "/blog-single",
  },
  {
    id: "5",
    title: "Stylish Kitchen And Dining Room With Functional Ideas",
    description:
      "Lorem Ipsum is simply dummy text of the print and typesetting industry...",
    image: "/images/blog-05.png",
    imageAlt: "/images/blog-05.png",
    author: "Adrio Devid",
    date: "Sep 10, 2025",
    category: "Travel",
    categoryColor: "text-green-dark",
    categoryBg: "bg-green/[0.08]",
    slug: "/blog-single",
  },
  {
    id: "6",
    title: "Stylish Kitchen And Dining Room With Functional Ideas",
    description:
      "Lorem Ipsum is simply dummy text of the print and typesetting industry...",
    image: "/images/blog-06.png",
    imageAlt: "/images/blog-06.png",
    author: "Adrio Devid",
    date: "Sep 10, 2025",
    category: "Travel",
    categoryColor: "text-green-dark",
    categoryBg: "bg-green/[0.08]",
    slug: "/blog-single",
  },
  {
    id: "7",
    title: "Stylish Kitchen And Dining Room With Functional Ideas",
    description:
      "Lorem Ipsum is simply dummy text of the print and typesetting industry...",
    image: "/images/blog-07.png",
    imageAlt: "/images/blog-07.png",
    author: "Adrio Devid",
    date: "Sep 10, 2025",
    category: "Travel",
    categoryColor: "text-green-dark",
    categoryBg: "bg-green/[0.08]",
    slug: "/blog-single",
  },
  {
    id: "8",
    title: "Stylish Kitchen And Dining Room With Functional Ideas",
    description:
      "Lorem Ipsum is simply dummy text of the print and typesetting industry...",
    image: "/images/blog-08.png",
    imageAlt: "/images/blog-08.png",
    author: "Adrio Devid",
    date: "Sep 10, 2025",
    category: "Travel",
    categoryColor: "text-green-dark",
    categoryBg: "bg-green/[0.08]",
    slug: "/blog-single",
  },
  {
    id: "9",
    title: "Stylish Kitchen And Dining Room With Functional Ideas",
    description:
      "Lorem Ipsum is simply dummy text of the print and typesetting industry...",
    image: "/images/blog-09.png",
    imageAlt: "/images/blog-09.png",
    author: "Adrio Devid",
    date: "Sep 10, 2025",
    category: "Health",
    categoryColor: "text-teal-dark",
    categoryBg: "bg-teal/[0.08]",
    slug: "/blog-single",
  },
  {
    id: "10",
    title: "Stylish Kitchen And Dining Room With Functional Ideas",
    description:
      "Lorem Ipsum is simply dummy text of the print and typesetting industry...",
    image: "/images/blog-10.png",
    imageAlt: "/images/blog-10.png",
    author: "Adrio Devid",
    date: "Sep 10, 2025",
    category: "Culture",
    categoryColor: "text-cyan-dark",
    categoryBg: "bg-cyan/[0.08]",
    slug: "/blog-single",
  },
  {
    id: "11",
    title: "Stylish Kitchen And Dining Room With Functional Ideas",
    description:
      "Lorem Ipsum is simply dummy text of the print and typesetting industry...",
    image: "/images/blog-11.png",
    imageAlt: "/images/blog-11.png",
    author: "Adrio Devid",
    date: "Sep 10, 2025",
    category: "Culture",
    categoryColor: "text-cyan-dark",
    categoryBg: "bg-cyan/[0.08]",
    slug: "/blog-single",
  },
  {
    id: "12",
    title: "Stylish Kitchen And Dining Room With Functional Ideas",
    description:
      "Lorem Ipsum is simply dummy text of the print and typesetting industry...",
    image: "/images/blog-12.png",
    imageAlt: "/images/blog-12.png",
    author: "Adrio Devid",
    date: "Sep 10, 2025",
    category: "Culture",
    categoryColor: "text-cyan-dark",
    categoryBg: "bg-cyan/[0.08]",
    slug: "/blog-single",
  },
];

const BlogSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const filteredBlogs =
    selectedCategory === "All"
      ? blogData
      : blogData.filter(
          (blog: BlogCardProps) => blog.category === selectedCategory,
        );

  return (
    <section className="pt-20 pb-15 lg:pt-25">
      <div className="mx-auto max-w-[1170px] px-4 sm:px-8 xl:px-0">
        <div className="mb-12.5 text-center">
          <h2 className="text-dark xl:text-heading-3 mb-3.5 text-2xl font-bold sm:text-4xl">
            دسته بندی مقالات
          </h2>
          <p>Select a category to see more related content</p>
        </div>

        <BlogCategory
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        <div className="grid grid-cols-1 gap-x-7.5 gap-y-11 sm:grid-cols-2 lg:grid-cols-3">
          {filteredBlogs.map((blog) => (
            <BlogCard key={blog.id} {...blog} />
          ))}
        </div>

        <button className="text-dark border-dark hover:bg-dark mx-auto mt-12.5 flex justify-center rounded-md border px-7.5 py-3 font-medium duration-200 ease-in hover:text-white lg:mt-17.5">
          مشاهده همه
        </button>
      </div>
    </section>
  );
};
export default BlogSection;
