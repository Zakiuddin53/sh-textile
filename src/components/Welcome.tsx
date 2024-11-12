import { Title, Text, Container } from "@mantine/core";

export function Welcome() {
  return (
    <Container size="md" py="xl">
      <Title order={1} ta="center" mt="md">
        Welcome to{" "}
        <Text
          inherit
          variant="gradient"
          component="span"
          gradient={{ from: "blue", to: "cyan" }}
        >
          SH TEXTILE
        </Text>
      </Title>
    </Container>
  );
}
