import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import api from '~/services/api';
import { DefaultLayout } from '~/components/Layout';
import Question from '~/components/Question';

export default function Questions() {
  const router = useRouter();
  const [questions, setQuestions] = useState([])
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadQuestions() {
      const { filter, id } = router.query

      const { data } = await api.get(`/questions/${filter}/${id}`);

      setQuestions(data)
      setLoading(false);
    }

    loadQuestions();
  }, []);

  return (
    <DefaultLayout>
      <h1>Perguntas</h1>

      {loading ? (
        <p>Carregando...</p>
      ) : (
          questions.map((question) => (
            <Question
              title={question.title}
              tags={question.tags}
              votes={question.score}
              answers={question.answers.length} />
          ))
        )}
    </DefaultLayout>
  );
}
