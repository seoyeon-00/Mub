import { create } from "zustand";
import { persist } from "zustand/middleware";

interface LoginStore {
  isLogin: boolean;
  login: () => void;
  logout: () => void;
}

const useLogin = create(
  persist<LoginStore>(
    (set, get) => ({
      isLogin: false,
      login: () => set({ isLogin: true }),
      logout: () => set({ isLogin: false }),
    }),
    {
      name: "isLoginStorage",
    }
  )
);

export default useLogin;
