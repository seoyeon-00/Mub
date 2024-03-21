import { createContext, useContext, useEffect, useState } from "react";
import { getUserInfo } from "../services/useAuth";
import { UserType } from "@/types/types";
import { getUserById } from "@/services/user";

type UserContextType = {
  user: {
    id: string | null;
    email: string | null;
    nickname: string | null;
    profile: string | null;
  };
  accessToken: string | null;
};

export const UserContext = createContext<UserContextType | undefined>(
  undefined
);

export const UserContextProvider = ({ children }: any) => {
  // 브라우저 환경에서 localStorage 사용
  useEffect(() => {
    if (typeof window !== "undefined") {
      const userString = localStorage.getItem(
        "sb-oidufxfbxtmfkloiiigx-auth-token"
      );
      const userObj = JSON.parse(userString as string) || "";
      setToken(userObj.access_token);
    }
  }, []);

  const [isLoadingData, setIsLoadingData] = useState(false);
  const [userData, setUserData] = useState<UserType>({
    id: null,
    email: null,
    nickname: null,
    profile: null,
  });
  const [token, setToken] = useState();

  useEffect(() => {
    setIsLoadingData(true);
    getUserInfo()
      .then(async (user) => {
        if (user) {
          const userData = await getUserById(user.id);
          setUserData({
            id: user.id,
            email: user.email ?? null,
            nickname: user.user_metadata?.nickname ?? null,
            profile: userData[0].profile_image.image_url,
          });
        }
      })
      .catch((error) => {
        console.error("사용자 정보를 가져오는 중 에러가 발생했습니다:", error);
      })
      .finally(() => {
        setIsLoadingData(false);
      });
  }, []);

  const value = {
    user: {
      id: userData.id,
      email: userData.email,
      nickname: userData.nickname,
      profile: userData.profile,
    },
    accessToken: token ?? null,
  };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export const useUser = () => {
  const context = useContext(UserContext);

  if (context === undefined) {
    throw new Error("useUser must be used within a MyUserContextProvider");
  }

  return context;
};
