"use client";

import { Grid, Paper, Text, Title, Group } from "@mantine/core";
import { MeasurementFormValues } from "@/lib/validations/measurement";
import { IconHash, IconPhone, IconMapPin, IconRuler2 } from "@tabler/icons-react";

function MeasurementItem({ label, value, icon }: { label: string; value: string | null; icon?: React.ReactNode }) {
  return (
    <Grid.Col span={1}>
      <Group gap="xs" c="gray.5" mb={4}>
        {icon}
        <Text size="sm" fw={400} c="gray.5" mb={4}>
          {label}
        </Text>
      </Group>
      <Text size="lg" fw={600} c="grey">
        {value || "-"}
      </Text>
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
        <Paper p="xl" withBorder radius="md">
          <Title order={2} mb="xl" c="dark.9" fw={600}>
            Client Details
          </Title>
          <Grid columns={2} gutter="xl">
            <MeasurementItem label="Name" value={measurement.username} />
            <MeasurementItem label="Order Number" value={measurement.orderNumber} icon={<IconHash size={16} />} />
            <MeasurementItem label="Phone" value={measurement.phone} icon={<IconPhone size={16} />} />
            <MeasurementItem label="Address" value={measurement.address} icon={<IconMapPin size={16} />} />
          </Grid>
        </Paper>
      </Grid.Col>

      <Grid.Col span={6}>
        <Paper p="xl" withBorder radius="md">
          <Group mb="xl" justify="center">
            <IconRuler2 size={20} />
            <Title order={2} c="dark.9" fw={600}>
              Sherwani Measurements
            </Title>
          </Group>
          <Grid columns={2} gutter="xl">
            <MeasurementItem label="Length" value={measurement.sherwaniLength} />
            <MeasurementItem label="Chest" value={measurement.sherwaniChest} />
            <MeasurementItem label="Blow Chest" value={measurement.sherwaniBlowChest} />
            <MeasurementItem label="Waist" value={measurement.sherwaniWaist} />
            <MeasurementItem label="Hip" value={measurement.sherwaniHip} />
            <MeasurementItem label="Sleeve" value={measurement.sherwaniSleeve} />
            <MeasurementItem label="Neck" value={measurement.sherwaniNeck} />
            <MeasurementItem label="Shoulder" value={measurement.sherwaniShoulder} />
            <MeasurementItem label="Cap" value={measurement.sherwaniCap} />
            <MeasurementItem label="Full Height" value={measurement.sherwaniFullHeight} />
          </Grid>
        </Paper>
      </Grid.Col>

      <Grid.Col span={6}>
        <Paper p="xl" withBorder radius="md">
          <Group mb="xl" justify="center">
            <IconRuler2 size={20} />
            <Title order={2} c="dark.9" fw={600}>
              Coat Measurements
            </Title>
          </Group>
          <Grid columns={2} gutter="xl">
            <MeasurementItem label="Length" value={measurement.coatLength} />
            <MeasurementItem label="Chest" value={measurement.coatChest} />
            <MeasurementItem label="Blow Chest" value={measurement.coatBlowChest} />
            <MeasurementItem label="Waist" value={measurement.coatWaist} />
            <MeasurementItem label="Hip" value={measurement.coatHip} />
            <MeasurementItem label="Sleeve" value={measurement.coatSleeve} />
            <MeasurementItem label="Neck" value={measurement.coatNeck} />
            <MeasurementItem label="Shoulder" value={measurement.coatShoulder} />
            <MeasurementItem label="Cap" value={measurement.coatCap} />
            <MeasurementItem label="Full Height" value={measurement.coatFullHeight} />
          </Grid>
        </Paper>
      </Grid.Col>

      <Grid.Col span={6}>
        <Paper p="xl" withBorder radius="md">
          <Group mb="xl" justify="center">
            <IconRuler2 size={20} />
            <Title order={2} c="dark.9" fw={600}>
              Trozen Measurements
            </Title>
          </Group>
          <Grid columns={2} gutter="xl">
            <MeasurementItem label="Length" value={measurement.trozenLength} />
            <MeasurementItem label="Mohri" value={measurement.trozenMohri} />
          </Grid>
        </Paper>
      </Grid.Col>

      <Grid.Col span={6}>
        <Paper p="xl" withBorder radius="md">
          <Group mb="xl" justify="center">
            <IconRuler2 size={20} />
            <Title order={2} c="dark.9" fw={600}>
              Pant Measurements
            </Title>
          </Group>
          <Grid columns={2} gutter="xl">
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
