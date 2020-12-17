import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment} from "../../store/acctions/counterAcction"
import { Container, DescriptionContainer } from './styles';

const Counter = () => {
  const { count } = useSelector((state) => state.counter)
  const dispatch = useDispatch()

  return (
    <Container>
      <h1>React/Redux File Architecture: Ducks It Up!</h1>
      <DescriptionContainer>
   
        <button onClick={() => dispatch(decrement())}>-</button>
        <span>{count}</span>
        <button onClick={() => dispatch(increment())}>+</button>
        
      </DescriptionContainer>
    </Container>
  );
}


export default Counter