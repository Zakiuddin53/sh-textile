"use client";

import { Table, Text, Badge, Button, Group, TextInput, Pagination, Stack } from "@mantine/core";
import { IconEdit, IconEye, IconSearch } from "@tabler/icons-react";
import Link from "next/link";
import { format } from "date-fns";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "@mantine/hooks";
import { useEffect, useState } from "react";

interface Measurement {
  id: number;
  createdAt: Date;
  username: string;
  orderNumber: string;
  phone: string;
  address: string;
}

interface MeasurementsListProps {
  measurements: Measurement[];
  total: number;
  page: number;
  search: string;
}

export default function MeasurementsList({ measurements, total, page, search: initialSearch }: MeasurementsListProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [searchValue, setSearchValue] = useState(initialSearch);

  useEffect(() => {
    setSearchValue(initialSearch);
  }, [initialSearch]);

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

  const handlePageChange = (newPage: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", newPage.toString());
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <Stack>
      <TextInput
        placeholder="Search by name, order number, or phone"
        leftSection={<IconSearch size={16} />}
        value={searchValue}
        onChange={(e) => {
          const value = e.currentTarget.value;
          setSearchValue(value);
          handleSearch(value);
        }}
      />

      {measurements.length === 0 ? (
        <Text c="gray.7" ta="center" py="xl">
          No measurements found.
        </Text>
      ) : (
        <>
          <Table highlightOnHover>
            <Table.Thead>
              <Table.Tr>
                <Table.Th c="gray.7">Order #</Table.Th>
                <Table.Th c="gray.7">Client Name</Table.Th>
                <Table.Th c="gray.7">Phone</Table.Th>
                <Table.Th c="gray.7">Address</Table.Th>
                <Table.Th c="gray.7">Date</Table.Th>
                <Table.Th c="gray.7">Actions</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
              {measurements.map((measurement) => (
                <Table.Tr key={measurement.id}>
                  <Table.Td>
                    <Badge color="blue">{measurement.orderNumber}</Badge>
                  </Table.Td>
                  <Table.Td c="gray.7">{measurement.username}</Table.Td>
                  <Table.Td c="gray.7">{measurement.phone}</Table.Td>
                  <Table.Td c="gray.7">{measurement.address}</Table.Td>
                  <Table.Td c="gray.7">{format(new Date(measurement.createdAt), "MMM dd, yyyy")}</Table.Td>
                  <Table.Td>
                    <Group gap="xs">
                      <Link href={`/records/${measurement.id}`}>
                        <Button variant="subtle" size="compact-sm" leftSection={<IconEye size={16} />}>
                          View
                        </Button>
                      </Link>
                      <Link href={`/records/${measurement.id}/edit`}>
                        <Button variant="subtle" size="compact-sm" leftSection={<IconEdit size={16} />}>
                          Edit
                        </Button>
                      </Link>
                    </Group>
                  </Table.Td>
                </Table.Tr>
              ))}
            </Table.Tbody>
          </Table>

          {total > 10 && (
            <Group justify="center">
              <Pagination total={Math.ceil(total / 10)} value={page} onChange={handlePageChange} />
            </Group>
          )}
        </>
      )}
    </Stack>
  );
}
