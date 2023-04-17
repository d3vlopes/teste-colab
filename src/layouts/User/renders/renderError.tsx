import { Link } from "react-router-dom";

import * as S from "../styles";

export const renderError = (error: string) => {
  return (
    <div>
      <p>{error}</p>

      <S.Back isCenter>
        <Link to="/">Back</Link>
      </S.Back>
    </div>
  );
};
