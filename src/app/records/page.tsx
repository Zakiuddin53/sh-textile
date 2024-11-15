import { getMeasurements } from "@/actions/measurements";
import MeasurementsList from "@/components/list/MeasurementsList";
import { MainLayout } from "@/components/MainLayout/MainLayout";
import { Button, Container, Group } from "@mantine/core";
import { IconPlus } from "@tabler/icons-react";
import Link from "next/link";
import { SearchInput } from "@/components/SearchInput";

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
    <Container size="xl" py="xl">
      <MainLayout title="Measurement Records">
        <MainLayout.Header>
          <Group justify="space-between">
            <Link href="/">
              <Button leftSection={<IconPlus size={16} />}>
                New Measurement
              </Button>
            </Link>
            <SearchInput defaultValue={search} />
          </Group>
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
    </Container>
  );
}
