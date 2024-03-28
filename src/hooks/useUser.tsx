import { createContext, useContext, useEffect, useState } from "react";
import { getUserInfo } from "../services/useAuth";
import { UserType } from "@/types/types";
import { getUserById } from "@/services/user";
import useLogin from "@/stores/useLogin";
import { DEFAULT_USER_DATA } from "@/constants/initialData";

type UserContextType = {
  user: {
    id: string | null;
    email: string | null;
    nickname: string | null;
    likes: string[] | null;
    profile: {
      id: string | null;
      image_url: string | null;
    };
  };
  accessToken: string | null;
};

export const UserContext = createContext<UserContextType | undefined>(
  undefined
);

interface UserContextProviderProp {
  children: React.ReactNode;
}

export const UserContextProvider: React.FC<UserContextProviderProp> = ({
  children,
}) => {
  const { isLogin } = useLogin();
  const [userData, setUserData] = useState<UserType>(DEFAULT_USER_DATA);
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    // 브라우저 환경에서 localStorage 사용
    const userString = localStorage.getItem(
      "sb-oidufxfbxtmfkloiiigx-auth-token"
    );
    const userObj = JSON.parse(userString as string) || "";

    getUserInfo()
      .then(async (user) => {
        if (user && isLogin) {
          const userData = await getUserById(user.id);
          setUserData({
            id: user.id,
            email: user.email ?? null,
            nickname: user.user_metadata?.nickname ?? null,
            likes: userData[0].likes,
            profile: {
              id: userData[0].profile_image.profile_images,
              image_url: userData[0].profile_image.image_url,
            },
          });
          setToken(userObj.access_token);
        } else {
          setUserData(DEFAULT_USER_DATA);
          setToken(null);
        }
      })
      .catch((error) => {
        console.error("사용자 정보를 가져오는 중 에러가 발생했습니다:", error);
      });
  }, [isLogin]);

  const value = {
    user: {
      id: userData.id,
      email: userData.email,
      nickname: userData.nickname,
      likes: userData.likes,
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
