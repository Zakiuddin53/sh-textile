"use client";

import { updateMeasurement } from "@/actions/measurements";
import { Button, Flex, SimpleGrid, TextInput, Title } from "@mantine/core";
import { useForm, zodResolver } from "@mantine/form";
import { notifications } from "@mantine/notifications";
import { useRouter } from "next/navigation";
import {
  MeasurementFormValues,
  measurementSchema,
} from "@/lib/validations/measurement";

interface EditMeasurementFormProps {
  measurement: MeasurementFormValues & { id: number };
}

export function EditMeasurementForm({ measurement }: EditMeasurementFormProps) {
  const router = useRouter();
  const form = useForm<MeasurementFormValues>({
    validate: zodResolver(measurementSchema),
    initialValues: {
      username: measurement.username,
      orderNumber: measurement.orderNumber,
      phone: measurement.phone,
      address: measurement.address,
      // Sherwani measurements
      sherwaniLength: measurement.sherwaniLength,
      sherwaniChest: measurement.sherwaniChest,
      sherwaniBlowChest: measurement.sherwaniBlowChest,
      sherwaniWaist: measurement.sherwaniWaist,
      sherwaniHip: measurement.sherwaniHip,
      sherwaniSleeve: measurement.sherwaniSleeve,
      sherwaniNeck: measurement.sherwaniNeck,
      sherwaniShoulder: measurement.sherwaniShoulder,
      sherwaniCap: measurement.sherwaniCap,
      sherwaniFullHeight: measurement.sherwaniFullHeight,
      // Trozen measurements
      trozenLength: measurement.trozenLength,
      trozenMohri: measurement.trozenMohri,
      // Coat measurements
      coatLength: measurement.coatLength,
      coatChest: measurement.coatChest,
      coatBlowChest: measurement.coatBlowChest,
      coatWaist: measurement.coatWaist,
      coatHip: measurement.coatHip,
      coatSleeve: measurement.coatSleeve,
      coatNeck: measurement.coatNeck,
      coatShoulder: measurement.coatShoulder,
      coatCap: measurement.coatCap,
      coatFullHeight: measurement.coatFullHeight,
      // Pant measurements
      pantLength: measurement.pantLength,
      pantWaist: measurement.pantWaist,
      pantThigh: measurement.pantThigh,
      pantBottom: measurement.pantBottom,
    },
  });

  async function handleSubmit(values: MeasurementFormValues) {
    try {
      const result = await updateMeasurement(measurement.id, values);

      if (result.success) {
        notifications.show({
          title: "Success",
          message: "Measurement updated successfully",
          color: "green",
        });
        router.push(`/records/${measurement.id}`);
        router.refresh();
      } else {
        notifications.show({
          title: "Error",
          message: result.error || "Failed to update measurement",
          color: "red",
        });
      }
    } catch (error) {
      notifications.show({
        title: "Error",
        message: "An unexpected error occurred",
        color: "red",
      });
    }
  }

  return (
    <form onSubmit={form.onSubmit(handleSubmit)}>
      <Title order={5} c="gray.9" mb="md">
        Client Details
      </Title>
      <SimpleGrid cols={3} mb="xl">
        <TextInput
          required
          label="Username"
          placeholder="Enter username"
          {...form.getInputProps("username")}
          styles={{ label: { color: "black" } }}
        />
        <TextInput
          required
          label="Order Number"
          placeholder="Enter order number"
          {...form.getInputProps("orderNumber")}
          styles={{ label: { color: "black" } }}
        />
        <TextInput
          required
          label="Phone"
          placeholder="Enter phone number"
          {...form.getInputProps("phone")}
          styles={{ label: { color: "black" } }}
        />
        <TextInput
          required
          label="Address"
          placeholder="Enter address"
          {...form.getInputProps("address")}
          styles={{ label: { color: "black" } }}
        />
      </SimpleGrid>

      {/* Add the rest of the form fields similar to ClientMeasurementForm */}
      {/* ... */}

      <Flex justify="end" gap="md">
        <Button variant="light" onClick={() => router.back()}>
          Cancel
        </Button>
        <Button type="submit">Save Changes</Button>
      </Flex>
    </form>
  );
}
