import QuizIcon from '../../assets/undraw_adventure_4hum 1.svg';

import { Container, SkeletonQuestionsContainer } from './styles';

export const SkeletonCard = () => {
  return (
    <Container>
      <div>
        <img src={QuizIcon} alt="quiz icon" />
      </div>

      <SkeletonQuestionsContainer>
        <h2></h2>

        <div className='skeleton-button'></div>
        <div className='skeleton-button'></div>
        <div className='skeleton-button'></div>
        <div className='skeleton-button'></div>
      </SkeletonQuestionsContainer>
    </Container>
  )
}