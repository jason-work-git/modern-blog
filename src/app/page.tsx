"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function HomePage() {
  const blogCards: Blog[] = [
    {
      variant: "large",
      image: "/images/hero-01.png",
      category: "Lifestyle",
      categoryColor: "purple-dark",
      title:
        "Begin here to obtain Link brief summary encompassing all the essential",
      description:
        "This comprehensive post serves as your cheat-sheet to swiftly familiarize yourself with Ghost. Packed with crucial...",
      author: "Adrio Devid",
      date: "Sep 10, 2025",
      imageAlt: "hero",
    },
    {
      variant: "small",
      image: "/images/hero-02.png",
      category: "Technology",
      categoryColor: "blue",
      title:
        "14 Innovative Architectural Designs to Create Link Vast Interior Space",
      description:
        "This comprehensive post serves as your cheat-sheet to swiftly familiarize yourself with Ghost. Packed with crucial...",
      author: "Adrio Devid",
      date: "Sep 10, 2025",
      imageAlt: "hero",
    },
    {
      variant: "small",
      image: "/images/hero-03.png",
      category: "Travel",
      categoryColor: "green-dark",
      title:
        "Traveller Visiting Ice Cave With Amazing Eye-catching view with nature",
      description:
        "This comprehensive post serves as your cheat-sheet to swiftly familiarize yourself with Ghost. Packed with crucial...",
      author: "Adrio Devid",
      date: "Sep 10, 2025",
      imageAlt: "hero",
    },
  ];
  return (
    <>
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
              <HeroBlogCard key={index} props={card} />
            ))}
          </div>
        </div>
      </section>
      <BlogSection />

      <div className="mx-auto max-w-[1170px] px-4 sm:px-8 xl:px-0">
        <div className="shadow-1 rounded-[10px] bg-white px-4 py-9 sm:px-8 xl:px-10">
          <div className="flex flex-wrap items-center justify-between gap-10">
            <div className="w-full max-w-[455px]">
              <h3 className="text-heading-6 text-dark mb-3 font-semibold">
                Subscribe to Newsletter
              </h3>
              <p>
                Provide your email to get email notification when we launch new
                products or publish new articles
              </p>
            </div>
            <div className="w-full max-w-[494px]">
              <form>
                <div className="flex items-center gap-5">
                  <div className="w-full max-w-[350px]">
                    <input
                      id="email"
                      type="email"
                      name="email"
                      placeholder="Enter your Email"
                      className="border-gray-3 placeholder:text-dark-5 focus:shadow-input focus:ring-dark-4/20 w-full rounded-md border bg-white px-5 py-3.5 outline-hidden focus:border-transparent focus:ring-2"
                    />
                  </div>
                  <button className="bg-dark flex rounded-md px-5.5 py-3.5 font-medium text-white transition-all duration-300 ease-linear hover:opacity-90">
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* <section className="pt-20 pb-15 lg:pt-25">
        <div className="mx-auto max-w-[1170px] px-4 sm:px-8 xl:px-0">
          <div className="mb-12.5 text-center">
            <h2 className="text-dark xl:text-heading-3 mb-3.5 text-2xl font-bold sm:text-4xl">
              Browse by Category
            </h2>
            <p>Select a category to see more related content</p>
          </div>

          <div x-data="{ selectedCategory: 'All', activeClass: 'bg-dark border-dark text-white', inactiveClass: 'bg-gray border-gray-3 text-dark',}">
            <div className="mb-15 flex flex-wrap items-center justify-center gap-4">
              <button className="hover:bg-dark hover:border-dark bg-gray border-gray-3 text-dark rounded-full border px-4.5 py-2.5 font-medium duration-200 ease-in hover:text-white">
                All (20)
              </button>
              <button className="hover:bg-dark hover:border-dark bg-dark border-dark rounded-full border px-4.5 py-2.5 font-medium text-white duration-200 ease-in hover:text-white">
                Technology (03)
              </button>
              <button className="hover:bg-dark hover:border-dark bg-gray border-gray-3 text-dark rounded-full border px-4.5 py-2.5 font-medium duration-200 ease-in hover:text-white">
                Lifestyle (02)
              </button>
              <button className="hover:bg-dark hover:border-dark bg-gray border-gray-3 text-dark rounded-full border px-4.5 py-2.5 font-medium duration-200 ease-in hover:text-white">
                Travel (05)
              </button>
              <button className="hover:bg-dark hover:border-dark bg-gray border-gray-3 text-dark rounded-full border px-4.5 py-2.5 font-medium duration-200 ease-in hover:text-white">
                Health (09)
              </button>
              <button className="hover:bg-dark hover:border-dark bg-gray border-gray-3 text-dark rounded-full border px-4.5 py-2.5 font-medium duration-200 ease-in hover:text-white">
                Culture (01)
              </button>
            </div>

            <div>
              <div x-show="selectedCategory === 'All'">
                <div className="grid grid-cols-1 gap-x-7.5 gap-y-11 sm:grid-cols-2 lg:grid-cols-3">
                  <div className="group">
                    <div className="mb-6 overflow-hidden rounded-[10px] transition-all group-hover:scale-105">
                      <a href="/blog-single.html">
                        <img
                          src="images/blog-01.png"
                          alt="image"
                          className="w-full"
                        />
                      </a>
                    </div>

                    <h3>
                      <a
                        href="/blog-single.html"
                        className="text-dark mb-3.5 block text-xl font-bold"
                      >
                        <span className="from-primary/50 to-primary/40 bg-linear-to-r bg-[length:0px_10px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 group-hover:bg-[length:100%_10px] hover:bg-[length:100%_3px]">
                          Stylish Kitchen And Dining Room With Functional Ideas
                        </span>
                      </a>
                    </h3>
                    <p>
                      Lorem Ipsum is simply dummy text of the print and
                      typesetting industry...
                    </p>

                    <div className="mt-4.5 flex flex-wrap items-center justify-between gap-3">
                      <div className="flex items-center gap-2.5">
                        <a
                          href="/author.html"
                          className="flex items-center gap-3"
                        >
                          <div className="flex h-6 w-6 overflow-hidden rounded-full">
                            <img src="images/user-01.png" alt="user" />
                          </div>
                          <p className="text-sm">Adrio Devid</p>
                        </a>

                        <span className="bg-dark-2 flex h-[3px] w-[3px] rounded-full"></span>

                        <p className="text-sm">Sep 10, 2025</p>
                      </div>
                      <a
                        href="/category.html"
                        className="text-blue bg-blue/[0.08] inline-flex rounded-full px-3 py-1 text-sm font-medium"
                      >
                        Technology
                      </a>
                    </div>
                  </div>

                  <div className="group">
                    <div className="mb-6 overflow-hidden rounded-[10px] transition-all group-hover:scale-105">
                      <a href="/blog-single.html">
                        <img
                          src="images/blog-02.png"
                          alt="image"
                          className="w-full"
                        />
                      </a>
                    </div>

                    <h3>
                      <a
                        href="/blog-single.html"
                        className="text-dark mb-3.5 block text-xl font-bold"
                      >
                        <span className="from-primary/50 to-primary/40 bg-linear-to-r bg-[length:0px_10px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 group-hover:bg-[length:100%_10px] hover:bg-[length:100%_3px]">
                          Stylish Kitchen And Dining Room With Functional Ideas
                        </span>
                      </a>
                    </h3>
                    <p>
                      Lorem Ipsum is simply dummy text of the print and
                      typesetting industry...
                    </p>

                    <div className="mt-4.5 flex flex-wrap items-center justify-between gap-3">
                      <div className="flex items-center gap-2.5">
                        <a
                          href="/author.html"
                          className="flex items-center gap-3"
                        >
                          <div className="flex h-6 w-6 overflow-hidden rounded-full">
                            <img src="images/user-01.png" alt="user" />
                          </div>
                          <p className="text-sm">Adrio Devid</p>
                        </a>

                        <span className="bg-dark-2 flex h-[3px] w-[3px] rounded-full"></span>

                        <p className="text-sm">Sep 10, 2025</p>
                      </div>
                      <a
                        href="/category.html"
                        className="text-blue bg-blue/[0.08] inline-flex rounded-full px-3 py-1 text-sm font-medium"
                      >
                        Technology
                      </a>
                    </div>
                  </div>

                  <div className="group">
                    <div className="mb-6 overflow-hidden rounded-[10px] transition-all group-hover:scale-105">
                      <a href="/blog-single.html">
                        <img
                          src="images/blog-03.png"
                          alt="image"
                          className="w-full"
                        />
                      </a>
                    </div>

                    <h3>
                      <a
                        href="/blog-single.html"
                        className="text-dark mb-3.5 block text-xl font-bold"
                      >
                        <span className="from-primary/50 to-primary/40 bg-linear-to-r bg-[length:0px_10px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 group-hover:bg-[length:100%_10px] hover:bg-[length:100%_3px]">
                          Stylish Kitchen And Dining Room With Functional Ideas
                        </span>
                      </a>
                    </h3>
                    <p>
                      Lorem Ipsum is simply dummy text of the print and
                      typesetting industry...
                    </p>

                    <div className="mt-4.5 flex flex-wrap items-center justify-between gap-3">
                      <div className="flex items-center gap-2.5">
                        <a
                          href="/author.html"
                          className="flex items-center gap-3"
                        >
                          <div className="flex h-6 w-6 overflow-hidden rounded-full">
                            <img src="images/user-01.png" alt="user" />
                          </div>
                          <p className="text-sm">Adrio Devid</p>
                        </a>

                        <span className="bg-dark-2 flex h-[3px] w-[3px] rounded-full"></span>

                        <p className="text-sm">Sep 10, 2025</p>
                      </div>
                      <a
                        href="/category.html"
                        className="text-blue bg-blue/[0.08] inline-flex rounded-full px-3 py-1 text-sm font-medium"
                      >
                        Technology
                      </a>
                    </div>
                  </div>

                  <div className="group">
                    <div className="mb-6 overflow-hidden rounded-[10px] transition-all group-hover:scale-105">
                      <a href="/blog-single.html">
                        <img
                          src="images/blog-04.png"
                          alt="image"
                          className="w-full"
                        />
                      </a>
                    </div>

                    <h4>
                      <a
                        href="/blog-single.html"
                        className="text-dark mb-3.5 block text-xl font-bold"
                      >
                        <span className="from-primary/50 to-primary/40 bg-linear-to-r bg-[length:0px_10px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 group-hover:bg-[length:100%_10px] hover:bg-[length:100%_3px]">
                          Stylish Kitchen And Dining Room With Functional Ideas
                        </span>
                      </a>
                    </h4>
                    <p>
                      Lorem Ipsum is simply dummy text of the print and
                      typesetting industry...
                    </p>

                    <div className="mt-4.5 flex flex-wrap items-center justify-between gap-3">
                      <div className="flex items-center gap-2.5">
                        <a
                          href="/author.html"
                          className="flex items-center gap-3"
                        >
                          <div className="flex h-6 w-6 overflow-hidden rounded-full">
                            <img src="images/user-01.png" alt="user" />
                          </div>
                          <p className="text-sm">Adrio Devid</p>
                        </a>

                        <span className="bg-dark-2 flex h-[3px] w-[3px] rounded-full"></span>

                        <p className="text-sm">Sep 10, 2025</p>
                      </div>
                      <a
                        href="/category.html"
                        className="text-purple-dark bg-purple/[0.08] inline-flex rounded-full px-3 py-1 text-sm font-medium"
                      >
                        Lifestyle
                      </a>
                    </div>
                  </div>

                  <div className="group">
                    <div className="mb-6 overflow-hidden rounded-[10px] transition-all group-hover:scale-105">
                      <a href="/blog-single.html">
                        <img
                          src="images/blog-05.png"
                          alt="image"
                          className="w-full"
                        />
                      </a>
                    </div>

                    <h4>
                      <a
                        href="/blog-single.html"
                        className="text-dark mb-3.5 block text-xl font-bold"
                      >
                        <span className="from-primary/50 to-primary/40 bg-linear-to-r bg-[length:0px_10px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 group-hover:bg-[length:100%_10px] hover:bg-[length:100%_3px]">
                          Stylish Kitchen And Dining Room With Functional Ideas
                        </span>
                      </a>
                    </h4>
                    <p>
                      Lorem Ipsum is simply dummy text of the print and
                      typesetting industry...
                    </p>

                    <div className="mt-4.5 flex flex-wrap items-center justify-between gap-3">
                      <div className="flex items-center gap-2.5">
                        <a
                          href="/author.html"
                          className="flex items-center gap-3"
                        >
                          <div className="flex h-6 w-6 overflow-hidden rounded-full">
                            <img src="images/user-01.png" alt="user" />
                          </div>
                          <p className="text-sm">Adrio Devid</p>
                        </a>

                        <span className="bg-dark-2 flex h-[3px] w-[3px] rounded-full"></span>

                        <p className="text-sm">Sep 10, 2025</p>
                      </div>
                      <a
                        href="/category.html"
                        className="text-green-dark bg-green/[0.08] inline-flex rounded-full px-3 py-1 text-sm font-medium"
                      >
                        Travel
                      </a>
                    </div>
                  </div>

                  <div className="group">
                    <div className="mb-6 overflow-hidden rounded-[10px] transition-all group-hover:scale-105">
                      <a href="/blog-single.html">
                        <img
                          src="images/blog-06.png"
                          alt="image"
                          className="w-full"
                        />
                      </a>
                    </div>

                    <h4>
                      <a
                        href="/blog-single.html"
                        className="text-dark mb-3.5 block text-xl font-bold"
                      >
                        <span className="from-primary/50 to-primary/40 bg-linear-to-r bg-[length:0px_10px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 group-hover:bg-[length:100%_10px] hover:bg-[length:100%_3px]">
                          Stylish Kitchen And Dining Room With Functional Ideas
                        </span>
                      </a>
                    </h4>
                    <p>
                      Lorem Ipsum is simply dummy text of the print and
                      typesetting industry...
                    </p>

                    <div className="mt-4.5 flex flex-wrap items-center justify-between gap-3">
                      <div className="flex items-center gap-2.5">
                        <a
                          href="/author.html"
                          className="flex items-center gap-3"
                        >
                          <div className="flex h-6 w-6 overflow-hidden rounded-full">
                            <img src="images/user-01.png" alt="user" />
                          </div>
                          <p className="text-sm">Adrio Devid</p>
                        </a>

                        <span className="bg-dark-2 flex h-[3px] w-[3px] rounded-full"></span>

                        <p className="text-sm">Sep 10, 2025</p>
                      </div>
                      <a
                        href="/category.html"
                        className="text-green-dark bg-green/[0.08] inline-flex rounded-full px-3 py-1 text-sm font-medium"
                      >
                        Travel
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div x-show="selectedCategory === 'Technology'">
                <div className="grid grid-cols-1 gap-x-7.5 gap-y-11 sm:grid-cols-2 lg:grid-cols-3">
                  <div className="group">
                    <div className="mb-6 overflow-hidden rounded-[10px] transition-all group-hover:scale-105">
                      <a href="/blog-single.html">
                        <img
                          src="images/blog-01.png"
                          alt="image"
                          className="w-full"
                        />
                      </a>
                    </div>

                    <h3>
                      <a
                        href="/blog-single.html"
                        className="text-dark mb-3.5 block text-xl font-bold"
                      >
                        <span className="from-primary/50 to-primary/40 bg-linear-to-r bg-[length:0px_10px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 group-hover:bg-[length:100%_10px] hover:bg-[length:100%_3px]">
                          Stylish Kitchen And Dining Room With Functional Ideas
                        </span>
                      </a>
                    </h3>
                    <p>
                      Lorem Ipsum is simply dummy text of the print and
                      typesetting industry...
                    </p>

                    <div className="mt-4.5 flex flex-wrap items-center justify-between gap-3">
                      <div className="flex items-center gap-2.5">
                        <a
                          href="/author.html"
                          className="flex items-center gap-3"
                        >
                          <div className="flex h-6 w-6 overflow-hidden rounded-full">
                            <img src="images/user-01.png" alt="user" />
                          </div>
                          <p className="text-sm">Adrio Devid</p>
                        </a>

                        <span className="bg-dark-2 flex h-[3px] w-[3px] rounded-full"></span>

                        <p className="text-sm">Sep 10, 2025</p>
                      </div>
                      <a
                        href="/category.html"
                        className="text-blue bg-blue/[0.08] inline-flex rounded-full px-3 py-1 text-sm font-medium"
                      >
                        Technology
                      </a>
                    </div>
                  </div>

                  <div className="group">
                    <div className="mb-6 overflow-hidden rounded-[10px] transition-all group-hover:scale-105">
                      <a href="/blog-single.html">
                        <img
                          src="images/blog-02.png"
                          alt="image"
                          className="w-full"
                        />
                      </a>
                    </div>

                    <h3>
                      <a
                        href="/blog-single.html"
                        className="text-dark mb-3.5 block text-xl font-bold"
                      >
                        <span className="from-primary/50 to-primary/40 bg-linear-to-r bg-[length:0px_10px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 group-hover:bg-[length:100%_10px] hover:bg-[length:100%_3px]">
                          Stylish Kitchen And Dining Room With Functional Ideas
                        </span>
                      </a>
                    </h3>
                    <p>
                      Lorem Ipsum is simply dummy text of the print and
                      typesetting industry...
                    </p>

                    <div className="mt-4.5 flex flex-wrap items-center justify-between gap-3">
                      <div className="flex items-center gap-2.5">
                        <a
                          href="/author.html"
                          className="flex items-center gap-3"
                        >
                          <div className="flex h-6 w-6 overflow-hidden rounded-full">
                            <img src="images/user-01.png" alt="user" />
                          </div>
                          <p className="text-sm">Adrio Devid</p>
                        </a>

                        <span className="bg-dark-2 flex h-[3px] w-[3px] rounded-full"></span>

                        <p className="text-sm">Sep 10, 2025</p>
                      </div>
                      <a
                        href="/category.html"
                        className="text-blue bg-blue/[0.08] inline-flex rounded-full px-3 py-1 text-sm font-medium"
                      >
                        Technology
                      </a>
                    </div>
                  </div>

                  <div className="group">
                    <div className="mb-6 overflow-hidden rounded-[10px] transition-all group-hover:scale-105">
                      <a href="/blog-single.html">
                        <img
                          src="images/blog-03.png"
                          alt="image"
                          className="w-full"
                        />
                      </a>
                    </div>

                    <h3>
                      <a
                        href="/blog-single.html"
                        className="text-dark mb-3.5 block text-xl font-bold"
                      >
                        <span className="from-primary/50 to-primary/40 bg-linear-to-r bg-[length:0px_10px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 group-hover:bg-[length:100%_10px] hover:bg-[length:100%_3px]">
                          Stylish Kitchen And Dining Room With Functional Ideas
                        </span>
                      </a>
                    </h3>
                    <p>
                      Lorem Ipsum is simply dummy text of the print and
                      typesetting industry...
                    </p>

                    <div className="mt-4.5 flex flex-wrap items-center justify-between gap-3">
                      <div className="flex items-center gap-2.5">
                        <a
                          href="/author.html"
                          className="flex items-center gap-3"
                        >
                          <div className="flex h-6 w-6 overflow-hidden rounded-full">
                            <img src="images/user-01.png" alt="user" />
                          </div>
                          <p className="text-sm">Adrio Devid</p>
                        </a>

                        <span className="bg-dark-2 flex h-[3px] w-[3px] rounded-full"></span>

                        <p className="text-sm">Sep 10, 2025</p>
                      </div>
                      <a
                        href="/category.html"
                        className="text-blue bg-blue/[0.08] inline-flex rounded-full px-3 py-1 text-sm font-medium"
                      >
                        Technology
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div x-show="selectedCategory === 'Lifestyle'">
                <div className="grid grid-cols-1 gap-x-7.5 gap-y-11 sm:grid-cols-2 lg:grid-cols-3">
                  <div className="group">
                    <div className="mb-6 overflow-hidden rounded-[10px] transition-all group-hover:scale-105">
                      <a href="/blog-single.html">
                        <img
                          src="images/blog-04.png"
                          alt="image"
                          className="w-full"
                        />
                      </a>
                    </div>

                    <h3>
                      <a
                        href="/blog-single.html"
                        className="text-dark mb-3.5 block text-xl font-bold"
                      >
                        <span className="from-primary/50 to-primary/40 bg-linear-to-r bg-[length:0px_10px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 group-hover:bg-[length:100%_10px] hover:bg-[length:100%_3px]">
                          Stylish Kitchen And Dining Room With Functional Ideas
                        </span>
                      </a>
                    </h3>
                    <p>
                      Lorem Ipsum is simply dummy text of the print and
                      typesetting industry...
                    </p>

                    <div className="mt-4.5 flex flex-wrap items-center justify-between gap-3">
                      <div className="flex items-center gap-2.5">
                        <a
                          href="/author.html"
                          className="flex items-center gap-3"
                        >
                          <div className="flex h-6 w-6 overflow-hidden rounded-full">
                            <img src="images/user-01.png" alt="user" />
                          </div>
                          <p className="text-sm">Adrio Devid</p>
                        </a>

                        <span className="bg-dark-2 flex h-[3px] w-[3px] rounded-full"></span>

                        <p className="text-sm">Sep 10, 2025</p>
                      </div>
                      <a
                        href="/category.html"
                        className="text-purple-dark bg-purple/[0.08] inline-flex rounded-full px-3 py-1 text-sm font-medium"
                      >
                        Lifestyle
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div x-show="selectedCategory === 'Travel'">
                <div className="grid grid-cols-1 gap-x-7.5 gap-y-11 sm:grid-cols-2 lg:grid-cols-3">
                  <div className="group">
                    <div className="mb-6 overflow-hidden rounded-[10px] transition-all group-hover:scale-105">
                      <a href="/blog-single.html">
                        <img
                          src="images/blog-05.png"
                          alt="image"
                          className="w-full"
                        />
                      </a>
                    </div>

                    <h3>
                      <a
                        href="/blog-single.html"
                        className="text-dark mb-3.5 block text-xl font-bold"
                      >
                        <span className="from-primary/50 to-primary/40 bg-linear-to-r bg-[length:0px_10px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 group-hover:bg-[length:100%_10px] hover:bg-[length:100%_3px]">
                          Stylish Kitchen And Dining Room With Functional Ideas
                        </span>
                      </a>
                    </h3>
                    <p>
                      Lorem Ipsum is simply dummy text of the print and
                      typesetting industry...
                    </p>

                    <div className="mt-4.5 flex flex-wrap items-center justify-between gap-3">
                      <div className="flex items-center gap-2.5">
                        <a
                          href="/author.html"
                          className="flex items-center gap-3"
                        >
                          <div className="flex h-6 w-6 overflow-hidden rounded-full">
                            <img src="images/user-01.png" alt="user" />
                          </div>
                          <p className="text-sm">Adrio Devid</p>
                        </a>

                        <span className="bg-dark-2 flex h-[3px] w-[3px] rounded-full"></span>

                        <p className="text-sm">Sep 10, 2025</p>
                      </div>
                      <a
                        href="/category.html"
                        className="text-green-dark bg-green/[0.08] inline-flex rounded-full px-3 py-1 text-sm font-medium"
                      >
                        Travel
                      </a>
                    </div>
                  </div>

                  <div className="group">
                    <div className="mb-6 overflow-hidden rounded-[10px] transition-all group-hover:scale-105">
                      <a href="/blog-single.html">
                        <img
                          src="images/blog-06.png"
                          alt="image"
                          className="w-full"
                        />
                      </a>
                    </div>

                    <h3>
                      <a
                        href="/blog-single.html"
                        className="text-dark mb-3.5 block text-xl font-bold"
                      >
                        <span className="from-primary/50 to-primary/40 bg-linear-to-r bg-[length:0px_10px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 group-hover:bg-[length:100%_10px] hover:bg-[length:100%_3px]">
                          Stylish Kitchen And Dining Room With Functional Ideas
                        </span>
                      </a>
                    </h3>
                    <p>
                      Lorem Ipsum is simply dummy text of the print and
                      typesetting industry...
                    </p>

                    <div className="mt-4.5 flex flex-wrap items-center justify-between gap-3">
                      <div className="flex items-center gap-2.5">
                        <a
                          href="/author.html"
                          className="flex items-center gap-3"
                        >
                          <div className="flex h-6 w-6 overflow-hidden rounded-full">
                            <img src="images/user-01.png" alt="user" />
                          </div>
                          <p className="text-sm">Adrio Devid</p>
                        </a>

                        <span className="bg-dark-2 flex h-[3px] w-[3px] rounded-full"></span>

                        <p className="text-sm">Sep 10, 2025</p>
                      </div>
                      <a
                        href="/category.html"
                        className="text-green-dark bg-green/[0.08] inline-flex rounded-full px-3 py-1 text-sm font-medium"
                      >
                        Travel
                      </a>
                    </div>
                  </div>

                  <div className="group">
                    <div className="mb-6 overflow-hidden rounded-[10px] transition-all group-hover:scale-105">
                      <a href="/blog-single.html">
                        <img
                          src="images/blog-07.png"
                          alt="image"
                          className="w-full"
                        />
                      </a>
                    </div>

                    <h3>
                      <a
                        href="/blog-single.html"
                        className="text-dark mb-3.5 block text-xl font-bold"
                      >
                        <span className="from-primary/50 to-primary/40 bg-linear-to-r bg-[length:0px_10px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 group-hover:bg-[length:100%_10px] hover:bg-[length:100%_3px]">
                          Stylish Kitchen And Dining Room With Functional Ideas
                        </span>
                      </a>
                    </h3>
                    <p>
                      Lorem Ipsum is simply dummy text of the print and
                      typesetting industry...
                    </p>

                    <div className="mt-4.5 flex flex-wrap items-center justify-between gap-3">
                      <div className="flex items-center gap-2.5">
                        <a
                          href="/author.html"
                          className="flex items-center gap-3"
                        >
                          <div className="flex h-6 w-6 overflow-hidden rounded-full">
                            <img src="images/user-01.png" alt="user" />
                          </div>
                          <p className="text-sm">Adrio Devid</p>
                        </a>

                        <span className="bg-dark-2 flex h-[3px] w-[3px] rounded-full"></span>

                        <p className="text-sm">Sep 10, 2025</p>
                      </div>
                      <a
                        href="/category.html"
                        className="text-green-dark bg-green/[0.08] inline-flex rounded-full px-3 py-1 text-sm font-medium"
                      >
                        Travel
                      </a>
                    </div>
                  </div>

                  <div className="group">
                    <div className="mb-6 overflow-hidden rounded-[10px] transition-all group-hover:scale-105">
                      <a href="/blog-single.html">
                        <img
                          src="images/blog-08.png"
                          alt="image"
                          className="w-full"
                        />
                      </a>
                    </div>

                    <h3>
                      <a
                        href="/blog-single.html"
                        className="text-dark mb-3.5 block text-xl font-bold"
                      >
                        <span className="from-primary/50 to-primary/40 bg-linear-to-r bg-[length:0px_10px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 group-hover:bg-[length:100%_10px] hover:bg-[length:100%_3px]">
                          Stylish Kitchen And Dining Room With Functional Ideas
                        </span>
                      </a>
                    </h3>
                    <p>
                      Lorem Ipsum is simply dummy text of the print and
                      typesetting industry...
                    </p>

                    <div className="mt-4.5 flex flex-wrap items-center justify-between gap-3">
                      <div className="flex items-center gap-2.5">
                        <a
                          href="/author.html"
                          className="flex items-center gap-3"
                        >
                          <div className="flex h-6 w-6 overflow-hidden rounded-full">
                            <img src="images/user-01.png" alt="user" />
                          </div>
                          <p className="text-sm">Adrio Devid</p>
                        </a>

                        <span className="bg-dark-2 flex h-[3px] w-[3px] rounded-full"></span>

                        <p className="text-sm">Sep 10, 2025</p>
                      </div>
                      <a
                        href="/category.html"
                        className="text-green-dark bg-green/[0.08] inline-flex rounded-full px-3 py-1 text-sm font-medium"
                      >
                        Travel
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div x-show="selectedCategory === 'Health'">
                <div className="grid grid-cols-1 gap-x-7.5 gap-y-11 sm:grid-cols-2 lg:grid-cols-3">
                  <div className="group">
                    <div className="mb-6 overflow-hidden rounded-[10px] transition-all group-hover:scale-105">
                      <a href="/blog-single.html">
                        <img
                          src="images/blog-09.png"
                          alt="image"
                          className="w-full"
                        />
                      </a>
                    </div>

                    <h3>
                      <a
                        href="/blog-single.html"
                        className="text-dark mb-3.5 block text-xl font-bold"
                      >
                        <span className="from-primary/50 to-primary/40 bg-linear-to-r bg-[length:0px_10px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 group-hover:bg-[length:100%_10px] hover:bg-[length:100%_3px]">
                          Stylish Kitchen And Dining Room With Functional Ideas
                        </span>
                      </a>
                    </h3>
                    <p>
                      Lorem Ipsum is simply dummy text of the print and
                      typesetting industry...
                    </p>

                    <div className="mt-4.5 flex flex-wrap items-center justify-between gap-3">
                      <div className="flex items-center gap-2.5">
                        <a
                          href="/author.html"
                          className="flex items-center gap-3"
                        >
                          <div className="flex h-6 w-6 overflow-hidden rounded-full">
                            <img src="images/user-01.png" alt="user" />
                          </div>
                          <p className="text-sm">Adrio Devid</p>
                        </a>

                        <span className="bg-dark-2 flex h-[3px] w-[3px] rounded-full"></span>

                        <p className="text-sm">Sep 10, 2025</p>
                      </div>
                      <a
                        href="/category.html"
                        className="text-teal-dark bg-teal/[0.08] inline-flex rounded-full px-3 py-1 text-sm font-medium"
                      >
                        Health
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div x-show="selectedCategory === 'Culture'">
                <div className="grid grid-cols-1 gap-x-7.5 gap-y-11 sm:grid-cols-2 lg:grid-cols-3">
                  <div className="group">
                    <div className="mb-6 overflow-hidden rounded-[10px] transition-all group-hover:scale-105">
                      <a href="/blog-single.html">
                        <img
                          src="images/blog-10.png"
                          alt="image"
                          className="w-full"
                        />
                      </a>
                    </div>

                    <h3>
                      <a
                        href="/blog-single.html"
                        className="text-dark mb-3.5 block text-xl font-bold"
                      >
                        <span className="from-primary/50 to-primary/40 bg-linear-to-r bg-[length:0px_10px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 group-hover:bg-[length:100%_10px] hover:bg-[length:100%_3px]">
                          Stylish Kitchen And Dining Room With Functional Ideas
                        </span>
                      </a>
                    </h3>
                    <p>
                      Lorem Ipsum is simply dummy text of the print and
                      typesetting industry...
                    </p>

                    <div className="mt-4.5 flex flex-wrap items-center justify-between gap-3">
                      <div className="flex items-center gap-2.5">
                        <a
                          href="/author.html"
                          className="flex items-center gap-3"
                        >
                          <div className="flex h-6 w-6 overflow-hidden rounded-full">
                            <img src="images/user-01.png" alt="user" />
                          </div>
                          <p className="text-sm">Adrio Devid</p>
                        </a>

                        <span className="bg-dark-2 flex h-[3px] w-[3px] rounded-full"></span>

                        <p className="text-sm">Sep 10, 2025</p>
                      </div>
                      <a
                        href="/category.html"
                        className="text-cyan-dark bg-cyan/[0.08] inline-flex rounded-full px-3 py-1 text-sm font-medium"
                      >
                        Culture
                      </a>
                    </div>
                  </div>

                  <div className="group">
                    <div className="mb-6 overflow-hidden rounded-[10px] transition-all group-hover:scale-105">
                      <a href="/blog-single.html">
                        <img
                          src="images/blog-11.png"
                          alt="image"
                          className="w-full"
                        />
                      </a>
                    </div>

                    <h3>
                      <a
                        href="/blog-single.html"
                        className="text-dark mb-3.5 block text-xl font-bold"
                      >
                        <span className="from-primary/50 to-primary/40 bg-linear-to-r bg-[length:0px_10px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 group-hover:bg-[length:100%_10px] hover:bg-[length:100%_3px]">
                          Stylish Kitchen And Dining Room With Functional Ideas
                        </span>
                      </a>
                    </h3>
                    <p>
                      Lorem Ipsum is simply dummy text of the print and
                      typesetting industry...
                    </p>

                    <div className="mt-4.5 flex flex-wrap items-center justify-between gap-3">
                      <div className="flex items-center gap-2.5">
                        <a
                          href="/author.html"
                          className="flex items-center gap-3"
                        >
                          <div className="flex h-6 w-6 overflow-hidden rounded-full">
                            <img src="images/user-01.png" alt="user" />
                          </div>
                          <p className="text-sm">Adrio Devid</p>
                        </a>

                        <span className="bg-dark-2 flex h-[3px] w-[3px] rounded-full"></span>

                        <p className="text-sm">Sep 10, 2025</p>
                      </div>
                      <a
                        href="/category.html"
                        className="text-cyan-dark bg-cyan/[0.08] inline-flex rounded-full px-3 py-1 text-sm font-medium"
                      >
                        Culture
                      </a>
                    </div>
                  </div>

                  <div className="group">
                    <div className="mb-6 overflow-hidden rounded-[10px] transition-all group-hover:scale-105">
                      <a href="/blog-single.html">
                        <img
                          src="images/blog-12.png"
                          alt="image"
                          className="w-full"
                        />
                      </a>
                    </div>

                    <h3>
                      <a
                        href="/blog-single.html"
                        className="text-dark mb-3.5 block text-xl font-bold"
                      >
                        <span className="from-primary/50 to-primary/40 bg-linear-to-r bg-[length:0px_10px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 group-hover:bg-[length:100%_10px] hover:bg-[length:100%_3px]">
                          Stylish Kitchen And Dining Room With Functional Ideas
                        </span>
                      </a>
                    </h3>
                    <p>
                      Lorem Ipsum is simply dummy text of the print and
                      typesetting industry...
                    </p>

                    <div className="mt-4.5 flex flex-wrap items-center justify-between gap-3">
                      <div className="flex items-center gap-2.5">
                        <a
                          href="/author.html"
                          className="flex items-center gap-3"
                        >
                          <div className="flex h-6 w-6 overflow-hidden rounded-full">
                            <img src="images/user-01.png" alt="user" />
                          </div>
                          <p className="text-sm">Adrio Devid</p>
                        </a>

                        <span className="bg-dark-2 flex h-[3px] w-[3px] rounded-full"></span>

                        <p className="text-sm">Sep 10, 2025</p>
                      </div>
                      <a
                        href="/category.html"
                        className="text-cyan-dark bg-cyan/[0.08] inline-flex rounded-full px-3 py-1 text-sm font-medium"
                      >
                        Culture
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <button className="text-dark border-dark hover:bg-dark mx-auto mt-12.5 flex justify-center rounded-md border px-7.5 py-3 font-medium duration-200 ease-in hover:text-white lg:mt-17.5">
              Browse all Posts
            </button>
          </div>
        </div>
      </section>*/}
    </>
  );
}

interface HeroBlogCardProps {
  variant?: "large" | "small";
  id?: string;
  title: string;
  description: string;
  image: string;
  author: string;
  date: string;
  category: string;
  categoryColor?: string;
  imageAlt?: string;
  categoryBg?: string;
  slug?: string;
}

const HeroBlogCard: React.FC<{ props: HeroBlogCardProps }> = ({ props }) => {
  const {
    variant = "small",
    image,
    category,
    categoryColor,
    title,
    description,
    author,
    date,
    imageAlt = "image",
  } = props;
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

// Define types for Blog and Category
interface Blog {
  variant?: "large" | "small";
  id?: string;
  title: string;
  description: string;
  image: string;
  imageAlt?: string;
  author: string;
  date: string;
  category: string;
  categoryColor?: string;
  categoryBg?: string;
  slug?: string;
}

interface Category {
  name: string;
  count: number;
}

// Fake data
const blogData: Blog[] = [
  {
    id: "1",
    title: "Stylish Kitchen And Dining Room With Functional Ideas",
    description:
      "Lorem Ipsum is simply dummy text of the print and typesetting industry...",
    image: "/images/blog-01.png",
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
    author: "Adrio Devid",
    date: "Sep 10, 2025",
    category: "Culture",
    categoryColor: "text-cyan-dark",
    categoryBg: "bg-cyan/[0.08]",
    slug: "/blog-single",
  },
];

const categories: Category[] = [
  { name: "All", count: 20 },
  { name: "Technology", count: 3 },
  { name: "Lifestyle", count: 2 },
  { name: "Travel", count: 5 },
  { name: "Health", count: 9 },
  { name: "Culture", count: 1 },
];

// BlogCard Component
interface BlogCardProps {
  blog: Blog;
}

const BlogCard: React.FC<BlogCardProps> = ({ blog }) => {
  return (
    <div className="group">
      <div className="mb-6 overflow-hidden rounded-[10px] transition-all group-hover:scale-105">
        <Link href={blog.slug ?? ""}>
          <Image
            src={blog.image}
            alt={blog.imageAlt ?? "Image"}
            width={400}
            height={300}
            className="w-full"
          />
        </Link>
      </div>
      <h3>
        <Link
          href={blog.slug ?? ""}
          className="text-dark mb-3.5 block text-xl font-bold"
        >
          <span className="from-primary/50 to-primary/40 bg-linear-to-r bg-[length:0px_10px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 group-hover:bg-[length:100%_10px] hover:bg-[length:100%_3px]">
            {blog.title}
          </span>
        </Link>
      </h3>
      <p>{blog.description}</p>
      <div className="mt-4.5 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <Link href="/author" className="flex items-center gap-3">
            <div className="flex h-6 w-6 overflow-hidden rounded-full">
              <Image
                src="/images/user-01.png"
                alt="user"
                width={24}
                height={24}
              />
            </div>
            <p className="text-sm">{blog.author}</p>
          </Link>
          <span className="bg-dark-2 flex h-[3px] w-[3px] rounded-full"></span>
          <p className="text-sm">{blog.date}</p>
        </div>
        <Link
          href="/category"
          className={`inline-flex ${blog.categoryColor} ${blog.categoryBg} rounded-full px-3 py-1 text-sm font-medium`}
        >
          {blog.category}
        </Link>
      </div>
    </div>
  );
};

// BlogCategory Component
interface BlogCategoryProps {
  categories: Category[];
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

const BlogCategory: React.FC<BlogCategoryProps> = ({
  categories,
  selectedCategory,
  setSelectedCategory,
}) => {
  return (
    <div className="mb-15 flex flex-wrap items-center justify-center gap-4">
      {categories.map((category) => (
        <button
          key={category.name}
          className={`hover:bg-dark hover:border-dark rounded-full border px-4.5 py-2.5 font-medium duration-200 ease-in hover:text-white ${
            selectedCategory === category.name
              ? "bg-dark border-dark text-white"
              : "bg-gray border-gray-3 text-dark"
          }`}
          onClick={() => setSelectedCategory(category.name)}
        >
          {category.name} ({category.count})
        </button>
      ))}
    </div>
  );
};

// Main BlogSection Component
const BlogSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const filteredBlogs =
    selectedCategory === "All"
      ? blogData
      : blogData.filter((blog) => blog.category === selectedCategory);

  return (
    <section className="pt-20 pb-15 lg:pt-25">
      <div className="mx-auto max-w-[1170px] px-4 sm:px-8 xl:px-0">
        <div className="mb-12.5 text-center">
          <h2 className="text-dark xl:text-heading-3 mb-3.5 text-2xl font-bold sm:text-4xl">
            Browse by Category
          </h2>
          <p>Select a category to see more related content</p>
        </div>

        <BlogCategory
          categories={categories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        <div className="grid grid-cols-1 gap-x-7.5 gap-y-11 sm:grid-cols-2 lg:grid-cols-3">
          {filteredBlogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>

        <button className="text-dark border-dark hover:bg-dark mx-auto mt-12.5 flex justify-center rounded-md border px-7.5 py-3 font-medium duration-200 ease-in hover:text-white lg:mt-17.5">
          Browse all Posts
        </button>
      </div>
    </section>
  );
};
