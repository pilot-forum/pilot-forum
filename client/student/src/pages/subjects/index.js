import React, { useState, useEffect } from 'react';
import api from '~/services/api';
import { DefaultLayout } from '~/components/Layout';
import Box from '~/components/Box';

export default function Disciplines() {
  const [disciplines, setDisciplines] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getDisciplines() {
      const { data } = await api.get('/subjects');
      setDisciplines(data);
      setLoading(false);
    }

    getDisciplines();
  }, []);

  return (
    <DefaultLayout>
      <h1>Todas as matérias</h1>
      {loading ? (
        <p>Carregando...</p>
      ) : (
          disciplines.map((subject) => (
            <Box
              key={subject.id}
              name={subject.name}
              link={`/questions?filter=subject&id=${subject.id}`}
            />
          ))
        )}

      {!loading && disciplines.length === 0 && (
        <p>Não foram encontradas matérias...</p>
      )}
    </DefaultLayout>
  );
}
