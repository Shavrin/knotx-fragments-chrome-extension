import styled from 'styled-components';

const NodeList = styled.div`
    display: ${({ expanded }) => (expanded ? 'block' : 'none')};
`;

const NodeButton = styled.button`
    background-color: transparent;
    border: 0;
    width: 100%;
    color: ${({ theme }) => theme.textColor};
    text-align: start;
    border-bottom: 1px solid ${({ theme }) => theme.borderColor};

    &:hover {
      background-color: ${({ theme }) => theme.nodeHighlight};
    }

    &:nth-child(2n + 1) {
      background-color: ${({ theme }) => theme.oddNodeBgColor};

      &:hover {
        background-color: ${({ theme }) => theme.nodeHighlight};
      }
    }
`;

const Styled = {
  NodeList,
  NodeButton,
};

export default Styled;
