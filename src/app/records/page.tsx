import { getMeasurements } from "@/actions/measurements";
import MeasurementsList from "@/components/list/MeasurementsList";
import { MainLayout } from "@/components/MainLayout/MainLayout";
import { Button } from "@mantine/core";
import { IconPlus } from "@tabler/icons-react";
import Link from "next/link";

export default async function RecordsPage({ searchParams: { page = "1", search = "" } }: { searchParams: { page?: string; search?: string } }) {
  const { data: { measurements = [], total = 0 } = {} } = await getMeasurements({
    page: Number(page),
    search,
  });

  return (
    <MainLayout title="Measurement Records">
      <MainLayout.Header>
        <Link href="/">
          <Button leftSection={<IconPlus size={16} />}>New Measurement</Button>
        </Link>
      </MainLayout.Header>

      <MainLayout.Content>
        <MeasurementsList measurements={measurements} total={total} page={Number(page)} search={search} />
      </MainLayout.Content>
    </MainLayout>
  );
}
