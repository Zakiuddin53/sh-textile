import { Group, Container, Title, Button } from "@mantine/core";
import Link from "next/link";
import Image from "next/image";

export function Header() {
  return (
    <header className="border-b border-gray-200 py-4">
      <Container size="lg">
        <Group justify="space-between" align="center">
          <Link href="/" className="no-underline">
            <Group align="center" gap="sm">
              <Image src="/logo.jpeg" alt="Mehdi Hassan Logo" height={50} width={50} priority style={{ width: "auto", height: "50px" }} />
              <Title order={2} className="font-arabic" style={{ fontSize: "1.8rem", color: "black" }}>
                SH Textiles
              </Title>
            </Group>
          </Link>

          <Group>
            <Link href="/" className="no-underline">
              <Button variant="light" color="dark" size="md" className="font-medium">
                Client Measurement
              </Button>
            </Link>

            <Link href="/records" className="no-underline">
              <Button variant="light" color="dark" size="md" className="font-medium">
                Client Records
              </Button>
            </Link>
          </Group>
        </Group>
      </Container>
    </header>
  );
}
