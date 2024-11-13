"use client";

import { Grid, Paper, Text, Title } from "@mantine/core";
import { MeasurementFormValues } from "@/lib/validations/measurement";

function MeasurementItem({
  label,
  value,
}: {
  label: string;
  value: string | null;
}) {
  return (
    <Grid.Col span={1}>
      <Text fw={500}>{label}:</Text>
      <Text>{value || "-"}</Text>
    </Grid.Col>
  );
}

interface MeasurementDetailsProps {
  measurement: MeasurementFormValues & { id: number };
}

export function MeasurementDetails({ measurement }: MeasurementDetailsProps) {
  const safeString = (value: any) => (value?.toString() || "").trim() || "-";

  return (
    <Grid>
      <Grid.Col span={12}>
        <Paper p="md" withBorder>
          <Title order={5} mb="md">
            Client Details
          </Title>
          <Grid columns={2}>
            <MeasurementItem
              label="Name"
              value={safeString(measurement.username)}
            />
            <MeasurementItem
              label="Order Number"
              value={safeString(measurement.orderNumber)}
            />
            <MeasurementItem
              label="Phone"
              value={safeString(measurement.phone)}
            />
            <MeasurementItem
              label="Address"
              value={safeString(measurement.address)}
            />
          </Grid>
        </Paper>
      </Grid.Col>

      {/* Add other measurement sections here */}
      <Grid.Col span={6}>
        <Paper p="md" withBorder>
          <Title order={5} mb="md">
            Sherwani Measurements
          </Title>
          <Grid columns={2}>
            <MeasurementItem
              label="Length"
              value={safeString(measurement.sherwaniLength)}
            />
            <MeasurementItem
              label="Chest"
              value={safeString(measurement.sherwaniChest)}
            />
            {/* Add other sherwani measurements */}
          </Grid>
        </Paper>
      </Grid.Col>

      {/* Add other measurement sections similarly */}
    </Grid>
  );
}
