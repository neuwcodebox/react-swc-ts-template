import './MainPage.css';
import { Button, Code, Flex, Heading, Link, Text } from '@radix-ui/themes';
import { Pencil, Plus } from 'lucide-react';
import { useState } from 'react';
import reactLogo from '@/assets/react.svg';
import viteLogo from '/vite.svg';

export function MainPage() {
  const [count, setCount] = useState(0);

  return (
    <Flex direction="column" gap="6" align="center" p="8">
      <Flex direction="row" gap="4" justify="center">
        <Link href="https://vite.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </Link>
        <Link href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </Link>
      </Flex>
      <Heading>Vite + React</Heading>
      <Flex direction="column" gap="2" align="center">
        <Button onClick={() => setCount((count) => count + 1)}>
          <Plus className="inline-icon" /> count is {count}
        </Button>
        <Text as="p">
          <Pencil className="inline-icon" /> Edit <Code>src/App.tsx</Code> and save to test HMR
        </Text>
      </Flex>
      <Text as="p" size="1" color="gray">
        Click on the Vite and React logos to learn more
      </Text>
    </Flex>
  );
}
