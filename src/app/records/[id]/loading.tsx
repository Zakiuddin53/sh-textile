import { MainLayout } from "@/components/MainLayout/MainLayout";
import { Grid, Paper, Skeleton } from "@mantine/core";

export default function LoadingMeasurementDetails() {
  return (
    <MainLayout title="Measurement Details">
      <MainLayout.Content>
        <Grid>
          <Grid.Col span={12}>
            <Paper p="md" withBorder>
              <Skeleton height={100} radius="sm" mb="md" />
            </Paper>
          </Grid.Col>
          <Grid.Col span={6}>
            <Paper p="md" withBorder>
              <Skeleton height={200} radius="sm" />
            </Paper>
          </Grid.Col>
          <Grid.Col span={6}>
            <Paper p="md" withBorder>
              <Skeleton height={200} radius="sm" />
            </Paper>
          </Grid.Col>
        </Grid>
      </MainLayout.Content>
    </MainLayout>
  );
}
