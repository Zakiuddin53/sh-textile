import { Flex, Stack, StackProps, StyleProp, Title } from "@mantine/core";
import React from "react";

interface MainLayoutProps extends React.PropsWithChildren {
  title: string;
}

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
  return (
    <Flex justify={props.justify ?? "space-between"}>{props.children}</Flex>
  );
};

MainLayout.Content = function Content(
  props: React.PropsWithChildren<{ gap?: StackProps["gap"] }>
) {
  return (
    <Stack
      style={{
        borderRadius: ".375rem",
        backgroundColor: "white",
        padding: "2.5rem",
      }}
      gap={props.gap ?? "xl"}
    >
      {props.children}
    </Stack>
  );
};
