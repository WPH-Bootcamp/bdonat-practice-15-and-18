import { useState, useEffect } from "react";
type BackendResponse<T> = {
  code: number;
  message: string;
  result: T;
  timestamp: string;
};

type ExtractResult<T> = T extends BackendResponse<infer Data> ? Data : never;
type ProfilCardResponse = BackendResponse<{ id: 1; name: "Ruddy" }>;

export const ProfileCard = () => {
  const [user, setUser] = useState<ExtractResult<ProfilCardResponse> | null>(
    null
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000));

        const respons: ProfilCardResponse = {
          code: 200,
          message: "success",
          timestamp: new Date().toISOString(),
          result: {
            id: 1,
            name: "Ruddy",
          },
        };
        setUser(respons.result);
      } catch (e) {
        console.error("Gagal fetch", e);
      }
    };
    fetchData();
  }, []);
  if (!user) return <div>Loading data user...</div>;

  return (
    <div>
      <h2>Profile User</h2>
      <p>id: {user.id}</p>
      <p>name: {user.name}</p>
    </div>
  );
};
