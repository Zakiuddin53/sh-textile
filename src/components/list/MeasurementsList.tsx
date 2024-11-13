"use client";

import { Table, Text, Badge, Button, Group } from "@mantine/core";
import { IconEdit, IconEye } from "@tabler/icons-react";
import Link from "next/link";

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
}

export function MeasurementsList({ measurements }: MeasurementsListProps) {
  if (!measurements.length) {
    return (
      <Text c="dimmed" ta="center" py="xl">
        No measurements found.
      </Text>
    );
  }

  return (
    <Table highlightOnHover c="gray.7">
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Order #</Table.Th>
          <Table.Th>Client Name</Table.Th>
          <Table.Th>Phone</Table.Th>
          <Table.Th>Address</Table.Th>
          <Table.Th>Date</Table.Th>
          <Table.Th>Actions</Table.Th>
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
            <Table.Td c="gray.7">
              {new Date(measurement.createdAt).toLocaleDateString()}
            </Table.Td>
            <Table.Td>
              <Group gap="xs">
                <Link href={`/measurements/${measurement.id}`}>
                  <Button
                    variant="subtle"
                    size="compact-sm"
                    leftSection={<IconEye size={16} />}
                  >
                    View
                  </Button>
                </Link>
                <Link href={`/measurements/${measurement.id}/edit`}>
                  <Button
                    variant="subtle"
                    size="compact-sm"
                    leftSection={<IconEdit size={16} />}
                  >
                    Edit
                  </Button>
                </Link>
              </Group>
            </Table.Td>
          </Table.Tr>
        ))}
      </Table.Tbody>
    </Table>
  );
}
