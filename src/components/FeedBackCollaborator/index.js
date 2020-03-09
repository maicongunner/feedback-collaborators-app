import React, { useMemo } from 'react';
import { parseISO, formatDistance, differenceInMinutes } from 'date-fns';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import pt from 'date-fns/locale/pt';

import { FaRegThumbsUp, FaTimes } from 'react-icons/fa';
import api from '../../Services/api';
import { Container } from './styles';

export default function FeedBackCollaborator({
  data,
  loadFeedBacksCollaborator,
  loadFeedBacksCollaboratorLike,
}) {
  const datePost = useMemo(() => {
    return formatDistance(parseISO(data.createdAt), new Date(), {
      addSuffix: true,
      locale: pt,
    });
  }, [data.createdAt]);

  const minutes = differenceInMinutes(new Date(), parseISO(data.createdAt));
  const validateMinutes = minutes <= 5;

  async function handleLike(collaboratorId, id) {
    try {
      const response = await api.put(
        `/collaborator/${collaboratorId}/feedback/${id}`,
        {
          like: parseInt(data.like) + 1,
        }
      );
      toast.success('Like registrado com sucesso!');
      loadFeedBacksCollaboratorLike();
    } catch (error) {
      toast.error(`Houve um erro: ${error.message}`);
    }
  }

  async function handleDelete(collaboratorId, id) {
    try {
      const response = await api.delete(
        `/collaborator/${collaboratorId}/feedback/${id}`
      );
      loadFeedBacksCollaborator();
      toast.success('Feedback removido com sucesso!');
    } catch (error) {
      toast.error(`Houve um erro ao remover o feedback:${error.message}`);
    }
  }

  return (
    <Container>
      <p>
        <b>Mensagem:</b> {data.message} <span>{datePost} </span>
      </p>
      <div>
        <button
          type="button"
          onClick={() => handleLike(data.collaboratorId, data.id)}
        >
          <FaRegThumbsUp size={11} color="#ffffff" />
          <span>
            {data.like === 1 ? `${data.like} like` : `${data.like} likes`}
          </span>
        </button>
        {validateMinutes && (
          <button
            type="button"
            className="delete"
            onClick={() => handleDelete(data.collaboratorId, data.id)}
          >
            <FaTimes size={11} color="#ffffff" />
            <span>Excluir</span>
          </button>
        )}
      </div>
    </Container>
  );
}

FeedBackCollaborator.propTypes = {
  data: PropTypes.shape({
    like: PropTypes.number,
    message: PropTypes.string,
    collaboratorId: PropTypes.number,
    id: PropTypes.number,
    createdAt: PropTypes.string,
  }).isRequired,
  loadFeedBacksCollaborator: PropTypes.func.isRequired,
  loadFeedBacksCollaboratorLike: PropTypes.func.isRequired,
};
