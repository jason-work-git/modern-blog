"use client";

import HomePage from "@/components/pages/home";

export default function Page_Home() {
  return (
    <>
      <HomePage />
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
