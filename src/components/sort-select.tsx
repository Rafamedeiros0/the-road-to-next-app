"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { sortParser } from "@/features/ticket/search-params";
import { useQueryState } from "nuqs";

type Options = {
  label: string;
  value: string;
}[];

type SortSelectProps = {
  options: Options;
};

const SortSelect = ({ options }: SortSelectProps) => {
  const [sort, setSort] = useQueryState("sort", sortParser);

  const handleSort = (value: string) => {
    setSort(value);
  };

  return (
    <Select onValueChange={handleSort} defaultValue={sort}>
      <SelectTrigger>
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        {options.map((option) => (
          <SelectItem key={option.value} value={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export { SortSelect };
