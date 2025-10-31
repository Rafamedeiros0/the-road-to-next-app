"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Input } from "./ui/input";

type SearchInputProps = {
  placeholder: string;
};

const SearchInput = ({ placeholder }: SearchInputProps) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    const params = new URLSearchParams(searchParams.toString());

    if (query) {
      params.set("search", query);
    } else {
      params.delete("search");
    }

    replace(`${pathname}?${params.toString()}`, {
      scroll: false,
    });
  };

  return <Input placeholder={placeholder} onChange={handleSearch} />;
};

export { SearchInput };
