import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function CollaboratorData({ data }) {
  return (
    <Container key={data.id}>
      <div>
        <p>
          <b>Nome:</b> {data.name}
        </p>
        <p>
          <b>Empresa:</b> {data.company}
        </p>
        <p>
          <b>Cargo:</b> {data.role}
        </p>
      </div>
    </Container>
  );
}

CollaboratorData.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number,
    company: PropTypes.string,
    role: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
};
