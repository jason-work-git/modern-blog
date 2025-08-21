import React from "react";
import Image from "next/image";
import type { BlogCardProps } from "@/components/blog/card";
import Link from "next/link";

const blogCards: BlogCardProps[] = [
  {
    id: "1",
    variant: "large",
    image: "/images/hero-01.png",
    category: "سبک زندگی",
    categoryColor: "purple-dark",
    title: "اینجا شروع کنید تا خلاصه‌ای از لینک شامل تمام موارد ضروری به دست آورید",
    description: "این پست جامع به عنوان راهنمای سریع شما برای آشنایی سریع با گوست عمل می‌کند. مملو از اطلاعات حیاتی...",
    author: "آدریو دیوید",
    date: "19 شهریور 1404",
    imageAlt: "قهرمان",
    slug: "",
  },
  {
    id: "2",
    variant: "small",
    image: "/images/hero-02.png",
    category: "فناوری",
    categoryColor: "blue",
    title: "14 طراحی معماری نوآورانه برای ایجاد فضای داخلی گسترده لینک",
    description: "این پست جامع به عنوان راهنمای سریع شما برای آشنایی سریع با گوست عمل می‌کند. مملو از اطلاعات حیاتی...",
    author: "آدریو دیوید",
    date: "19 شهریور 1404",
    imageAlt: "قهرمان",
    slug: "",
  },
  {
    id: "3",
    variant: "small",
    image: "/images/hero-03.png",
    category: "سفر",
    categoryColor: "green-dark",
    title: "مسافری که از غار یخی با منظره‌ای خیره‌کننده و جذاب طبیعت بازدید می‌کند",
    description: "این پست جامع به عنوان راهنمای سریع شما برای آشنایی سریع با گوست عمل می‌کند. مملو از اطلاعات حیاتی...",
    author: "آدریو دیوید",
    date: "19 شهریور 1404",
    imageAlt: "قهرمان",
    slug: "",
  },
];

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative z-10 overflow-hidden rounded-b-[50px] pt-34 pb-15"
    >
      <div>
        <div className="bg-gray absolute bottom-0 left-0 h-full w-full rounded-b-[50px]"></div>
        <div className="absolute bottom-0 left-0 hidden h-full w-full rounded-b-[50px] lg:block">
          <Image
            src="/images/hero-bg.svg"
            alt="hero"
            width={1920}
            height={1080}
          />
        </div>
      </div>

      <div className="relative z-1 mx-auto max-w-[1170px] px-4 sm:px-8 xl:px-0">
        <div className="flex flex-wrap gap-x-7.5 gap-y-9">
          {blogCards.map((card, index) => (
            <HeroBlogCard key={index} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
};

const HeroBlogCard: React.FC<BlogCardProps> = ({
                                                 variant = "compact",
                                                 id,
                                                 title,
                                                 description,
                                                 image,
                                                 imageAlt,
                                                 author,
                                                 date,
                                                 category,
                                                 categoryColor = "primary",
                                                 categoryBg = "primary/10",
                                                 slug,
                                               }) => {
  const isLarge = variant === "large";

  return (
    <div
      className={`shadow-1 flex w-full ${
        isLarge
          ? "max-w-[1170px] flex-col lg:flex-row lg:items-center lg:gap-11 lg:p-2.5"
          : "flex-col gap-6 sm:flex-row sm:items-center lg:max-w-[570px]"
      } rounded-xl bg-white p-2.5`}
    >
      <div
        className={`w-full ${isLarge ? "lg:max-w-[536px]" : "lg:max-w-[238px]"}`}
      >
        <Link href="/blog-single">
          <Image
            className="w-full"
            src={image}
            alt={imageAlt}
            width={370}
            height={280}
          />
        </Link>
      </div>

      <div
        className={`w-full ${isLarge ? "lg:max-w-[540px]" : "lg:max-w-[272px]"}`}
      >
        <Link
          href="/category"
          className={`mb-4 inline-flex rounded-full px-3 py-1 text-sm font-medium text-${categoryColor} bg-${categoryColor}/[0.08]`}
        >
          {category}
        </Link>
        {isLarge ? (
          <h1 className="text-custom-4 xl:text-heading-4 text-dark mb-4 font-bold">
            <Link href="/blog-single">{title}</Link>
          </h1>
        ) : (
          <h2 className="text-custom-lg text-dark mb-3 font-semibold">
            <Link href="/blog-single">{title}</Link>
          </h2>
        )}
        {isLarge && description && (
          <p className="max-w-[524px]">{description}</p>
        )}
        <div className="mt-5 flex items-center gap-2.5">
          <Link href="/author" className="flex items-center gap-3">
            {isLarge && (
              <div className="flex h-6 w-6 overflow-hidden rounded-full">
                <Image
                  src="/images/user-01.png"
                  alt="user"
                  width={370}
                  height={280}
                />
              </div>
            )}
            <p className="text-sm">{author}</p>
          </Link>
          <span className="bg-dark-2 flex h-[3px] w-[3px] rounded-full"></span>
          <p className="text-sm">{date}</p>
        </div>
      </div>
    </div>
  );
};



export default HeroSection;