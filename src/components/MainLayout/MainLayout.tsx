import { Flex, Stack, StackProps, StyleProp, Title } from "@mantine/core";
import React from "react";

interface MainLayoutProps extends React.PropsWithChildren {
  title: string;
}

// Define styles outside the component to ensure consistency
const contentStyles = {
  borderRadius: ".375rem",
  backgroundColor: "white",
  padding: "2.5rem",
} as const;

export function MainLayout({ children, title }: Readonly<MainLayoutProps>) {
  return (
    <Stack p="md">
      <Title order={3} c="black">
        {title}
      </Title>
      {children}
    </Stack>
  );
}

MainLayout.Header = function Header(
  props: React.PropsWithChildren<{
    justify?: StyleProp<React.CSSProperties["justifyContent"]>;
  }>
) {
  // Use a default value consistently
  const justifyContent = props.justify || "space-between";
  return <Flex justify={justifyContent}>{props.children}</Flex>;
};

MainLayout.Content = function Content(
  props: React.PropsWithChildren<{ gap?: StackProps["gap"] }>
) {
  // Use a default value consistently
  const gapValue = props.gap || "xl";
  return (
    <Stack style={contentStyles} gap={gapValue}>
      {props.children}
    </Stack>
  );
};
