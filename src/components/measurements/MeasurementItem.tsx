"use client";

import { Grid, Text } from "@mantine/core";

interface MeasurementItemProps {
  label: string;
  value: string | null;
}

export function MeasurementItem({ label, value }: MeasurementItemProps) {
  return (
    <Grid.Col span={1}>
      <Text fw={500} c="dimmed">
        {label}:
      </Text>
      <Text c="dimmed">{value || "-"}</Text>
    </Grid.Col>
  );
} 