"use client";

import { Container, Text, Group } from "@mantine/core";

export function Footer() {
  return (
    <footer className="border-t border-gray-200 py-4 mt-auto">
      <Container size="lg">
        <Group justify="space-between" align="center">
          <Text size="sm" c="dimmed">
            © SH TEXTILE. All rights reserved.
          </Text>
          <Text size="sm" c="dimmed">
            Tailoring Management System
          </Text>
        </Group>
      </Container>
    </footer>
  );
}
