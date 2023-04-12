import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  padding: 3.2rem;
`;

export const Heading = styled.h1`
  ${({ theme }) => css`
    text-align: center;
    font-size: ${theme.font.sizes["4xl"]};
    font-weight: ${theme.font.weight.bold};
  `}
`;

export const SearchWrapper = styled.div`
  max-width: 70.4rem;
  margin: 0 auto;
  width: 100%;
`;

export const Divider = styled.hr`
  border: 1px solid #2d2b2b;
`;

export const Error = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: red;
`;
