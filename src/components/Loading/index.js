import React from 'react';
import { FaSpinner } from 'react-icons/fa';

import { Container } from './styles';

export default function Loading() {
  return (
    <Container>
      <FaSpinner size={30} color="#999" />
    </Container>
  );
}
