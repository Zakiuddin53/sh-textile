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
import { ApiError } from "@/lib/errors";

interface EditMeasurementFormProps {
  measurement: MeasurementFormValues & { id: number };
}

export const EditMeasurementForm = ({
  measurement,
}: EditMeasurementFormProps) => {
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
    const result = await updateMeasurement(measurement.id, values);

    if (result.success) {
      notifications.show({
        title: "Success",
        message: "Measurement updated successfully",
        color: "green",
      });
      router.push(`/records/${measurement.id}`);
      router.refresh();
      return;
    }

    notifications.show({
      title: "Error",
      message: ApiError.MEASUREMENT_ERROR("update").message,
      color: "red",
    });
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

      <Title order={5} c="gray.9" mb="md">
        Sherwani Measurements
      </Title>
      <SimpleGrid cols={3} mb="xl">
        <TextInput
          label="Length"
          placeholder="Enter length"
          {...form.getInputProps("sherwaniLength")}
          styles={{ label: { color: "black" } }}
        />
        <TextInput
          label="Chest"
          placeholder="Enter chest"
          {...form.getInputProps("sherwaniChest")}
          styles={{ label: { color: "black" } }}
        />
        <TextInput
          label="Blow Chest"
          placeholder="Enter blow chest"
          {...form.getInputProps("sherwaniBlowChest")}
          styles={{ label: { color: "black" } }}
        />
        <TextInput
          label="Waist"
          placeholder="Enter waist"
          {...form.getInputProps("sherwaniWaist")}
          styles={{ label: { color: "black" } }}
        />
        <TextInput
          label="Hip"
          placeholder="Enter hip"
          {...form.getInputProps("sherwaniHip")}
          styles={{ label: { color: "black" } }}
        />
        <TextInput
          label="Sleeve"
          placeholder="Enter sleeve"
          {...form.getInputProps("sherwaniSleeve")}
          styles={{ label: { color: "black" } }}
        />
        <TextInput
          label="Neck"
          placeholder="Enter neck"
          {...form.getInputProps("sherwaniNeck")}
          styles={{ label: { color: "black" } }}
        />
        <TextInput
          label="Shoulder"
          placeholder="Enter shoulder"
          {...form.getInputProps("sherwaniShoulder")}
          styles={{ label: { color: "black" } }}
        />
        <TextInput
          label="Cap"
          placeholder="Enter cap"
          {...form.getInputProps("sherwaniCap")}
          styles={{ label: { color: "black" } }}
        />
        <TextInput
          label="Full Height"
          placeholder="Enter full height"
          {...form.getInputProps("sherwaniFullHeight")}
          styles={{ label: { color: "black" } }}
        />
      </SimpleGrid>

      <Title order={5} c="gray.9" mb="md">
        Trozen Measurements
      </Title>
      <SimpleGrid cols={3} mb="xl">
        <TextInput
          label="Length"
          placeholder="Enter length"
          {...form.getInputProps("trozenLength")}
          styles={{ label: { color: "black" } }}
        />
        <TextInput
          label="Mohri"
          placeholder="Enter mohri"
          {...form.getInputProps("trozenMohri")}
          styles={{ label: { color: "black" } }}
        />
      </SimpleGrid>

      <Title order={5} c="gray.9" mb="md">
        Coat Measurements
      </Title>
      <SimpleGrid cols={3} mb="xl">
        <TextInput
          label="Length"
          placeholder="Enter length"
          {...form.getInputProps("coatLength")}
          styles={{ label: { color: "black" } }}
        />
        <TextInput
          label="Chest"
          placeholder="Enter chest"
          {...form.getInputProps("coatChest")}
          styles={{ label: { color: "black" } }}
        />
        <TextInput
          label="Blow Chest"
          placeholder="Enter blow chest"
          {...form.getInputProps("coatBlowChest")}
          styles={{ label: { color: "black" } }}
        />
        <TextInput
          label="Waist"
          placeholder="Enter waist"
          {...form.getInputProps("coatWaist")}
          styles={{ label: { color: "black" } }}
        />
        <TextInput
          label="Hip"
          placeholder="Enter hip"
          {...form.getInputProps("coatHip")}
          styles={{ label: { color: "black" } }}
        />
        <TextInput
          label="Sleeve"
          placeholder="Enter sleeve"
          {...form.getInputProps("coatSleeve")}
          styles={{ label: { color: "black" } }}
        />
        <TextInput
          label="Neck"
          placeholder="Enter neck"
          {...form.getInputProps("coatNeck")}
          styles={{ label: { color: "black" } }}
        />
        <TextInput
          label="Shoulder"
          placeholder="Enter shoulder"
          {...form.getInputProps("coatShoulder")}
          styles={{ label: { color: "black" } }}
        />
        <TextInput
          label="Cap"
          placeholder="Enter cap"
          {...form.getInputProps("coatCap")}
          styles={{ label: { color: "black" } }}
        />
        <TextInput
          label="Full Height"
          placeholder="Enter full height"
          {...form.getInputProps("coatFullHeight")}
          styles={{ label: { color: "black" } }}
        />
      </SimpleGrid>

      <Title order={5} c="gray.9" mb="md">
        Pant Measurements
      </Title>
      <SimpleGrid cols={3} mb="xl">
        <TextInput
          label="Length"
          placeholder="Enter length"
          {...form.getInputProps("pantLength")}
          styles={{ label: { color: "black" } }}
        />
        <TextInput
          label="Waist"
          placeholder="Enter waist"
          {...form.getInputProps("pantWaist")}
          styles={{ label: { color: "black" } }}
        />
        <TextInput
          label="Thigh"
          placeholder="Enter thigh"
          {...form.getInputProps("pantThigh")}
          styles={{ label: { color: "black" } }}
        />
        <TextInput
          label="Bottom"
          placeholder="Enter bottom"
          {...form.getInputProps("pantBottom")}
          styles={{ label: { color: "black" } }}
        />
      </SimpleGrid>

      <Flex justify="end" gap="md">
        <Button variant="light" onClick={() => router.back()}>
          Cancel
        </Button>
        <Button type="submit">Save Changes</Button>
      </Flex>
    </form>
  );
};
