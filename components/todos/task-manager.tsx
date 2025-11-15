"use client";

import { useState } from "react";
import { Search, Plus, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { AddTaskModal } from "./modules/add-tasks-modal";

interface FilterOption {
  id: string;
  label: string;
}

const dateFilterOptions: FilterOption[] = [
  { id: "today", label: "Deadline Today" },
  { id: "5days", label: "Expires in 5 days" },
  { id: "10days", label: "Expires in 10 days" },
  { id: "30days", label: "Expires in 30 days" },
];

export function TaskManager() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const handleFilterChange = (filterId: string) => {
    setSelectedFilters((prev) =>
      prev.includes(filterId)
        ? prev.filter((id) => id !== filterId)
        : [...prev, filterId]
    );
  };

 

  return (
    <div className="">
      {/* Header with Search and Filter */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-6">
        <div className="relative flex-1 flex items-center justify-between">
          <Input
            type="text"
            placeholder="Search your task here..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-4 pr-12 py-4 text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-lg transition-colors">
            <Search size={20} />
          </button>
        </div>

        {/* Filter Dropdown */}
        <div className="relative">
          <button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg bg-white hover:bg-gray-50 transition-colors"
          >
            <span className="text-sm font-medium">Filter By</span>
            <ChevronDown
              size={18}
              className={`transition-transform ${
                isFilterOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {isFilterOpen && (
            <div className="absolute top-full right-0 mt-2 bg-white border border-gray-300 rounded-lg shadow-lg z-10 w-56">
              <div className="p-4">
                <h3 className="text-sm font-semibold text-gray-700 mb-3">
                  Date
                </h3>
                <div className="space-y-3">
                  {dateFilterOptions.map((option) => (
                    <div key={option.id} className="flex items-center gap-3">
                      <Checkbox
                        id={option.id}
                        checked={selectedFilters.includes(option.id)}
                        onCheckedChange={() => handleFilterChange(option.id)}
                      />
                      <label
                        htmlFor={option.id}
                        className="text-sm text-gray-700 cursor-pointer hover:text-gray-900"
                      >
                        {option.label}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Empty State Container */}
      <div className="border-2 border-gray-300 rounded-lg bg-white p-8 md:p-12">
        <div className="flex flex-col items-center justify-center min-h-[400px]">
          <div className="mb-8">
            <svg viewBox="0 0 400 300" className="w-64 h-48 text-gray-300">
              {/* Left card */}
              <rect
                x="40"
                y="80"
                width="120"
                height="140"
                rx="12"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              />
              <rect
                x="50"
                y="90"
                width="30"
                height="30"
                rx="4"
                fill="currentColor"
                opacity="0.2"
              />
              <rect
                x="90"
                y="90"
                width="60"
                height="8"
                rx="2"
                fill="currentColor"
                opacity="0.2"
              />
              <rect
                x="50"
                y="130"
                width="100"
                height="6"
                rx="2"
                fill="currentColor"
                opacity="0.2"
              />
              <rect
                x="50"
                y="145"
                width="100"
                height="6"
                rx="2"
                fill="currentColor"
                opacity="0.2"
              />
              <rect
                x="50"
                y="160"
                width="100"
                height="6"
                rx="2"
                fill="currentColor"
                opacity="0.2"
              />

              {/* Right card - highlighted */}
              <rect
                x="180"
                y="60"
                width="130"
                height="160"
                rx="12"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              />
              <rect
                x="190"
                y="75"
                width="40"
                height="40"
                rx="4"
                fill="#4f46e5"
              />
              <rect
                x="240"
                y="80"
                width="60"
                height="8"
                rx="2"
                fill="currentColor"
                opacity="0.3"
              />
              <rect
                x="190"
                y="125"
                width="110"
                height="8"
                rx="2"
                fill="currentColor"
                opacity="0.2"
              />
              <rect
                x="190"
                y="145"
                width="110"
                height="8"
                rx="2"
                fill="currentColor"
                opacity="0.2"
              />
              <rect
                x="190"
                y="165"
                width="110"
                height="8"
                rx="2"
                fill="currentColor"
                opacity="0.2"
              />
            </svg>
          </div>

          {/* Empty State Text */}
          <h3 className="text-2xl font-semibold text-gray-800 text-center">
            No todos yet
          </h3>
        </div>
      </div>
    </div>
  );
}
