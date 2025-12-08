type UserList = {
  id: number;
  username: string;
  isActive: boolean;
}[];

type UnboxArray<T> = T extends (infer U)[] ? U : never;

type SingleUser = UnboxArray<UserList>;

const UserCard = ({ user }: { user: SingleUser }) => {
  return (
    <div>
      {user.id}. {user.username} :
      {user.isActive ? " Masih Aktif Bos" : " Sudah Pensiun/Dipecat"}
    </div>
  );
};

const UserListContainer = () => {
  const users: UserList = [
    { id: 1, username: "Ucup123", isActive: true },
    { id: 2, username: "Renday123", isActive: false },
  ];

  return (
    <div>
      <h2>3. Conditional Type Infer</h2>
      {users.map((user) => (
        <UserCard user={user} key={user.id} />
      ))}
    </div>
  );
};

export default UserListContainer;
