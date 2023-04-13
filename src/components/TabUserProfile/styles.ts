import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  max-width: 62.5rem;
`;

export const Tabs = styled.div`
  display: flex;
  justify-content: space-between;
`;

interface TabProps {
  isActive: boolean;
}

export const TabButton = styled.button<TabProps>`
  ${({ theme, isActive }) => css`
    position: relative;
    background-color: transparent;
    border: none;
    width: 15.9rem;
    font-weigth: ${theme.font.weight.medium};
    font-size: ${theme.font.sizes["2xl"]};
    color: ${isActive ? theme.colors.neutral[300] : theme.colors.neutral[500]};

    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      top: 35px;
      left: 0;
      border-bottom: 0.5rem solid
        ${isActive ? theme.colors.primary[500] : "none"};
      width: 100%;
    }
  `}
`;

export const TabContent = styled.div<TabProps>`
  ${({ theme, isActive }) => css`
    margin-top: 5rem;
    display: ${isActive ? "flex" : "none"};
    flex-direction: column;
    gap: 3.2rem;

    div {
      display: flex;
      flex-direction: column;

      p {
        font-size: ${theme.font.sizes.lg};
        font-weight: ${theme.font.weight.medium};
      }

      span {
        margin-top: 0.8rem;
        font-size: ${theme.font.sizes.base};
        font-weight: ${theme.font.weight.regular};
        color: ${theme.colors.neutral[300]};
      }
    }
  `}
`;
