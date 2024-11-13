import ClientMeasurementForm from "@/components/forms/ClientMeasurementForm";
import { Container } from "@mantine/core";

export default function Home() {
  return (
    <Container size="xl" py="xl">
      <ClientMeasurementForm />
    </Container>
  );
}
