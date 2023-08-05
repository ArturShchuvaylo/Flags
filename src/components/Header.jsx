import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Container } from './Container';
import { clearControls } from '../store/controls/controlsSlice';
import { Switcher } from './Switcher';

const HeaderEl = styled.header`
  box-shadow: var(--shadow);
  background-color: var(--colors-ui-base);
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
`;

const Title = styled(Link).attrs({
  to: '/',
})`
  color: var(--colors-text);
  font-size: var(--fs-sm);
  text-decoration: none;
  font-weight: var(--fw-bold);
`;


export const Header = () => {
  const dispatch = useDispatch();


  return (
    <HeaderEl>
      <Container>
        <Wrapper>
          <Title onClick={() => dispatch(clearControls())}>Where is the world?</Title>
          <Switcher />
        </Wrapper>
      </Container>
    </HeaderEl>
  );
};
