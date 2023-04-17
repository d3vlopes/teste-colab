import { capitalize } from "../../../utils";

import { nationalityMap } from "../helpers";

export type Nationality =
  | "AU"
  | "BR"
  | "CA"
  | "CH"
  | "DE"
  | "DK"
  | "ES"
  | "FI"
  | "FR"
  | "GB"
  | "IE"
  | "IN"
  | "IR"
  | "MX"
  | "NL"
  | "NO"
  | "NZ"
  | "RS"
  | "TR"
  | "UA"
  | "US";

export interface UserInfo {
  firstName: string;
  lastName: string;
  gender: string;
  title: string;
  email: string;
  phone: string;
  nationality: Nationality;
}

export const TabInfoTemplate = (info: UserInfo) => {
  return (
    <>
      <div>
        <p>First Name</p>
        <span>{capitalize(info.firstName)}</span>
      </div>
      <div>
        <p>Last Name</p>
        <span>{capitalize(info.lastName)}</span>
      </div>
      <div>
        <p>Gender</p>
        <span>{capitalize(info.gender)}</span>
      </div>
      <div>
        <p>Title</p>
        <span>{capitalize(info.title)}</span>
      </div>
      <div>
        <p>Email</p>
        <span>{info.email}</span>
      </div>
      <div>
        <p>Phone</p>
        <span>{info.phone}</span>
      </div>
      <div>
        <p>Nationality</p>
        <span>{nationalityMap[info.nationality]}</span>
      </div>
    </>
  );
};
