import styled from 'styled-components';

type ContainerProps = {
  sidebar: boolean;
}

export const Background = styled.div`
  position: fixed;
  height: 100%;
  top: 0px;
  right: 0px;
  width: 100%;
  background-color: transparent;

`

export const Container = styled.aside<ContainerProps>`
  background-color: #1269eb;
  position: fixed;
  height: 100%;
  top: 0px;
  right: 0px;
  width: 300px;
  right: ${props => props.sidebar ? '0' : '-100%'};
  animation: showSidebar .4s;

  > svg {
    position: fixed;
    color: white;
    width: 30px;
    height: 30px;
    margin-top: 32px;
    margin-left: 32px;
    cursor: pointer;
  }

  @keyframes showSidebar {
    from {
      opacity: 0;
      width: 0;
    }
    to {
      opacity: 1;
      width: 300px;
    }
  }
`;

export const Content = styled.div`
  margin-top: 100px;
`;