import React, { useState } from "react";
import { Button } from "@nextui-org/button";
import { usePagination, PaginationItemType } from "@nextui-org/pagination";
// import { ChevronIcon } from "./ChevronIcon";

const Galeria = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const { activePage, range, setPage, onNext, onPrevious } = usePagination({
    total: images.length,
    showControls: false,
    siblings: 1,
    boundaries: 1,
  });

  const handlePrev = () => {
    setActiveIndex((prevIndex) => {
      const newIndex = prevIndex === 0 ? images.length - 1 : prevIndex - 1;
      setPage(newIndex + 1);
      return newIndex;
    });
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => {
      const newIndex = prevIndex === images.length - 1 ? 0 : prevIndex + 1;
      setPage(newIndex + 1);
      return newIndex;
    });
  };

  return (
    <div
      id="gallery"
      className={`relative w-full ${images.length === 1 ? "spanfuera" : ""}`}
      data-carousel="slide"
    >
      <div className="relative h-56 overflow-hidden md:h-96 flex justify-center items-center w-full">
        {images.map((src, index) => (
          <div
            key={index}
            className={`absolute inset-0 flex justify-center items-center transition-opacity duration-700 ease-in-out ${
              index === activeIndex ? "opacity-100" : "opacity-0"
            }`}
            data-carousel-item={index === activeIndex ? "active" : ""}
          >
            <img
              src={src}
              className="object-cover object-center rounded-2xl absolute block w-full max-w-[full] h-[80%] shadow-lg -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt=""
            />
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center h-auto flex-col">

      <div className="flex justify-between p-2 w-full">
      <button
          type="button"
          className="flex items-center   h-auto px-4 cursor-pointer group focus:outline-none "
        >
          <Button
            onClick={handlePrev}
            isIconOnly
            className="inline- w-auto h-10 rounded-full bg-white/30 dark:bg-cyan-300-800/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none"
          >
            <svg
              className="w-2 h-3 text-black rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
            <span className="sr-only">Previous</span>
          </Button>
        </button>
        <div className="flex justify-center items-center ">
        <ul className="flex gap-2 items-center">
          {range.map((page) => {
            if (page === PaginationItemType.NEXT) {
              return (
                <li key={page} aria-label="next page" className="w-4 h-4">
                  <button
                    className="w-full h-full bg-default-200 rounded-full"
                    onClick={() => {
                      onNext();
                      handleNext();
                    }}
                  >
                    {/* <ChevronIcon className="rotate-180" /> */}
                  </button>
                </li>
              );
            }

            if (page === PaginationItemType.PREV) {
              return (
                <li key={page} aria-label="previous page" className="w-4 h-4">
                  <button
                    className="w-full h-full bg-default-200 rounded-full flex justify-center items-center"
                    onClick={() => {
                      onPrevious();
                      handlePrev();
                    }}
                  >
                    {/* <ChevronIcon /> */}
                  </button>
                </li>
              );
            }

            if (page === PaginationItemType.DOTS) {
              return (
                <li key={page} className="w-4 h-4">
                  ...
                </li>
              );
            }

            return (
              <li key={page} aria-label={`page ${page}`} className="w-4 h-4">
                <button
                  className={`w-full h-full bg-default-200 rounded-full ${
                    activePage === page ? "bg-default-400" : ""
                  }`}
                  onClick={() => {
                    setPage(page);
                    setActiveIndex(page - 1);
                  }}
                />
              </li>
            );
          })}
        </ul>
      </div>
        <button
          type="button"
          className="flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        >
          <Button
            isIconOnly
            onClick={handleNext}
            className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-cyan-300-800/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none"
          >
            <svg
              className="w-2 h-3 dark:text-teal-white rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span className="sr-only">Next</span>
          </Button>
        </button>
      </div>
        
      </div>

    </div>
  );
};

export default Galeria;
