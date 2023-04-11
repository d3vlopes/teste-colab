import styled, { css } from "styled-components";

export const Input = styled.input`
  ${({ theme }) => css`
    width: 100%;
    height: 6.8rem;
    padding: 2.4rem 2rem;
    border: 1px solid ${theme.colors.neutral[200]};
    background: transparent;
    border-radius: 8px;
    color: ${theme.colors.neutral[200]};

    &::placeholder {
      color: ${theme.colors.neutral[500]};
    }
  `}
`;
