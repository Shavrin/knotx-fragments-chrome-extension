import styled from 'styled-components';

const Fragment = styled.div`
    display: flex;
    border-bottom: 1px solid ${({ theme }) => theme.borderColor};
    color: ${({ theme }) => theme.textColor};
    background-color: ${({ expanded, theme }) => (expanded ? theme.fragmentHighlight : '')};

    &:nth-child(2n + 1) {
      background-color: ${({ theme }) => theme.oddFragmentBgColor};;
      background-color: ${({ expanded, theme }) => (expanded ? theme.fragmentHighlight : '')};
    }

    &:hover, &:focus{
      background-color: ${({ theme }) => theme.fragmentHighlight};
    }
`;

const StatusWrapper = styled.div`
    height: 15px;
    width: 15px;
    margin: 2px;
`;

const Status = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 50%;

    background-color: ${({ status }) => (status === 'success' ? '#01a101' : '')};
    background-color: ${({ status }) => (status === 'error' ? '#ff0000' : '')};
    background-color: ${({ status }) => (status === 'unprocessed' ? '#a7a7a7' : '')};
    background-color: ${({ status }) => ((status === 'other' || status === 'missing') ? '#ffbb00' : '')};
`;

const Id = styled.div`
    overflow: hidden;
    flex: 1;
    border-right: 1px solid ${({ theme }) => theme.borderColor};
`;

const Type = styled.div`
    flex: 1;
`;

const Styled = {
  Fragment,
  StatusWrapper,
  Status,
  Id,
  Type,
};

export default Styled;
