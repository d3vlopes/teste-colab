import { useTheme } from "styled-components";
import { FaSpinner } from "react-icons/fa";

import * as S from "./styles";

export interface LoadingProps {
  color?: string;
  size?: string | number;
}

export const Loading = ({ color, size }: LoadingProps) => {
  const theme = useTheme();

  return (
    <S.Wrapper color={color || theme.colors.primary[500]} size={size || 3.4}>
      <FaSpinner aria-label="Icon of dots loading" />
    </S.Wrapper>
  );
};
