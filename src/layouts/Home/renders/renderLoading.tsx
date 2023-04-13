import { theme } from "../../../styles/theme";

import { Loading } from "../../../components";

export const renderLoading = () => {
  return <Loading color={theme.colors.primary[500]} />;
};
