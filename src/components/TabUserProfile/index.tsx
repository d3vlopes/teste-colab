import { useState } from "react";

import {
  TabInfoTemplate,
  TabLocationTemplate,
  TabLoginTemplate,
  UserInfo,
  UserLocation,
  UserLogin,
} from "./templates";

import * as S from "./styles";

type TabType = "info" | "location" | "login";

export interface TabUserProfileProps {
  info: UserInfo;
  location: UserLocation;
  login: UserLogin;
}

export const TabUserProfile = ({
  info,
  location,
  login,
}: TabUserProfileProps) => {
  const [tabActive, setTabActive] = useState<TabType>("info");

  function handleTabActive(tab: TabType) {
    setTabActive(tab);
  }

  return (
    <S.Wrapper>
      <S.Tabs role="tablist" aria-label="User info tabs">
        <S.TabButton
          role="tab"
          aria-selected={tabActive === "info"}
          aria-controls="panel-info"
          id="tab-info"
          tabIndex={0}
          isActive={tabActive === "info"}
          onClick={() => handleTabActive("info")}
        >
          Info
        </S.TabButton>
        <S.TabButton
          role="tab"
          aria-selected={tabActive === "location"}
          aria-controls="panel-location"
          id="tab-location"
          tabIndex={-1}
          isActive={tabActive === "location"}
          onClick={() => handleTabActive("location")}
        >
          Location
        </S.TabButton>
        <S.TabButton
          role="tab"
          aria-selected={tabActive === "login"}
          aria-controls="panel-login"
          id="tab-login"
          tabIndex={-1}
          isActive={tabActive === "login"}
          onClick={() => handleTabActive("login")}
        >
          Login
        </S.TabButton>
      </S.Tabs>

      <S.TabContent
        id="panel-info"
        role="tabpanel"
        tabIndex={0}
        aria-labelledby="tab-info"
        aria-hidden={tabActive !== "info"}
        isActive={tabActive === "info"}
      >
        {TabInfoTemplate(info)}
      </S.TabContent>

      <S.TabContent
        id="panel-location"
        role="tabpanel"
        tabIndex={0}
        aria-labelledby="tab-location"
        aria-hidden={tabActive !== "location"}
        isActive={tabActive === "location"}
      >
        {TabLocationTemplate(location)}
      </S.TabContent>

      <S.TabContent
        id="panel-login"
        role="tabpanel"
        tabIndex={0}
        aria-labelledby="tab-login"
        aria-hidden={tabActive !== "login"}
        isActive={tabActive === "login"}
      >
        {TabLoginTemplate(login)}
      </S.TabContent>
    </S.Wrapper>
  );
};
