import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export interface BlogCardProps {
  variant?: 'large' | 'small' | 'compact';
  id: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  author: string;
  date: string;
  category: string;
  categoryColor?: string;
  categoryBg?: string;
  slug: string;
}

const BlogCardNew: React.FC<BlogCardProps> = ({
                                             variant = 'compact',
                                             id,
                                             title,
                                             description,
                                             image,
                                             imageAlt,
                                             author,
                                             date,
                                             category,
                                             categoryColor = 'primary',
                                             categoryBg = 'primary/10',
                                             slug,
                                           }) => {
  const isLarge = variant === 'large';
  const isCompact = variant === 'compact';

  return (
    <div
      className={`group shadow-md rounded-xl bg-white transition-all ${
        isCompact
          ? 'p-0'
          : isLarge
            ? 'flex w-full max-w-[1170px] flex-col lg:flex-row lg:items-center lg:gap-11 lg:p-2.5'
            : 'flex w-full flex-col gap-6 sm:flex-row sm:items-center lg:max-w-[570px] p-2.5'
      }`}
    >
      <div
        className={`w-full ${
          isCompact
            ? 'mb-6 overflow-hidden rounded-[10px] group-hover:scale-105'
            : isLarge
              ? 'lg:max-w-[536px]'
              : 'lg:max-w-[238px]'
        }`}
      >
        <Link href={slug}>
          <Image
            className="w-full object-cover"
            src={image}
            alt={imageAlt}
            width={isLarge ? 536 : isCompact ? 400 : 370}
            height={isLarge ? 280 : isCompact ? 300 : 280}
          />
        </Link>
      </div>

      <div
        className={`w-full ${isLarge ? 'lg:max-w-[540px]' : isCompact ? '' : 'lg:max-w-[272px]'}`}
      >
        <Link
          href="/category"
          className={`inline-flex rounded-full px-3 py-1 text-sm font-medium text-${categoryColor} bg-${categoryBg}`}
        >
          {category}
        </Link>

        {isLarge ? (
          <h1 className="text-2xl xl:text-3xl text-gray-900 mt-4 mb-4 font-bold">
            <Link href={slug}>{title}</Link>
          </h1>
        ) : (
          <h2
            className={`text-xl text-gray-900 mt-3 mb-3.5 font-semibold ${
              isCompact
                ? 'group-hover:bg-[length:100%_3px] bg-linear-to-r bg-[length:0px_10px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500'
                : ''
            }`}
          >
            <Link href={slug}>
              <span className={isCompact ? 'from-primary/50 to-primary/40' : ''}>
                {title}
              </span>
            </Link>
          </h2>
        )}

        {(isLarge || isCompact) && description && (
          <p className={isLarge ? 'max-w-[524px] text-gray-700' : 'text-gray-700'}>
            {description}
          </p>
        )}

        <div className="mt-4.5 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <Link href="/author" className="flex items-center gap-3">
              {(isLarge || isCompact) && (
                <div className="flex h-6 w-6 overflow-hidden rounded-full">
                  <Image
                    src="/images/user-01.png"
                    alt="user"
                    width={24}
                    height={24}
                  />
                </div>
              )}
              <p className="text-sm text-gray-600">{author}</p>
            </Link>
            <span className="bg-gray-400 flex h-[3px] w-[3px] rounded-full"></span>
            <p className="text-sm text-gray-600">{date}</p>
          </div>
          {isCompact && (
            <Link
              href="/category"
              className={`inline-flex text-${categoryColor} bg-${categoryBg} rounded-full px-3 py-1 text-sm font-medium`}
            >
              {category}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogCardNew;

export const BlogCard: React.FC<BlogCardProps> = ({
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
  return (
    <div className="group">
      <div className="mb-6 overflow-hidden rounded-[10px] transition-all group-hover:scale-105">
        <Link href={slug ?? ""}>
          <Image
            src={image}
            alt={imageAlt ?? "Image"}
            width={400}
            height={300}
            className="w-full"
          />
        </Link>
      </div>
      <h3>
        <Link
          href={slug ?? ""}
          className="text-dark mb-3.5 block text-xl font-bold"
        >
          <span className="from-primary/50 to-primary/40 bg-linear-to-r bg-[length:0px_10px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 group-hover:bg-[length:100%_10px] hover:bg-[length:100%_3px]">
            {title}
          </span>
        </Link>
      </h3>
      <p>{description}</p>
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
            <p className="text-sm">{author}</p>
          </Link>
          <span className="bg-dark-2 flex h-[3px] w-[3px] rounded-full"></span>
          <p className="text-sm">{date}</p>
        </div>
        <Link
          href="/category"
          className={`inline-flex ${categoryColor} ${categoryBg} rounded-full px-3 py-1 text-sm font-medium`}
        >
          {category}
        </Link>
      </div>
    </div>
  );
};
