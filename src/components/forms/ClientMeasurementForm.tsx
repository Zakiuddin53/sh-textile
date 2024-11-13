"use client";

import { createMeasurement } from "@/actions/measurements";
import { Button, Flex, SimpleGrid, TextInput, Title } from "@mantine/core";
import { useForm, zodResolver } from "@mantine/form";
import { notifications } from "@mantine/notifications";
import { MainLayout } from "../MainLayout/MainLayout";
import {
  MeasurementFormValues,
  measurementSchema,
} from "@/lib/validations/measurement";

function ClientMeasurementForm() {
  const form = useForm<MeasurementFormValues>({
    validate: zodResolver(measurementSchema),
    initialValues: {
      username: "",
      orderNumber: "",
      phone: "",
      address: "",
      // Sherwani measurements
      sherwaniLength: "",
      sherwaniChest: "",
      sherwaniBlowChest: "",
      sherwaniWaist: "",
      sherwaniHip: "",
      sherwaniSleeve: "",
      sherwaniNeck: "",
      sherwaniShoulder: "",
      sherwaniCap: "",
      sherwaniFullHeight: "",
      // Trozen measurements
      trozenLength: "",
      trozenMohri: "",
      // Coat measurements
      coatLength: "",
      coatChest: "",
      coatBlowChest: "",
      coatWaist: "",
      coatHip: "",
      coatSleeve: "",
      coatNeck: "",
      coatShoulder: "",
      coatCap: "",
      coatFullHeight: "",
      // Pant measurements
      pantLength: "",
      pantWaist: "",
      pantThigh: "",
      pantBottom: "",
    },
  });

  async function handleSubmit(values: MeasurementFormValues) {
    try {
      const validatedData = measurementSchema.parse(values);
      const result = await createMeasurement(validatedData);

      if (result.success) {
        notifications.show({
          title: "Success",
          message: "Measurement created successfully",
          color: "green",
        });
        form.reset();
      } else {
        notifications.show({
          title: "Failed to Create Measurement",
          message: result.error || "Unable to save measurement data",
          color: "red",
        });
      }
    } catch (error) {
      if (error instanceof Error) {
        notifications.show({
          title: "Invalid Data",
          message: error.message,
          color: "red",
        });
      }
    }
  }

  return (
    <MainLayout title="Client Measurements">
      <MainLayout.Content>
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
              placeholder="Enter sherwani length"
              {...form.getInputProps("sherwaniLength")}
              styles={{ label: { color: "black" } }}
            />
            <TextInput
              label="Chest"
              placeholder="Enter chest measurement"
              {...form.getInputProps("sherwaniChest")}
              styles={{ label: { color: "black" } }}
            />
            <TextInput
              label="Below Chest"
              placeholder="Enter below chest measurement"
              {...form.getInputProps("sherwaniBlowChest")}
              styles={{ label: { color: "black" } }}
            />
            <TextInput
              label="Waist"
              placeholder="Enter waist measurement"
              {...form.getInputProps("sherwaniWaist")}
              styles={{ label: { color: "black" } }}
            />
            <TextInput
              label="Hip"
              placeholder="Enter hip measurement"
              {...form.getInputProps("sherwaniHip")}
              styles={{ label: { color: "black" } }}
            />
            <TextInput
              label="Sleeve"
              placeholder="Enter sleeve measurement"
              {...form.getInputProps("sherwaniSleeve")}
              styles={{ label: { color: "black" } }}
            />
            <TextInput
              label="Neck"
              placeholder="Enter neck measurement"
              {...form.getInputProps("sherwaniNeck")}
              styles={{ label: { color: "black" } }}
            />
            <TextInput
              label="Shoulder"
              placeholder="Enter shoulder measurement"
              {...form.getInputProps("sherwaniShoulder")}
              styles={{ label: { color: "black" } }}
            />
            <TextInput
              label="Cap"
              placeholder="Enter cap measurement"
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
              placeholder="Enter trozen length"
              {...form.getInputProps("trozenLength")}
              styles={{ label: { color: "black" } }}
            />
            <TextInput
              label="Mohri"
              placeholder="Enter mohri measurement"
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
              placeholder="Enter coat length"
              {...form.getInputProps("coatLength")}
              styles={{ label: { color: "black" } }}
            />
            <TextInput
              label="Chest"
              placeholder="Enter chest measurement"
              {...form.getInputProps("coatChest")}
              styles={{ label: { color: "black" } }}
            />
            <TextInput
              label="Below Chest"
              placeholder="Enter below chest measurement"
              {...form.getInputProps("coatBlowChest")}
              styles={{ label: { color: "black" } }}
            />
            <TextInput
              label="Waist"
              placeholder="Enter waist measurement"
              {...form.getInputProps("coatWaist")}
              styles={{ label: { color: "black" } }}
            />
            <TextInput
              label="Hip"
              placeholder="Enter hip measurement"
              {...form.getInputProps("coatHip")}
              styles={{ label: { color: "black" } }}
            />
            <TextInput
              label="Sleeve"
              placeholder="Enter sleeve measurement"
              {...form.getInputProps("coatSleeve")}
              styles={{ label: { color: "black" } }}
            />
            <TextInput
              label="Neck"
              placeholder="Enter neck measurement"
              {...form.getInputProps("coatNeck")}
              styles={{ label: { color: "black" } }}
            />
            <TextInput
              label="Shoulder"
              placeholder="Enter shoulder measurement"
              {...form.getInputProps("coatShoulder")}
              styles={{ label: { color: "black" } }}
            />
            <TextInput
              label="Cap"
              placeholder="Enter cap measurement"
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
              placeholder="Enter pant length"
              {...form.getInputProps("pantLength")}
              styles={{ label: { color: "black" } }}
            />
            <TextInput
              label="Waist"
              placeholder="Enter waist measurement"
              {...form.getInputProps("pantWaist")}
              styles={{ label: { color: "black" } }}
            />
            <TextInput
              label="Thigh"
              placeholder="Enter thigh measurement"
              {...form.getInputProps("pantThigh")}
              styles={{ label: { color: "black" } }}
            />
            <TextInput
              label="Bottom"
              placeholder="Enter bottom measurement"
              {...form.getInputProps("pantBottom")}
              styles={{ label: { color: "black" } }}
            />
          </SimpleGrid>

          <Flex justify="end">
            <Button type="submit" mt="lg">
              Submit
            </Button>
          </Flex>
        </form>
      </MainLayout.Content>
    </MainLayout>
  );
}

export default ClientMeasurementForm;
