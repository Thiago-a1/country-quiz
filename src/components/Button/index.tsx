import { MdCheckCircleOutline, MdOutlineHighlightOff} from 'react-icons/md';

import { UserObject } from '../Card';
import { Container } from './styles';

interface ButtonProps {
  leatter: string;
  option: string;
  check: (event: React.MouseEvent<HTMLButtonElement>) => void;
  user: UserObject | undefined;
}

export const Button = ({
  leatter, 
  option, 
  check,
  user}: ButtonProps) => {

  const correct = user?.correctOption === option;
  const userCliked = user?.option === option;
  
  return (
    <Container 
      style={user && {pointerEvents: 'none'}}
      disabled={user ? true : false}
      value={option} 
      onClick={check}
      user={user ? true : false}
      correct={correct}
      userClicked={userCliked}
    >
      <h3>{leatter}</h3>
      <span>{option}</span>
      {correct ? 
        <MdCheckCircleOutline size="20" /> : 
        !correct && userCliked && 
        <MdOutlineHighlightOff size="20" />}
    </Container>
  )
}