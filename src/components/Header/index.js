import React from 'react';
import { Link } from 'react-router-dom';

import { FaComments } from 'react-icons/fa';

import { Container } from './styles';

export default function Header() {
  return (
    <Container>
      <Link to="/">
        <FaComments size={30} color="#ffffff" />
        <h1>FeedbackCollaborators</h1>
      </Link>
    </Container>
  );
}
