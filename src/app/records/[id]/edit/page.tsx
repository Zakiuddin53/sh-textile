import { getMeasurementById } from "@/actions/measurements";
import { EditMeasurementForm } from "@/components/forms/EditMeasurementForm";
import { MainLayout } from "@/components/MainLayout/MainLayout";
import { notFound } from "next/navigation";

export default async function EditMeasurementPage(
  props: Readonly<{
    params: Promise<{ id: string }>;
  }>
) {
  const params = await props.params;

  const { data: measurement, success } = await getMeasurementById(
    Number(params.id)
  );

  if (!success || !measurement) {
    notFound();
  }

  return (
    <MainLayout title="Edit Measurement">
      <MainLayout.Content>
        <EditMeasurementForm measurement={measurement} />
      </MainLayout.Content>
    </MainLayout>
  );
}
