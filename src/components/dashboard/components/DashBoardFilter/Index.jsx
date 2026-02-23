"use client";

import { useState, useEffect } from "react";
import { categories, ratings } from "./constants/Index";
import { CustomSelect } from "@/common/select-custom/Index";

const DashBoardFilter = ({ setFilters }) => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [rating, setRating] = useState("");
  const [inStock, setInStock] = useState(false);

  useEffect(() => {
    setFilters({ search, category, rating, inStock });
  }, [search, category, rating, inStock, setFilters]);

  return (
    <div className="w-full bg-[#13131f] border-b border-gray-800 p-4 sticky top-[64px] md:top-0 z-20">
      <div className="max-w-7xl mx-auto flex flex-col xl:flex-row gap-4 items-center justify-between">
        {/* Search Bar */}
        <div className="relative w-full xl:w-auto flex-1 xl:max-w-md group">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 group-focus-within:text-cyan-400 transition-colors"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
          <input
            type="text"
            placeholder="Search products..."
            className="w-full bg-[#1e1e2f] border border-gray-700 text-gray-200 text-sm rounded-lg focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-400 block pl-10 px-3 py-2.5 outline-none transition-all placeholder-gray-500"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Filter Controls */}
        <div className="grid grid-cols-2 sm:grid-cols-3 xl:flex w-full xl:w-auto gap-3">
          <div className="col-span-1 w-full">
            <CustomSelect
              options={categories}
              className="w-full bg-[#1e1e2f] border border-gray-700 text-gray-200 text-sm rounded-lg focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-400 px-3 py-2.5 outline-none transition-all cursor-pointer xl:min-w-[140px]"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>

          <div className="col-span-1 w-full">
            <CustomSelect
              options={ratings}
              className="w-full bg-[#1e1e2f] border border-gray-700 text-gray-200 text-sm rounded-lg focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-400 px-3 py-2.5 outline-none transition-all cursor-pointer xl:min-w-[140px]"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
            />
          </div>

          <label className="col-span-2 sm:col-span-1 flex items-center justify-center xl:justify-start gap-2 cursor-pointer text-sm font-medium text-gray-400 hover:text-gray-200 transition-colors bg-[#1e1e2f] border border-gray-700 hover:border-gray-600 px-4 py-2.5 rounded-lg select-none w-full">
            <input
              type="checkbox"
              className="w-4 h-4 rounded border-gray-600 bg-[#13131f] text-cyan-500 focus:ring-cyan-500 focus:ring-offset-[#1e1e2f] focus:ring-2 accent-cyan-500 cursor-pointer"
              checked={inStock}
              onChange={(e) => setInStock(e.target.checked)}
            />
            In Stock Only
          </label>
        </div>
      </div>
    </div>
  );
};

export default DashBoardFilter;