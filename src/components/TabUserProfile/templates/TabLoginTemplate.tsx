export interface UserLogin {
  uuid: string;
  username: string;
  email: string;
}

export const TabLoginTemplate = (login: UserLogin) => {
  return (
    <>
      <div>
        <p>Uuid</p>
        <span>{login.uuid}</span>
      </div>
      <div>
        <p>Username</p>
        <span>{login.username}</span>
      </div>
      <div>
        <p>Email</p>
        <span>{login.email}</span>
      </div>
    </>
  );
};
