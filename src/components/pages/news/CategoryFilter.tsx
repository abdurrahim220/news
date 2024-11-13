import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface CategoryProps {
  selectCategory: (category: string) => void;
}

const CategoryFilter = ({ selectCategory }: CategoryProps) => {
  const categories = ["all", "tech", "health", "sports", "business"];

  return (
    <div className="flex flex-col md:flex-row md:items-center gap-3 w-full md:w-auto">
      <h3 className="text-center md:text-left">Filter by Category</h3>
      <div className="w-full md:w-[280px]">
        <Select onValueChange={(value) => selectCategory(value)}>
          <SelectTrigger className="w-full border rounded-md">
            <SelectValue placeholder="Select Category" />
          </SelectTrigger>
          <SelectContent>
            {categories.map((category) => (
              <SelectItem key={category} value={category}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default CategoryFilter;
