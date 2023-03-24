import styled from 'styled-components';

export const StylledButton = styled.button`
  width: 100px;
  height: 28px;
  border: 2px solid ${({ theme }) => theme.green.light};
  border-radius: 14px;
  color: ${({ theme }) => theme.green.dark};
  background-color: ${({ theme }) => theme.green.light};
  letter-spacing: 0.6px;
  opacity: 1;

  &:hover {
    border-color: ${({ theme }) => theme.green.dark};
  }

  &:disabled {
    background-color: transparent;
    color: ${({ theme }) => theme.gray};
    border: 2px solid ${({ theme }) => theme.gray};
  }
`;

export const Container = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
`;

export const TextContainer = styled.div`
  width: 52px;
  font-style: italic;
`;

export const IconContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
