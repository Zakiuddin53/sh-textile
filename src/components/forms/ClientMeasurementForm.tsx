"use client";

import { Button, Flex, SimpleGrid, TextInput, Title } from "@mantine/core";
import { MainLayout } from "../MainLayout/MainLayout";

function ClientMeasurementForm() {
  return (
    <MainLayout title="Client Measurements">
      <MainLayout.Content>
        <Title order={5} c="gray.9" mb="md">
          Client Details
        </Title>
        <SimpleGrid cols={3} mb="xl">
          <TextInput label="Username" placeholder="Enter username" styles={{ label: { color: "black" } }} />
          <TextInput label="Email" placeholder="Enter email" type="email" styles={{ label: { color: "black" } }} />
          <TextInput label="Phone" placeholder="Enter phone number" styles={{ label: { color: "black" } }} />
          <TextInput label="Address" placeholder="Enter address" styles={{ label: { color: "black" } }} />
        </SimpleGrid>

        <Title order={5} c="gray.9" mb="md">
          Sherwani Measurements
        </Title>
        <SimpleGrid cols={3} mb="xl">
          <TextInput label="Length" placeholder="Enter sherwani length" styles={{ label: { color: "black" } }} />
          <TextInput label="Chest" placeholder="Enter chest measurement" styles={{ label: { color: "black" } }} />
          <TextInput label="Below Chest" placeholder="Enter below chest measurement" styles={{ label: { color: "black" } }} />
          <TextInput label="Waist" placeholder="Enter waist measurement" styles={{ label: { color: "black" } }} />
          <TextInput label="Hip" placeholder="Enter hip measurement" styles={{ label: { color: "black" } }} />
          <TextInput label="Sleeve" placeholder="Enter sleeve measurement" styles={{ label: { color: "black" } }} />
          <TextInput label="Neck" placeholder="Enter neck measurement" styles={{ label: { color: "black" } }} />
          <TextInput label="Shoulder" placeholder="Enter shoulder measurement" styles={{ label: { color: "black" } }} />
          <TextInput label="Cap" placeholder="Enter cap measurement" styles={{ label: { color: "black" } }} />
          <TextInput label="Full Height" placeholder="Enter full height" styles={{ label: { color: "black" } }} />
        </SimpleGrid>

        <Title order={5} c="gray.9" mb="md">
          Trozen Measurements
        </Title>
        <SimpleGrid cols={3} mb="xl">
          <TextInput label="Length" placeholder="Enter trozen length" styles={{ label: { color: "black" } }} />
          <TextInput label="Mohri" placeholder="Enter mohri measurement" styles={{ label: { color: "black" } }} />
        </SimpleGrid>

        <Title order={5} c="gray.9" mb="md">
          Coat Measurements
        </Title>
        <SimpleGrid cols={3} mb="xl">
          <TextInput label="Length" placeholder="Enter coat length" styles={{ label: { color: "black" } }} />
          <TextInput label="Chest" placeholder="Enter chest measurement" styles={{ label: { color: "black" } }} />
          <TextInput label="Below Chest" placeholder="Enter below chest measurement" styles={{ label: { color: "black" } }} />
          <TextInput label="Waist" placeholder="Enter waist measurement" styles={{ label: { color: "black" } }} />
          <TextInput label="Hip" placeholder="Enter hip measurement" styles={{ label: { color: "black" } }} />
          <TextInput label="Sleeve" placeholder="Enter sleeve measurement" styles={{ label: { color: "black" } }} />
          <TextInput label="Neck" placeholder="Enter neck measurement" styles={{ label: { color: "black" } }} />
          <TextInput label="Shoulder" placeholder="Enter shoulder measurement" styles={{ label: { color: "black" } }} />
          <TextInput label="Cap" placeholder="Enter cap measurement" styles={{ label: { color: "black" } }} />
          <TextInput label="Full Height" placeholder="Enter full height" styles={{ label: { color: "black" } }} />
        </SimpleGrid>

        <Title order={5} c="gray.9" mb="md">
          Pant Measurements
        </Title>
        <SimpleGrid cols={3} mb="xl">
          <TextInput label="Length" placeholder="Enter pant length" styles={{ label: { color: "black" } }} />
          <TextInput label="Waist" placeholder="Enter waist measurement" styles={{ label: { color: "black" } }} />
          <TextInput label="Thigh" placeholder="Enter thigh measurement" styles={{ label: { color: "black" } }} />
          <TextInput label="Bottom" placeholder="Enter bottom measurement" styles={{ label: { color: "black" } }} />
        </SimpleGrid>

        <Flex justify="end">
          <Button mt="lg">Submit</Button>
        </Flex>
      </MainLayout.Content>
    </MainLayout>
  );
}

export default ClientMeasurementForm;
