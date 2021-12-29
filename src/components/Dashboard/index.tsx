import { useContext, useState } from 'react';
import { QuestionsContext } from '../../contexts/QuestionsContext';

import { Card } from '../Card';
import { SkeletonCard } from '../SkeletonCard';

import { Container } from './styles';

export const Dashboard = () => {
  const { loading } = useContext(QuestionsContext);

  return (
    <Container>
      <h1>Country Quiz</h1>
      {loading ? <SkeletonCard /> : null}
      {!loading && (
        <Card/>
      )}
    </Container>
  )
}