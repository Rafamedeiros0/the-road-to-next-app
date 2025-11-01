"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export type SortSelectOptions = {
  sortKey: string;
  sortValue: string;
  label: string;
}[];

type SortObject = {
  sortKey: string;
  sortValue: string;
};

type SortSelectProps = {
  value: SortObject;
  onChange: (value: SortObject) => void;
  options: SortSelectOptions;
};

const SortSelect = ({ value, onChange, options }: SortSelectProps) => {
  const handleSort = (compositeKey: string) => {
    const [sortKey, sortValue] = compositeKey.split("_");

    onChange({
      sortKey,
      sortValue,
    });
  };

  return (
    <Select
      onValueChange={handleSort}
      defaultValue={value.sortKey + "_" + value.sortValue}
    >
      <SelectTrigger>
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        {options.map((option) => (
          <SelectItem
            key={option.sortKey + option.sortValue}
            value={option.sortKey + "_" + option.sortValue}
          >
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export { SortSelect };
