import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Creators as counterActions } from '../../store/ducks/counter'
import { Container, DescriptionContainer } from './styles';

const Counter = () => {
  const { increment, decrement } = counterActions
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