import { getMeasurements } from "@/actions/measurements";
import MeasurementsList from "@/components/list/MeasurementsList";
import { MainLayout } from "@/components/MainLayout/MainLayout";
import { Button } from "@mantine/core";
import { IconPlus } from "@tabler/icons-react";
import Link from "next/link";

export default async function RecordsPage() {
  const { data: measurements = [] } = await getMeasurements();

  return (
    <MainLayout title="Measurement Records">
      <MainLayout.Header>
        <Link href="/records/new">
          <Button leftSection={<IconPlus size={16} />}>New Measurement</Button>
        </Link>
      </MainLayout.Header>

      <MainLayout.Content>
        <MeasurementsList measurements={measurements} />
      </MainLayout.Content>
    </MainLayout>
  );
}
