"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const Header: React.FC = () => {
  const [stickyMenu, setStickyMenu] = useState(false);
  const [navigationOpen, setNavigationOpen] = useState(false);
  const [homeDropdown, setHomeDropdown] = useState(false);
  const [pagesDropdown, setPagesDropdown] = useState(false);
  const [blogsDropdown, setBlogsDropdown] = useState(false);
  const [modalSearch, setModalSearch] = useState(false);
  const [modalNewsletter, setModalNewsletter] = useState(false);
  const [currentPage, setCurrentPage] = useState("home"); // Adjust based on routing

  useEffect(() => {
    const handleScroll = () => {
      setStickyMenu(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 z-[9999] w-full bg-white py-7 transition-all duration-300 ease-in-out lg:py-0 ${
        stickyMenu ? "py-4 shadow-sm lg:py-0" : ""
      }`}
    >
      <div className="relative mx-auto max-w-[1170px] items-center justify-between px-4 sm:px-8 lg:flex xl:px-0">
        <div className="flex w-full items-center justify-between lg:w-3/12">
          <Link href="/">
            <Image src="/images/logo.svg" alt="Logo" width={100} height={40} />
          </Link>

          {/* Hamburger Toggle Button */}
          <button
            id="menuToggler"
            aria-label="button for menu toggle"
            className="block lg:hidden"
            onClick={() => setNavigationOpen(!navigationOpen)}
          >
            <span className="relative block h-[22px] w-[22px] cursor-pointer">
              <span className="absolute right-0 h-full w-full">
                <span
                  className={`relative top-0 left-0 my-1 block h-[2px] rounded-[2px] bg-gray-800 duration-200 ease-in-out ${
                    navigationOpen ? "w-0 delay-0" : "w-full delay-300"
                  }`}
                ></span>
                <span
                  className={`relative top-0 left-0 my-1 block h-[2px] rounded-[2px] bg-gray-800 duration-200 ease-in-out ${
                    navigationOpen ? "w-0 delay-150" : "w-full delay-400"
                  }`}
                ></span>
                <span
                  className={`relative top-0 left-0 my-1 block h-[2px] rounded-[2px] bg-gray-800 duration-200 ease-in-out ${
                    navigationOpen ? "w-0 delay-200" : "w-full delay-500"
                  }`}
                ></span>
              </span>
              <span className="absolute right-0 h-full w-full rotate-45">
                <span
                  className={`absolute top-0 left-[10px] block h-full w-[2px] rounded-[2px] bg-gray-800 duration-200 ease-in-out ${
                    navigationOpen ? "h-full delay-300" : "h-0 delay-0"
                  }`}
                ></span>
                <span
                  className={`absolute top-[10px] left-0 block h-[2px] w-full rounded-[2px] bg-gray-800 duration-200 ease-in-out ${
                    navigationOpen ? "h-[2px] delay-400" : "h-0 delay-200"
                  }`}
                ></span>
              </span>
            </span>
          </button>
        </div>

        <div
          className={`invisible h-0 w-full items-center justify-between lg:visible lg:flex lg:h-auto lg:w-9/12 ${
            navigationOpen
              ? "visible relative mt-4 h-auto max-h-[400px] overflow-y-scroll rounded-md bg-white p-7.5 shadow-lg"
              : ""
          }`}
        >
          {/* Main Navigation */}
          <nav>
            <ul className="flex flex-col gap-5 lg:flex-row lg:items-center lg:gap-10">
              {/* Home Dropdown */}
              <li
                className={`group relative lg:py-6.5 ${stickyMenu ? "lg:py-4" : ""}`}
              >
                <button
                  className={`flex items-center justify-between gap-3 ${
                    ["personal-blog", "home"].includes(currentPage)
                      ? "text-gray-800"
                      : ""
                  } hover:text-gray-800`}
                  onClick={() => setHomeDropdown(!homeDropdown)}
                >
                  Home
                  <svg
                    className="h-3 w-3 cursor-pointer fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                  </svg>
                </button>
                <ul
                  className={`mt-2 flex-col gap-2 lg:absolute lg:rounded-md lg:bg-white lg:p-4 lg:shadow-lg ${
                    homeDropdown ? "flex" : "hidden"
                  }`}
                >
                  <li>
                    <Link
                      href="/"
                      className={`flex rounded-md px-4 py-2 text-sm hover:bg-gray-100 hover:text-blue-600 ${
                        currentPage === "home"
                          ? "bg-gray-100 text-blue-600"
                          : ""
                      }`}
                    >
                      Business Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/personal-blog"
                      className={`flex rounded-md px-4 py-2 text-sm hover:bg-gray-100 hover:text-blue-600 ${
                        currentPage === "personal-blog"
                          ? "bg-gray-100 text-blue-600"
                          : ""
                      }`}
                    >
                      Personal Blog
                    </Link>
                  </li>
                </ul>
              </li>

              {/* Pages Dropdown */}
              <li
                className={`group relative lg:py-6.5 ${stickyMenu ? "lg:py-4" : ""}`}
              >
                <button
                  className={`flex items-center justify-between gap-3 ${
                    [
                      "category",
                      "about",
                      "author",
                      "search",
                      "privacy-policy",
                      "style-guide",
                      "signin",
                      "signup",
                      "404",
                    ].includes(currentPage)
                      ? "text-gray-800"
                      : ""
                  } hover:text-gray-800`}
                  onClick={() => setPagesDropdown(!pagesDropdown)}
                >
                  Pages
                  <svg
                    className="h-3 w-3 cursor-pointer fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                  </svg>
                </button>
                <ul
                  className={`mt-2 flex-col gap-2 lg:absolute lg:rounded-md lg:bg-white lg:p-4 lg:shadow-lg ${
                    pagesDropdown ? "flex" : "hidden"
                  }`}
                >
                  <li>
                    <Link
                      href="/category"
                      className={`flex rounded-md px-4 py-2 text-sm hover:bg-gray-100 hover:text-blue-600 ${
                        currentPage === "category"
                          ? "bg-gray-100 text-blue-600"
                          : ""
                      }`}
                    >
                      Category Page
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about"
                      className={`flex rounded-md px-4 py-2 text-sm hover:bg-gray-100 hover:text-blue-600 ${
                        currentPage === "about"
                          ? "bg-gray-100 text-blue-600"
                          : ""
                      }`}
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/author"
                      className={`flex rounded-md px-4 py-2 text-sm hover:bg-gray-100 hover:text-blue-600 ${
                        currentPage === "author"
                          ? "bg-gray-100 text-blue-600"
                          : ""
                      }`}
                    >
                      Author Page
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/search"
                      className={`flex rounded-md px-4 py-2 text-sm hover:bg-gray-100 hover:text-blue-600 ${
                        currentPage === "search"
                          ? "bg-gray-100 text-blue-600"
                          : ""
                      }`}
                    >
                      Search Page
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/signin"
                      className={`flex rounded-md px-4 py-2 text-sm hover:bg-gray-100 hover:text-blue-600 ${
                        currentPage === "signin"
                          ? "bg-gray-100 text-blue-600"
                          : ""
                      }`}
                    >
                      Sign In
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/signup"
                      className={`flex rounded-md px-4 py-2 text-sm hover:bg-gray-100 hover:text-blue-600 ${
                        currentPage === "signup"
                          ? "bg-gray-100 text-blue-600"
                          : ""
                      }`}
                    >
                      Sign Up
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/style-guide"
                      className={`flex rounded-md px-4 py-2 text-sm hover:bg-gray-100 hover:text-blue-600 ${
                        currentPage === "style-guide"
                          ? "bg-gray-100 text-blue-600"
                          : ""
                      }`}
                    >
                      Style Guide Page
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/privacy-policy"
                      className={`flex rounded-md px-4 py-2 text-sm hover:bg-gray-100 hover:text-blue-600 ${
                        currentPage === "privacy-policy"
                          ? "bg-gray-100 text-blue-600"
                          : ""
                      }`}
                    >
                      Privacy & Policy Page
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/404"
                      className={`flex rounded-md px-4 py-2 text-sm hover:bg-gray-100 hover:text-blue-600 ${
                        currentPage === "404" ? "bg-gray-100 text-blue-600" : ""
                      }`}
                    >
                      Error Page
                    </Link>
                  </li>
                </ul>
              </li>

              {/* Blogs Dropdown */}
              <li
                className={`group relative lg:py-6.5 ${stickyMenu ? "lg:py-4" : ""}`}
              >
                <button
                  className={`flex items-center justify-between gap-3 ${
                    [
                      "blog-single",
                      "blog-single-2",
                      "blog-single-3",
                      "archive",
                    ].includes(currentPage)
                      ? "text-gray-800"
                      : ""
                  } hover:text-gray-800`}
                  onClick={() => setBlogsDropdown(!blogsDropdown)}
                >
                  Blogs
                  <svg
                    className="h-3 w-3 cursor-pointer fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                  </svg>
                </button>
                <ul
                  className={`mt-2 flex-col gap-2 lg:absolute lg:rounded-md lg:bg-white lg:p-4 lg:shadow-lg ${
                    blogsDropdown ? "flex" : "hidden"
                  }`}
                >
                  <li>
                    <Link
                      href="/blog-single"
                      className={`flex rounded-md px-4 py-2 text-sm hover:bg-gray-100 hover:text-blue-600 ${
                        currentPage === "blog-single"
                          ? "bg-gray-100 text-blue-600"
                          : ""
                      }`}
                    >
                      Blog Details One
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/blog-single-2"
                      className={`flex rounded-md px-4 py-2 text-sm hover:bg-gray-100 hover:text-blue-600 ${
                        currentPage === "blog-single-2"
                          ? "bg-gray-100 text-blue-600"
                          : ""
                      }`}
                    >
                      Blog Details Two
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/blog-single-3"
                      className={`flex rounded-md px-4 py-2 text-sm hover:bg-gray-100 hover:text-blue-600 ${
                        currentPage === "blog-single-3"
                          ? "bg-gray-100 text-blue-600"
                          : ""
                      }`}
                    >
                      Blog Details Three
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/blog-archive"
                      className={`flex rounded-md px-4 py-2 text-sm hover:bg-gray-100 hover:text-blue-600 ${
                        currentPage === "archive"
                          ? "bg-gray-100 text-blue-600"
                          : ""
                      }`}
                    >
                      Blog Archive Page
                    </Link>
                  </li>
                </ul>
              </li>

              {/* Support Link */}
              <li
                className={`nav__menu lg:py-6.5 ${stickyMenu ? "lg:py-4" : ""}`}
              >
                <Link href="/signin" className="hover:text-gray-800">
                  Support
                </Link>
              </li>
            </ul>
          </nav>

          {/* Nav Right */}
          <div className="mt-7 flex flex-wrap items-center gap-8.5 lg:mt-0">
            {/* Social Links */}
            <div className="flex items-center gap-1.5">
              <a
                id="facebookBtn"
                aria-label="facebook social link"
                href="#"
                className="flex h-[30px] w-[30px] items-center justify-center rounded-full hover:bg-gray-100 hover:text-gray-800 lg:transition-all lg:duration-200"
              >
                <svg
                  className="fill-current"
                  width="19"
                  height="18"
                  viewBox="0 0 19 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.4 8.58585V6.07664C10.4 5.10529 11.2059 4.31785 12.2 4.31785H14V1.67966L11.5565 1.50912C9.47255 1.36368 7.7 2.97636 7.7 5.01777V8.58585H5V11.224H7.7V16.5H10.4V11.224H13.1L14 8.58585H10.4Z" />
                </svg>
              </a>
              <a
                id="twitterBtn"
                aria-label="twitter social link"
                href="#"
                className="flex h-[30px] w-[30px] items-center justify-center rounded-full hover:bg-gray-100 hover:text-gray-800 lg:transition-all lg:duration-200"
              >
                <svg
                  className="fill-current"
                  width="19"
                  height="18"
                  viewBox="0 0 19 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_739_364)">
                    <path d="M16.2781 4.30313L17.3469 2.95313C17.6562 2.5875 17.7406 2.30625 17.7688 2.16562C16.925 2.67188 16.1375 2.84063 15.6312 2.84063H15.4344L15.3219 2.72813C14.6469 2.1375 13.8031 1.82812 12.9031 1.82812C10.9344 1.82812 9.3875 3.45938 9.3875 5.34375C9.3875 5.45625 9.3875 5.625 9.41563 5.7375L9.5 6.3L8.90938 6.27188C5.30937 6.15938 2.35625 3.06563 1.87813 2.53125C1.09063 3.9375 1.54063 5.2875 2.01875 6.13125L2.975 7.70625L1.45625 6.8625C1.48438 8.04375 1.93437 8.97188 2.80625 9.64688L3.56562 10.2094L2.80625 10.5188C3.28437 11.9531 4.35313 12.5438 5.14062 12.7688L6.18125 13.05L5.19688 13.725C3.62188 14.85 1.65312 14.7656 0.78125 14.6813C2.55313 15.9188 4.6625 16.2 6.125 16.2C7.22188 16.2 8.0375 16.0875 8.23438 16.0031C16.1094 14.1469 16.475 7.11563 16.475 5.70938V5.5125L16.6438 5.4C17.6 4.5 17.9937 4.02188 18.2188 3.74063C18.1344 3.76875 18.0219 3.825 17.9094 3.85313L16.2781 4.30313Z" />
                  </g>
                  <defs>
                    <clipPath id="clip0_739_364">
                      <rect
                        width="18"
                        height="18"
                        fill="white"
                        transform="translate(0.5)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </a>
              <a
                id="linkedinBtn"
                aria-label="linkedin social link"
                href="#"
                className="flex h-[30px] w-[30px] items-center justify-center rounded-full hover:bg-gray-100 hover:text-gray-800 lg:transition-all lg:duration-200"
              >
                <svg
                  className="fill-current"
                  width="19"
                  height="18"
                  viewBox="0 0 19 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M5.50004 3.50068C5.49976 4.11141 5.12924 4.661 4.56318 4.89028C3.99713 5.11957 3.34858 4.98277 2.92335 4.54439C2.49812 4.10601 2.38114 3.45359 2.62755 2.89478C2.87397 2.33597 3.43458 1.98236 4.04504 2.00068C4.85584 2.02502 5.5004 2.68951 5.50004 3.50068ZM5.54504 6.11068H2.54504V15.5007H5.54504V6.11068ZM10.2851 6.11068H7.30004V15.5007H10.2551V10.5732C10.2551 7.82816 13.8326 7.57316 13.8326 10.5732V15.5007H16.7951V9.55316C16.7951 4.92568 11.5001 5.09818 10.2551 7.37066L10.2851 6.11068Z" />
                </svg>
              </a>
              <a
                id="pinterestBtn"
                aria-label="pinterest social link"
                href="#"
                className="flex h-[30px] w-[30px] items-center justify-center rounded-full hover:bg-gray-100 hover:text-gray-800 lg:transition-all lg:duration-200"
              >
                <svg
                  className="fill-current"
                  width="19"
                  height="18"
                  viewBox="0 0 19 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1.00623 9.02818C1.06248 11.6438 2.27186 14.2594 4.32497 15.8344C4.97185 16.3126 5.67497 16.5938 6.40622 16.9032C6.09685 14.9063 6.85622 12.9094 7.2781 10.9407C7.33435 10.7438 7.36247 10.5188 7.36247 10.2938C7.36247 9.98443 7.24997 9.67505 7.1656 9.36568C7.08122 8.85943 7.13747 8.32505 7.36247 7.84693C7.67185 7.20005 8.4031 6.6938 9.04997 6.94693C9.6406 7.17193 9.8656 7.95943 9.7531 8.57818C9.6406 9.22505 9.3031 9.78755 9.13435 10.4063C8.93747 11.0251 8.9656 11.7844 9.4156 12.2063C9.83747 12.6001 10.5125 12.6282 11.0468 12.4032C11.8343 12.0657 12.3406 11.2782 12.65 10.4907C13.2125 9.02818 13.1 7.17193 11.9468 6.10318C11.4687 5.62505 10.7937 5.31568 10.0625 5.20318C8.82497 5.0063 7.47497 5.37193 6.6031 6.27193C5.73122 7.17193 5.33747 8.55005 5.7031 9.7313C5.8156 10.1251 6.0406 10.5188 6.12497 10.9126C6.20935 11.3063 6.18122 11.8126 5.89997 12.0938C5.87185 12.1219 5.84372 12.1501 5.78747 12.1782C5.73122 12.2063 5.64685 12.1501 5.5906 12.1219C5.05622 11.7844 4.63435 11.2501 4.38122 10.6876C3.59372 8.97193 3.98747 6.83443 5.22497 5.42818C6.46247 4.02193 8.45935 3.34693 10.3156 3.60005C12.0593 3.82505 13.775 4.86568 14.5062 6.4688C14.9562 7.42505 15.0406 8.52193 14.8718 9.56255C14.7031 10.6313 14.2812 11.6438 13.5781 12.4594C12.875 13.2751 11.8625 13.8376 10.7937 13.8938C9.92185 13.9501 8.99372 13.6407 8.54372 12.9094C8.26247 14.4282 7.7281 15.9188 6.9406 17.2407C6.91247 17.2969 8.7406 17.6907 8.90935 17.6907C10.9906 17.8594 13.2125 17.0438 14.8437 15.7501C19.3437 12.1782 18.8656 5.3438 14.4218 1.96881C12.1156 0.196933 9.38747 -0.140567 6.68747 0.815684C5.87185 1.09693 5.11247 1.57506 4.40935 2.08131C3.28436 2.92505 2.38436 4.02193 1.79373 5.28755C1.20311 6.44068 0.978106 7.73443 1.00623 9.02818Z" />
                </svg>
              </a>
            </div>

            {/* Button Links */}
            <div className="flex items-center gap-4.5">
              <button
                id="searchModalButton"
                aria-label="button for modal open"
                onClick={() => setModalSearch(true)}
                className="flex h-11 w-11 items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 hover:text-gray-800 lg:transition-all lg:duration-200 lg:ease-linear"
              >
                <svg
                  className="fill-current"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M19.1875 17.4063L14.0313 13.2188C16.1563 10.3125 15.9375 6.15625 13.2812 3.53125C11.875 2.125 10 1.34375 8 1.34375C6 1.34375 4.125 2.125 2.71875 3.53125C-0.1875 6.4375 -0.1875 11.1875 2.71875 14.0938C4.125 15.5 6 16.2813 8 16.2813C9.90625 16.2813 11.6875 15.5625 13.0938 14.2813L18.3125 18.5C18.4375 18.5938 18.5938 18.6563 18.75 18.6563C18.9688 18.6563 19.1562 18.5625 19.2812 18.4063C19.5312 18.0938 19.5 17.6563 19.1875 17.4063ZM8 14.875C6.375 14.875 4.875 14.25 3.71875 13.0938C1.34375 10.7188 1.34375 6.875 3.71875 4.53125C4.875 3.375 6.375 2.75 8 2.75C9.625 2.75 11.125 3.375 12.2812 4.53125C14.6562 6.90625 14.6562 10.75 12.2812 13.0938C11.1562 14.25 9.625 14.875 8 14.875Z" />
                </svg>
              </button>
              <button
                onClick={() => setModalNewsletter(true)}
                className="flex rounded-md bg-gray-800 px-5.5 py-2.5 font-medium text-white hover:opacity-90 lg:transition-all lg:duration-200 lg:ease-linear"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
