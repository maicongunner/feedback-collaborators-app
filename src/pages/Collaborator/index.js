import React, { useEffect, useState } from 'react';
import Paginator from 'react-hooks-paginator';
import PropTypes from 'prop-types';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import api from '../../Services/api';

import FeedBackCollaborator from '../../components/FeedBackCollaborator';
import NewFeedBack from '../../components/NewFeedBack';
import Container from '../../components/Container';
import Loading from '../../components/Loading';

import { BoxCollaboratorData, BoxFeedBacksCollaborator } from './styles';

export default function Collaborator({ match }) {
  const idCollaborator = match.params.id;
  const [feedbacks, setFeedBack] = useState([]);
  const [collaborator, setCollaborator] = useState([]);
  const [offset, setOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentData, setCurrentData] = useState([]);
  const pageLimit = 20;
  const [loadingCollaborator, setLoadingCollaborator] = useState(false);
  const [loadingFeedbacks, setLoadingFeedbacks] = useState(false);

  useEffect(() => {
    async function loadDataCollaborator() {
      setLoadingCollaborator(true);
      const response = await api.get(`/collaborator/${idCollaborator}`);
      setCollaborator(response.data);
      setLoadingCollaborator(false);
    }
    loadDataCollaborator();
  }, []);

  async function loadFeedBacksCollaborator() {
    setLoadingFeedbacks(true);
    const response = await api.get(`/collaborator/${idCollaborator}/feedback`);
    setFeedBack(response.data);
    setLoadingFeedbacks(false);
  }

  async function loadFeedBacksCollaboratorLike() {
    const response = await api.get(`/collaborator/${idCollaborator}/feedback`);
    setFeedBack(response.data);
  }

  useEffect(() => {
    loadFeedBacksCollaborator();
  }, [idCollaborator]);

  useEffect(() => {
    setCurrentData(feedbacks.slice(offset, offset + pageLimit));
  }, [offset, feedbacks]);

  return (
    <Container>
      {loadingCollaborator ? (
        <Loading />
      ) : (
        <BoxCollaboratorData>
          <>
            <Link to="/">
              <FaArrowLeft size={10} color="#4a90e2" />
              <span>Voltar</span>
            </Link>
            <div className="box-data-user">
              <figure>
                <img src={collaborator.avatar} alt={collaborator.name} />
              </figure>
              <div>
                <p>
                  <b>Nome:</b> {collaborator.name}
                </p>
                <p>
                  <b>Empresa:</b> {collaborator.company}
                </p>
                <p>
                  <b>Cargo:</b> {collaborator.role}
                </p>
              </div>
            </div>
          </>
        </BoxCollaboratorData>
      )}

      <hr />

      <NewFeedBack
        collaboratorId={collaborator.id}
        loadFeedBacksCollaborator={loadFeedBacksCollaborator}
      />

      <hr />

      {loadingFeedbacks ? (
        <Loading />
      ) : (
        <>
          <BoxFeedBacksCollaborator>
            <h4>FeedBacks:</h4>
            {feedbacks.length ? (
              currentData.map(feed => (
                <FeedBackCollaborator
                  key={feed.id}
                  data={feed}
                  loadFeedBacksCollaborator={loadFeedBacksCollaborator}
                  loadFeedBacksCollaboratorLike={loadFeedBacksCollaboratorLike}
                />
              ))
            ) : (
              <span>Nenhum feedback foi registrado para este colaborador.</span>
            )}
          </BoxFeedBacksCollaborator>

          <Paginator
            totalRecords={feedbacks.length}
            pageLimit={pageLimit}
            pageNeighbours={2}
            setOffset={setOffset}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </>
      )}
    </Container>
  );
}

Collaborator.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number,
    }),
  }).isRequired,
};
