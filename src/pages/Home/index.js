import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Paginator from 'react-hooks-paginator';

import api from '../../Services/api';

import { CollaboratorsList } from './styles';

import CollaboratorData from '../../components/CollaboratorData';
import Container from '../../components/Container';
import Loading from '../../components/Loading';

export default function Home() {
  const [collaborators, setCollaborators] = useState([]);
  const [offset, setOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentData, setCurrentData] = useState([]);
  const pageLimit = 10;
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadCollaborators() {
      setLoading(true);
      const response = await api.get('/collaborator');
      setCollaborators(response.data);
      setLoading(false);
    }
    loadCollaborators();
  }, []);

  useEffect(() => {
    setCurrentData(collaborators.slice(offset, offset + pageLimit));
  }, [offset, collaborators]);

  return (
    <Container>
      {loading ? (
        <Loading />
      ) : (
        <>
          <CollaboratorsList>
            {currentData.map(collaborator => (
              <Link to={`collaborator/${collaborator.id}`}>
                <CollaboratorData data={collaborator} />
              </Link>
            ))}
          </CollaboratorsList>

          <Paginator
            totalRecords={collaborators.length}
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
