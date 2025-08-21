import React from "react";

const NewsLetter = () => {
  return (
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
  );
};

export default NewsLetter;
