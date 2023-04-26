import { HiOutlineMenu } from 'react-icons/hi';
import { Navbar, Container, Button, Text } from '@mantine/core';
import { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';

export default function Nav(): JSX.Element {
  const [open, setOpen] = useState<boolean>(false);

  function handleMenuToggle() {
    setOpen(!open);
  }

  const ContainerStyle = {
    display: 'flex',
    alignItems: 'center',
  };

  const IconButtonStyle = {
    display: 'flex',
    alignItems: 'center',
  };

  const TextStyle = {
    marginLeft: '12px',
  };

  return (
    <Navbar>
      <Container style={ContainerStyle}></Container>
    </Navbar>
  );
}
