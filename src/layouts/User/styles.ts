import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6.5rem 3.2rem;
  flex-direction: column;
`;

export const Divider = styled.hr`
  border: 1px solid #2d2b2b;
  width: 100%;
  margin: 4.8rem 0 3rem;
`;

interface BackProps {
  isCenter?: boolean;
}

const backModdifiers = {
  left: () => css`
    position: absolute;
    top: 1.6rem;
    left: 3.2rem;
  `,

  center: () => css`
    text-align: center;
    margin-top: 0.8rem;
  `,
};

export const Back = styled.div<BackProps>`
  ${({ theme, isCenter }) => css`
    ${isCenter ? backModdifiers.center : backModdifiers.left};

    a {
      color: ${theme.colors.neutral["500"]};
      transition: color ${theme.transition.default};

      &:hover {
        color: ${theme.colors.neutral["300"]};
      }
    }
  `}
`;
