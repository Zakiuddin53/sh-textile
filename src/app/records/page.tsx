import { getMeasurements } from "@/actions/measurements";
import MeasurementsList from "@/components/list/MeasurementsList";
import { MainLayout } from "@/components/MainLayout/MainLayout";
import { Button } from "@mantine/core";
import { IconPlus } from "@tabler/icons-react";
import Link from "next/link";

type Props = {
  searchParams: Promise<{ page?: string; search?: string }>;
};

export default async function RecordsPage({ searchParams }: Props) {
  const resolvedParams = await searchParams;
  const page = Number(resolvedParams.page) || 1;
  const search = resolvedParams.search || "";

  const { data } = await getMeasurements({
    page,
    limit: 10,
    search,
  });

  const { measurements = [], total = 0 } = data || {};

  return (
    <MainLayout title="Measurement Records">
      <MainLayout.Header>
        <Link href="/">
          <Button leftSection={<IconPlus size={16} />}>New Measurement</Button>
        </Link>
      </MainLayout.Header>

      <MainLayout.Content>
        <MeasurementsList
          measurements={measurements}
          total={total}
          page={page}
          search={search}
        />
      </MainLayout.Content>
    </MainLayout>
  );
}
