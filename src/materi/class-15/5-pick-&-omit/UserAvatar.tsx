type User = {
  id: number;
  username: string;
  avatarUrl: string;
  email: string;
  address: {
    city: string;
    zip: string;
  };
  lastLogin: string;
  role: "admin" | "user";
};

// -. Pick
type AvatarProps = Pick<User, "username" | "avatarUrl">;

export const UserAvatar = ({ username, avatarUrl }: AvatarProps) => {
  return (
    <div>
      <img src={avatarUrl} alt={username} />
      <p>{username}</p>
    </div>
  );
};

// -. Omit
type UserDataProps = Omit<User, "avatarUrl">;

export const UserDataList = ({
  address,
  email,
  id,
  lastLogin,
  role,
  username,
}: UserDataProps) => {
  return (
    <ul>
      <li>{id}</li>
      <li>{username}</li>
      <li>{email}</li>
      <li>{role}</li>
      <li>{lastLogin}</li>
      <li>
        {address.city} | {address.zip}
      </li>
    </ul>
  );
};
