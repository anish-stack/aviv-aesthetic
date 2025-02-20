import Link from 'next/link';
import React from 'react';

interface BreadCrumbProps {
  name: string;
}

const BreadCrumb = ({ name }: BreadCrumbProps) => {
  return (
    <ol
      className="flex lg:container lg:py-5 px-3 py-3 lg:mt-4 mt-20 items-center whitespace-nowrap bg-gray-50 mb-5"
      aria-label="Breadcrumb"
    >
      <li className="inline-flex items-center">
        <Link
          href="/"
          className="flex items-center text-sm text-gray-500 hover:text-purple-500 focus:outline-none focus:text-purple-500 dark:focus:text-purple-500"
        >
          Home
        </Link>
        <svg
          className="flex-shrink-0 size-5 text-gray-400 dark:text-gray-600 mx-2"
          width={16}
          height={16}
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path d="M6 13L10 3" stroke="currentColor" strokeLinecap="round" />
        </svg>
      </li>
      <li className="inline-flex items-center">
        <a
          className="flex items-center text-sm text-gray-500 hover:text-purple-500 focus:outline-none focus:text-purple-500 dark:focus:text-purple-500"
          href="#"
        >
          {name}
        </a>
      </li>
    </ol>
  );
};

export default BreadCrumb;
