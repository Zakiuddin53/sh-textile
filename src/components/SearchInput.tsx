"use client";

import { TextInput } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "@mantine/hooks";

interface SearchInputProps {
  defaultValue?: string;
}

export function SearchInput({ defaultValue = "" }: SearchInputProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleSearch = useDebouncedCallback((value: string) => {
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set("search", value);
      params.delete("page");
    } else {
      params.delete("search");
    }
    router.push(`${pathname}?${params.toString()}`);
  }, 500);

  return (
    <TextInput
      placeholder="Search by name, order number, or phone"
      leftSection={<IconSearch size={16} />}
      defaultValue={defaultValue}
      onChange={(e) => handleSearch(e.currentTarget.value)}
    />
  );
} 