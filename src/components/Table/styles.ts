import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    overflow-x: auto;
    width: 100%;

    a {
      text-decoration: none;
      color: ${theme.colors.primary[500]};
    }
  `}
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
`;

export const Thead = styled.thead``;

export const Tr = styled.tr`
  ${({ theme }) => css`
    &:not(:last-child) {
      border-bottom: 1px solid ${theme.colors.neutral["600"]};
    }
  `}
`;

export const Th = styled.th`
  ${({ theme }) => css`
    text-align: left;
    padding: 0.8rem 2rem;
    background-color: ${theme.colors.primary[500]};
    font-weight: ${theme.font.weight.bold};
  `}
`;

export const Tbody = styled.tbody``;

export const Td = styled.td`
  ${({ theme }) => css`
    padding: 0.8rem 2rem;
    color: ${theme.colors.neutral[300]};

    &:nth-child(5) {
      text-align: center;
    }
  `}
`;
