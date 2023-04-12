import * as S from "../styles";

export const renderError = (error: string) => {
  return (
    <S.Error>
      <p>{error}</p>
    </S.Error>
  );
};
