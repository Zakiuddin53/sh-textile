import { getMeasurementById } from "@/actions/measurements";
import { MainLayout } from "@/components/MainLayout/MainLayout";
import { MeasurementDetails } from "@/components/measurements/MeasurementDetails";
import { Button, Group, Text } from "@mantine/core";
import { IconEdit } from "@tabler/icons-react";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function MeasurementDetailsPage(
  props: Readonly<{ params: Promise<{ id: string }> }>
) {
  const params = await props.params;

  const { data: measurement, success } = await getMeasurementById(
    Number(params.id)
  );

  if (!success || !measurement) {
    notFound();
  }

  return (
    <MainLayout title="Measurement Details">
      <MainLayout.Header>
        <Group>
          <Text size="sm" c="dimmed">
            Order #{measurement.orderNumber || "-"}
          </Text>
        </Group>
        <Link href={`/records/${params.id}/edit`}>
          <Button leftSection={<IconEdit size={16} />}>Edit</Button>
        </Link>
      </MainLayout.Header>

      <MainLayout.Content>
        <MeasurementDetails measurement={measurement} />
      </MainLayout.Content>
    </MainLayout>
  );
}
