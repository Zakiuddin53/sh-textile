"use client";

import { Grid, Paper, Text, Title, Group, Table } from "@mantine/core";
import { MeasurementFormValues } from "@/lib/validations/measurement";
import { IconPhone, IconMapPin, IconRuler2 } from "@tabler/icons-react";

interface MeasurementDetailsProps {
  measurement: MeasurementFormValues & { id: number };
}

export function MeasurementDetails({ measurement }: MeasurementDetailsProps) {
  return (
    <Grid>
      <Grid.Col span={12}>
        <Table striped highlightOnHover withTableBorder withColumnBorders>
          <Table.Tbody>
            <Table.Tr>
              <Table.Td>
                <Group gap="xs">
                  <Text fw={500} c="dark.9">
                    Name
                  </Text>
                </Group>
              </Table.Td>
              <Table.Td>
                <Text c="dark.9">{measurement.username || "-"}</Text>
              </Table.Td>
              <Table.Td>
                <Group gap="xs">
                  <Text fw={500} c="dark.9">
                    Order Number
                  </Text>
                </Group>
              </Table.Td>
              <Table.Td c="dark.9">{measurement.orderNumber || "-"}</Table.Td>
            </Table.Tr>
            <Table.Tr>
              <Table.Td>
                <Group gap="xs">
                  <IconPhone size={16} color="black" />
                  <Text fw={500} c="dark.9">
                    Phone
                  </Text>
                </Group>
              </Table.Td>
              <Table.Td c="dark.9">{measurement.phone || "-"}</Table.Td>
              <Table.Td>
                <Group gap="xs">
                  <IconMapPin size={16} color="black" />
                  <Text fw={500} c="dark.9">
                    Address
                  </Text>
                </Group>
              </Table.Td>
              <Table.Td c="dark.9">{measurement.address || "-"}</Table.Td>
            </Table.Tr>
          </Table.Tbody>
        </Table>
      </Grid.Col>

      <Grid.Col span={6}>
        <Paper p="xl">
          <Group mb="xl" justify="center">
            <IconRuler2 size={20} color="black" />
            <Title order={2} c="dark.9" fw={600}>
              Sherwani Measurements
            </Title>
          </Group>
          <Table striped highlightOnHover withTableBorder withColumnBorders>
            <Table.Thead></Table.Thead>
            <Table.Tbody>
              <Table.Tr>
                <Table.Td>
                  <Text c="dark.9">Length</Text>
                </Table.Td>
                <Table.Td>
                  <Text c="dark.9">{measurement.sherwaniLength || "-"}</Text>
                </Table.Td>
              </Table.Tr>
              <Table.Tr>
                <Table.Td>
                  <Text c="dark.9">Chest</Text>
                </Table.Td>
                <Table.Td>
                  <Text c="dark.9">{measurement.sherwaniChest || "-"}</Text>
                </Table.Td>
              </Table.Tr>
              <Table.Tr>
                <Table.Td>
                  <Text c="dark.9">Blow Chest</Text>
                </Table.Td>
                <Table.Td>
                  <Text c="dark.9">{measurement.sherwaniBlowChest || "-"}</Text>
                </Table.Td>
              </Table.Tr>
              {/* Add other Sherwani measurements similarly */}
            </Table.Tbody>
          </Table>
        </Paper>
      </Grid.Col>

      <Grid.Col span={6}>
        <Paper p="xl">
          <Group mb="xl" justify="center">
            <IconRuler2 size={20} color="black" />
            <Title order={2} c="dark.9" fw={600}>
              Coat Measurements
            </Title>
          </Group>
          <Table striped highlightOnHover withTableBorder withColumnBorders>
            <Table.Thead></Table.Thead>
            <Table.Tbody>
              <Table.Tr>
                <Table.Td>
                  <Text c="dark.9">Length</Text>
                </Table.Td>
                <Table.Td>
                  <Text c="dark.9">{measurement.coatLength || "-"}</Text>
                </Table.Td>
              </Table.Tr>
              <Table.Tr>
                <Table.Td>
                  <Text c="dark.9">Chest</Text>
                </Table.Td>
                <Table.Td>
                  <Text c="dark.9">{measurement.coatChest || "-"}</Text>
                </Table.Td>
              </Table.Tr>
              <Table.Tr>
                <Table.Td>
                  <Text c="dark.9">Blow Chest</Text>
                </Table.Td>
                <Table.Td>
                  <Text c="dark.9">{measurement.coatBlowChest || "-"}</Text>
                </Table.Td>
              </Table.Tr>
              {/* Add other Coat measurements similarly */}
            </Table.Tbody>
          </Table>
        </Paper>
      </Grid.Col>

      {/* Similar pattern for Trozen and Pant measurements */}
      <Grid.Col span={6}>
        <Paper p="xl">
          <Group mb="xl" justify="center">
            <IconRuler2 size={20} color="black" />
            <Title order={2} c="dark.9" fw={600}>
              Trozen Measurements
            </Title>
          </Group>
          <Table striped highlightOnHover withTableBorder withColumnBorders>
            <Table.Thead></Table.Thead>
            <Table.Tbody>
              <Table.Tr>
                <Table.Td>
                  <Text c="dark.9">Length</Text>
                </Table.Td>
                <Table.Td>
                  <Text c="dark.9">{measurement.trozenLength || "-"}</Text>
                </Table.Td>
              </Table.Tr>
              <Table.Tr>
                <Table.Td>
                  <Text c="dark.9">Mohri</Text>
                </Table.Td>
                <Table.Td>
                  <Text c="dark.9">{measurement.trozenMohri || "-"}</Text>
                </Table.Td>
              </Table.Tr>
            </Table.Tbody>
          </Table>
        </Paper>
      </Grid.Col>

      <Grid.Col span={6}>
        <Paper p="xl">
          <Group mb="xl" justify="center">
            <IconRuler2 size={20} color="black" />
            <Title order={2} c="dark.9" fw={600}>
              Pant Measurements
            </Title>
          </Group>
          <Table striped highlightOnHover withTableBorder withColumnBorders>
            <Table.Thead></Table.Thead>
            <Table.Tbody>
              <Table.Tr>
                <Table.Td>
                  <Text c="dark.9">Length</Text>
                </Table.Td>
                <Table.Td>
                  <Text c="dark.9">{measurement.pantLength || "-"}</Text>
                </Table.Td>
              </Table.Tr>
              <Table.Tr>
                <Table.Td>
                  <Text c="dark.9">Waist</Text>
                </Table.Td>
                <Table.Td>
                  <Text c="dark.9">{measurement.pantWaist || "-"}</Text>
                </Table.Td>
              </Table.Tr>
              <Table.Tr>
                <Table.Td>
                  <Text c="dark.9">Thigh</Text>
                </Table.Td>
                <Table.Td>
                  <Text c="dark.9">{measurement.pantThigh || "-"}</Text>
                </Table.Td>
              </Table.Tr>
              <Table.Tr>
                <Table.Td>
                  <Text c="dark.9">Bottom</Text>
                </Table.Td>
                <Table.Td>
                  <Text c="dark.9">{measurement.pantBottom || "-"}</Text>
                </Table.Td>
              </Table.Tr>
            </Table.Tbody>
          </Table>
        </Paper>
      </Grid.Col>
    </Grid>
  );
}
