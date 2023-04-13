import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.img`
  width: 15rem;
  height: 15rem;
  border-radius: 50%;
  object-fit: cover;
`;

export const Heading = styled.h1`
  ${({ theme }) => css`
    margin-top: 3.3rem;
    color: ${theme.colors.neutral[100]};
    font-weight: ${theme.font.weight.bold};
    font-size: ${theme.font.sizes["4xl"]};
  `}
`;

export const Subtitle = styled.h2`
  ${({ theme }) => css`
    text-align: center;
    font-weight: ${theme.font.weight.regular};
    font-size: ${theme.font.sizes["2xl"]};
    color: ${theme.colors.neutral["400"]};
  `}
`;
