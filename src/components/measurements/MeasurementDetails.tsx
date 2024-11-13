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
      <Text fw={500} c="dimmed">
        {label}:
      </Text>
      <Text c="dimmed">{value || "-"}</Text>
    </Grid.Col>
  );
}

interface MeasurementDetailsProps {
  measurement: MeasurementFormValues & { id: number };
}

export function MeasurementDetails({ measurement }: MeasurementDetailsProps) {
  return (
    <Grid>
      <Grid.Col span={12}>
        <Paper p="md" withBorder>
          <Title order={5} mb="md" c="dimmed">
            Client Details
          </Title>
          <Grid columns={2}>
            <MeasurementItem label="Name" value={measurement.username} />
            <MeasurementItem
              label="Order Number"
              value={measurement.orderNumber}
            />
            <MeasurementItem label="Phone" value={measurement.phone} />
            <MeasurementItem label="Address" value={measurement.address} />
          </Grid>
        </Paper>
      </Grid.Col>

      <Grid.Col span={6}>
        <Paper p="md" withBorder>
          <Title order={5} mb="md" c="dimmed">
            Sherwani Measurements
          </Title>
          <Grid columns={2}>
            <MeasurementItem
              label="Length"
              value={measurement.sherwaniLength}
            />
            <MeasurementItem label="Chest" value={measurement.sherwaniChest} />
            <MeasurementItem
              label="Blow Chest"
              value={measurement.sherwaniBlowChest}
            />
            <MeasurementItem label="Waist" value={measurement.sherwaniWaist} />
            <MeasurementItem label="Hip" value={measurement.sherwaniHip} />
            <MeasurementItem
              label="Sleeve"
              value={measurement.sherwaniSleeve}
            />
            <MeasurementItem label="Neck" value={measurement.sherwaniNeck} />
            <MeasurementItem
              label="Shoulder"
              value={measurement.sherwaniShoulder}
            />
            <MeasurementItem label="Cap" value={measurement.sherwaniCap} />
            <MeasurementItem
              label="Full Height"
              value={measurement.sherwaniFullHeight}
            />
          </Grid>
        </Paper>
      </Grid.Col>

      <Grid.Col span={6}>
        <Paper p="md" withBorder>
          <Title order={5} mb="md" c="dimmed">
            Trozen Measurements
          </Title>
          <Grid columns={2}>
            <MeasurementItem label="Length" value={measurement.trozenLength} />
            <MeasurementItem label="Mohri" value={measurement.trozenMohri} />
          </Grid>
        </Paper>
      </Grid.Col>

      <Grid.Col span={6}>
        <Paper p="md" withBorder>
          <Title order={5} mb="md" c="dimmed">
            Coat Measurements
          </Title>
          <Grid columns={2}>
            <MeasurementItem label="Length" value={measurement.coatLength} />
            <MeasurementItem label="Chest" value={measurement.coatChest} />
            <MeasurementItem
              label="Blow Chest"
              value={measurement.coatBlowChest}
            />
            <MeasurementItem label="Waist" value={measurement.coatWaist} />
            <MeasurementItem label="Hip" value={measurement.coatHip} />
            <MeasurementItem label="Sleeve" value={measurement.coatSleeve} />
            <MeasurementItem label="Neck" value={measurement.coatNeck} />
            <MeasurementItem
              label="Shoulder"
              value={measurement.coatShoulder}
            />
            <MeasurementItem label="Cap" value={measurement.coatCap} />
            <MeasurementItem
              label="Full Height"
              value={measurement.coatFullHeight}
            />
          </Grid>
        </Paper>
      </Grid.Col>

      <Grid.Col span={6}>
        <Paper p="md" withBorder>
          <Title order={5} mb="md" c="dimmed">
            Pant Measurements
          </Title>
          <Grid columns={2}>
            <MeasurementItem label="Length" value={measurement.pantLength} />
            <MeasurementItem label="Waist" value={measurement.pantWaist} />
            <MeasurementItem label="Thigh" value={measurement.pantThigh} />
            <MeasurementItem label="Bottom" value={measurement.pantBottom} />
          </Grid>
        </Paper>
      </Grid.Col>
    </Grid>
  );
}
