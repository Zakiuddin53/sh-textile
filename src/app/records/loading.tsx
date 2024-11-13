import { MainLayout } from "@/components/MainLayout/MainLayout";
import { Skeleton, Stack } from "@mantine/core";

export default function LoadingRecords() {
  return (
    <MainLayout title="Measurement Records">
      <MainLayout.Content>
        <Stack>
          <Skeleton height={40} radius="sm" />
          <Skeleton height={40} radius="sm" />
          <Skeleton height={40} radius="sm" />
          <Skeleton height={40} radius="sm" />
          <Skeleton height={40} radius="sm" />
        </Stack>
      </MainLayout.Content>
    </MainLayout>
  );
}
