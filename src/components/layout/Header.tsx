import { Group, Container, Title, Button } from "@mantine/core";
import Link from "next/link";
import { IconDatabase } from "@tabler/icons-react";

export function Header() {
  return (
    <header className="border-b border-gray-200 py-4">
      <Container size="lg">
        <Group justify="space-between" align="center">
          <Link href="/" className="no-underline">
            <Title order={2} c="blue">
              SH TEXTILE
            </Title>
          </Link>

          <Group>
            <Link href="/records" className="no-underline">
              <Button variant="light" leftSection={<IconDatabase size={20} />}>
                View Records
              </Button>
            </Link>
          </Group>
        </Group>
      </Container>
    </header>
  );
}
