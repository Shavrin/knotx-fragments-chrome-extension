import styled from 'styled-components';

const FragmentList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

const SortingWrapper = styled.div`
    display: flex;
`;

const SortingButton = styled.button`
      border: 0;
      margin: 2px;
      padding: 2px;
      color: ${({ theme }) => theme.textColor};
      background-color: ${({ theme }) => theme.buttonBgColor};
      &:active {
        background-color: ${({ theme }) => theme.fragmentHighlight};
      }
`;

const SortingButtonStatus = styled(SortingButton)`
      width: 15px;
`;

const SortingButtonId = styled(SortingButton)`
      flex: 1;
`;

const SortingButtonType = styled(SortingButton)`
      flex: 1;
`;

const Styled = {
  FragmentList,
  SortingWrapper,
  SortingButton,
  SortingButtonStatus,
  SortingButtonId,
  SortingButtonType,
};

export default Styled;
