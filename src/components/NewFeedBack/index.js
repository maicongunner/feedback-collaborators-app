import React, { useState } from 'react';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import api from '../../Services/api';

import { Container } from './styles';

export default function NewFeedBack({
  collaboratorId,
  loadFeedBacksCollaborator,
}) {
  const [feedback, setFeedback] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await api.post(
        `/collaborator/${collaboratorId}/feedback`,
        {
          collaboratorId,
          message: feedback,
          like: 0,
        }
      );
      toast.success('Feedback cadastrado com sucesso!');
      loadFeedBacksCollaborator();
      setFeedback('');
    } catch (error) {
      toast.error(`Erro ao cadastrar seu feedback: [${error.message}]`);
    }
  }

  return (
    <Container>
      <h4>Novo FeedBack:</h4>
      <form onSubmit={handleSubmit}>
        <textarea
          id="company"
          placeholder="Escreva aqui a sua mensagem..."
          value={feedback}
          required
          onChange={event => setFeedback(event.target.value)}
        />
        <button type="submit" className="btn">
          Enviar
        </button>
      </form>
    </Container>
  );
}

NewFeedBack.propTypes = {
  collaboratorId: PropTypes.number.isRequired,
  loadFeedBacksCollaborator: PropTypes.func.isRequired,
};
