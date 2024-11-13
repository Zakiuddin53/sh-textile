import { Flex, Stack, StackProps, StyleProp, Title } from "@mantine/core";
import React from "react";

interface MainLayoutProps {
  title: string;
  children: React.ReactNode;
}

interface HeaderProps {
  justify?: StyleProp<React.CSSProperties["justifyContent"]>;
  children: React.ReactNode;
}

interface ContentProps {
  gap?: StackProps["gap"];
  children: React.ReactNode;
}

const contentStyles = {
  borderRadius: ".375rem",
  backgroundColor: "white",
  padding: "2.5rem",
} as const;

interface MainLayoutComponent extends React.FC<MainLayoutProps> {
  Header: React.FC<HeaderProps>;
  Content: React.FC<ContentProps>;
}

const MainLayout: MainLayoutComponent = ({ children, title }) => {
  return (
    <Stack p="md">
      <Title order={3} c="black">
        {title}
      </Title>
      {children}
    </Stack>
  );
};

MainLayout.Header = function Header({ children, justify = "space-between" }: HeaderProps) {
  return <Flex justify={justify}>{children}</Flex>;
};

MainLayout.Content = function Content({ children, gap = "xl" }: ContentProps) {
  return (
    <Stack style={contentStyles} gap={gap}>
      {children}
    </Stack>
  );
};

MainLayout.displayName = "MainLayout";
MainLayout.Header.displayName = "MainLayout.Header";
MainLayout.Content.displayName = "MainLayout.Content";

export { MainLayout };
