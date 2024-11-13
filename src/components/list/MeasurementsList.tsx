"use client";

import { Table, Text, Badge, Button, Group } from "@mantine/core";
import { IconEdit, IconEye } from "@tabler/icons-react";
import Link from "next/link";
import { format } from 'date-fns';

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

export default function MeasurementsList({
  measurements,
}: MeasurementsListProps) {
  if (!measurements.length) {
    return (
      <Text c="dimmed" ta="center" py="xl">
        No measurements found.
      </Text>
    );
  }

  return (
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
            <Table.Td c="gray.7">
              {format(new Date(measurement.createdAt), 'MMM dd, yyyy')}
            </Table.Td>
            <Table.Td>
              <Group gap="xs">
                <Link href={`/records/${measurement.id}`}>
                  <Button
                    variant="subtle"
                    size="compact-sm"
                    leftSection={<IconEye size={16} />}
                  >
                    View
                  </Button>
                </Link>
                <Link href={`/records/${measurement.id}/edit`}>
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
